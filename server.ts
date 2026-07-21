import express from "express";
import path from "path";
import fs from "fs/promises";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import Stripe from "stripe";
import { 
  getLeads, 
  saveLead, 
  updateLead, 
  getCustomers, 
  saveCustomer, 
  updateCustomer, 
  getMessages, 
  saveMessage, 
  markMessagesAsRead,
  Lead,
  Customer,
  Message,
  saveAnalyticsEvent,
  getAnalyticsEvents,
  AnalyticEvent
} from "./src/services/dbService.js";
import { runAutomations } from "./src/services/automationService.js";
import { GoogleGenAI } from "@google/genai";
import { getMatchedConcepts, calculatePackageRange } from "./src/data/designCatalog.js";
import { kv } from "@vercel/kv";

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
dotenv.config();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'sk_test_mock_secret_key_needs_to_be_configured_in_env_local';
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-02-02" as any
});

// Start Automation Service
setInterval(() => {
  runAutomations();
}, 60 * 60 * 1000); // Run every hour

// Run once on startup (with slight delay to let db init)
setTimeout(() => {
  runAutomations();
}, 5000);

// Create Nodemailer transporter safely
let transporter: any;
try {
  const smtpPortRaw = process.env.SMTP_PORT;
  const smtpPort = (smtpPortRaw && !isNaN(parseInt(smtpPortRaw))) ? parseInt(smtpPortRaw) : 587;
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: smtpPort,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER || undefined,
      pass: process.env.SMTP_PASS || undefined,
    },
  });
} catch (transporterErr) {
  console.error("Failed to initialize SMTP transporter:", transporterErr);
}

if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
  console.warn("SMTP credentials (SMTP_USER/SMTP_PASS) are not defined. Lead notification emails will be skipped.");
}

// Helper to get SMTP 'from' header dynamically based on admin secret
function getFromEmail(adminSecret?: any, defaultPrefix: string = "Quartz International") {
  let senderName = defaultPrefix;
  if (adminSecret === 'aura-admin-2026') {
    senderName = "Ken";
  } else if (adminSecret === 'qi-admin-2026') {
    senderName = "Jay";
  }

  let fromEmail = "info@quartzinternational.ca";
  if (process.env.SMTP_FROM) {
    const match = process.env.SMTP_FROM.match(/<([^>]+)>/);
    if (match && match[1]) {
      fromEmail = match[1];
    } else if (process.env.SMTP_FROM.includes('@')) {
      fromEmail = process.env.SMTP_FROM.trim();
    }
  } else if (process.env.SMTP_USER) {
    fromEmail = process.env.SMTP_USER;
  }

  return `"${senderName}" <${fromEmail}>`;
}

const app = express();
app.use(express.json({ limit: '10mb' }));

// API routes
app.post("/api/leads", async (req, res) => {
    const raw = req.body;
    
    const leadData: Lead = {
      id: raw.id || Math.random().toString(36).substr(2, 9),
      createdAt: raw.createdAt || new Date().toISOString(),
      leadStatus: raw.leadStatus || 'New Estimate Lead',
      name: raw.name,
      email: raw.email,
      phone: raw.phone,
      notes: raw.notes || "",
      layout: raw.state?.layout || raw.layout || "",
      quartzLevel: raw.state?.quartzLevel || raw.quartzLevel || "",
      selectedSlab: raw.state?.selectedSlab || raw.selectedSlab || "",
      countertopSqFt: raw.state?.countertopSqFt || raw.countertopSqFt || 0,
      countertopLinearFt: raw.state?.countertopLinearFt || raw.countertopLinearFt || 0,
      hasIsland: raw.state?.hasIsland || raw.hasIsland || false,
      islandType: raw.state?.islandType || raw.islandType || "none",
      includeCabinets: raw.state?.includeCabinets || raw.includeCabinets || false,
      cabinetLinearFt: raw.state?.cabinetLinearFt || raw.cabinetLinearFt || 0,
      cabinetStyle: raw.state?.cabinetStyle || raw.cabinetStyle || "",
      deliveryMethod: raw.state?.deliveryMethod || raw.deliveryMethod || "",
      selectedCabinetStyle: raw.state?.selectedCabinetStyle || raw.selectedCabinetStyle || "",
      timeline: raw.state?.timeline || raw.timeline || "",
      extras: raw.state?.extras ? Object.keys(raw.state.extras).filter(k => raw.state.extras[k] === true) : (raw.extras || []),
      countertopCostLow: raw.results?.countertop?.low || raw.countertopCostLow || 0,
      countertopCostHigh: raw.results?.countertop?.high || raw.countertopCostHigh || 0,
      cabinetCostLow: raw.results?.cabinets?.low || raw.cabinetCostLow || 0,
      cabinetCostHigh: raw.results?.cabinets?.high || raw.cabinetCostHigh || 0,
      totalCostLow: raw.results?.total?.low || raw.totalCostLow || 0,
      totalCostHigh: raw.results?.total?.high || raw.totalCostHigh || 0,
      includeCountertops: raw.state?.includeCountertops !== undefined ? raw.state.includeCountertops : (raw.includeCountertops !== undefined ? raw.includeCountertops : true),
      
      // Admin quote override fields
      quoteStatus: raw.quoteStatus || undefined,
      quoteNumber: raw.quoteNumber || undefined,
      quoteItems: raw.quoteItems || undefined,
      quoteTaxRate: raw.quoteTaxRate || undefined,
      quoteDiscount: raw.quoteDiscount || undefined,
      quoteSubtotal: raw.quoteSubtotal || undefined,
      quoteTax: raw.quoteTax || undefined,
      quoteTotal: raw.quoteTotal || undefined,

      // UTM & Behavior analytics
      utmSource: raw.utmSource || undefined,
      utmMedium: raw.utmMedium || undefined,
      utmCampaign: raw.utmCampaign || undefined,
      utmTerm: raw.utmTerm || undefined,
      utmContent: raw.utmContent || undefined,
      gclid: raw.gclid || undefined,
      behavior: raw.behavior || undefined,
    };

    // Auto link to customer profile
    // Auto link to customer profile
    if (!leadData.customerId && leadData.email) {
      const customers = await getCustomers();
      const existingCust = customers.find(c => c.email.toLowerCase() === leadData.email.toLowerCase());
      if (existingCust) {
        leadData.customerId = existingCust.id;
        if (req.body.files && Array.isArray(req.body.files)) {
          const files = existingCust.files || [];
          req.body.files.forEach((file: any) => {
            files.unshift({
              id: Math.random().toString(36).substr(2, 9),
              name: file.name || file.fileName,
              size: file.size || file.fileSize || "1.2 MB",
              uploadedAt: new Date().toISOString(),
              url: file.url || "#"
            });
          });
          await updateCustomer(existingCust.id, { files });
        }
      } else {
        const customerId = Math.random().toString(36).substr(2, 9);
        const files = (req.body.files && Array.isArray(req.body.files)) ? req.body.files.map((file: any) => ({
          id: Math.random().toString(36).substr(2, 9),
          name: file.name || file.fileName,
          size: file.size || file.fileSize || "1.2 MB",
          uploadedAt: new Date().toISOString(),
          url: file.url || "#"
        })) : [];
        const newCustomer: Customer = {
          id: customerId,
          createdAt: new Date().toISOString(),
          name: leadData.name,
          email: leadData.email,
          phone: leadData.phone,
          notes: "Auto-created from estimator lead inquiry.",
          files
        };
        await saveCustomer(newCustomer);
        leadData.customerId = customerId;
      }
    } else if (leadData.customerId) {
      if (req.body.files && Array.isArray(req.body.files)) {
        const customers = await getCustomers();
        const existingCust = customers.find(c => c.id === leadData.customerId);
        if (existingCust) {
          const files = existingCust.files || [];
          req.body.files.forEach((file: any) => {
            files.unshift({
              id: Math.random().toString(36).substr(2, 9),
              name: file.name || file.fileName,
              size: file.size || file.fileSize || "1.2 MB",
              uploadedAt: new Date().toISOString(),
              url: file.url || "#"
            });
          });
          await updateCustomer(existingCust.id, { files });
        }
      }
    }

    const saved = await saveLead(leadData);
    if (saved) {
      console.log("Lead saved successfully:", leadData.id);
      
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        // Build list of uploaded files for admin email
        let filesListHtml = "";
        if (req.body.files && Array.isArray(req.body.files) && req.body.files.length > 0) {
          filesListHtml = `
            <tr style="background-color: #FAF8F5;"><td colspan="2"><strong>Uploaded Files:</strong></td></tr>
            <tr>
              <td colspan="2">
                <ul style="margin: 0; padding-left: 20px;">
                  ${req.body.files.map((f: any) => `<li>${f.name} (${f.size || 'Unknown Size'})</li>`).join('')}
                </ul>
              </td>
            </tr>
          `;
        }

        // Send email to admin (non-blocking)
        const adminMailOptions = {
          from: process.env.SMTP_FROM || `"Quartz International Estimator" <no-reply@quartzinternational.ca>`,
          to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
          subject: `New Lead Received: ${leadData.name}`,
          html: `
            <h2>New Lead Details</h2>
            <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: sans-serif; border-color: #E5E2DC;">
              <tr style="background-color: #C6A87D; color: white;">
                <th colspan="2" style="text-align: left; padding: 10px;">Contact Information</th>
              </tr>
              <tr><td><strong>Name</strong></td><td>${leadData.name}</td></tr>
              <tr><td><strong>Email</strong></td><td>${leadData.email}</td></tr>
              <tr><td><strong>Phone</strong></td><td>${leadData.phone}</td></tr>
              <tr style="background-color: #FAF8F5;"><td colspan="2"><strong>Layout details:</strong></td></tr>
              <tr><td><strong>Countertops</strong></td><td>${leadData.countertopLinearFt} ft (${leadData.countertopSqFt} sq ft)</td></tr>
              <tr><td><strong>Quartz Level</strong></td><td>${leadData.quartzLevel}</td></tr>
              <tr><td><strong>Island Type</strong></td><td>${leadData.islandType}</td></tr>
              <tr><td><strong>Cabinets</strong></td><td>${leadData.includeCabinets ? `${leadData.cabinetLinearFt} ft (${leadData.cabinetStyle})` : 'No'}</td></tr>
              ${filesListHtml}
              <tr style="font-weight: bold; background-color: #f9f9f9;">
                <td><strong>Total Estimated Range</strong></td>
                <td>$${leadData.totalCostLow?.toLocaleString()} - $${leadData.totalCostHigh?.toLocaleString()}</td>
              </tr>
            </table>
          `
        };
        try {
          await transporter.sendMail(adminMailOptions);
          console.log("Admin email notification sent successfully.");
        } catch (err) {
          console.error("Failed to send admin email notification:", err);
        }

        // Send email to customer (non-blocking)
        if (leadData.email) {
          const clientMailOptions = {
            from: process.env.SMTP_FROM || `"Quartz International" <no-reply@quartzinternational.ca>`,
            to: leadData.email,
            subject: `Your Personalized Kitchen Estimate - Quartz International`,
            html: `
              <div style="font-family: sans-serif; color: #1A1A1A; max-width: 600px; margin: 0 auto; border: 1px solid #E5E2DC; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                <div style="background-color: #1A1A1A; padding: 30px; text-align: center;">
                  <h1 style="color: #FFFFFF; font-size: 24px; margin: 0; font-weight: 900; letter-spacing: 2px;">QUARTZ INTERNATIONAL</h1>
                  <p style="color: #C6A87D; font-size: 10px; margin: 5px 0 0 0; font-weight: bold; letter-spacing: 3px;">BUDGETARY ESTIMATE</p>
                </div>
                <div style="padding: 30px; background-color: #FFFFFF;">
                  <h2 style="font-size: 20px; font-weight: bold; margin-top: 0; color: #1A1A1A;">Hello ${leadData.name || 'Client'},</h2>
                  <p style="font-size: 14px; color: #555555; line-height: 1.6;">Thank you for requesting an estimate from Quartz International. Here is the custom budgetary range for your kitchen project based on the specifications provided:</p>
                  
                  <div style="background-color: #1A1A1A; color: #FFFFFF; padding: 25px; border-radius: 12px; text-align: center; margin: 25px 0;">
                    <p style="font-size: 10px; color: #C6A87D; font-weight: bold; margin: 0 0 5px 0; letter-spacing: 2px; text-transform: uppercase;">Estimated Project Range</p>
                    <h3 style="font-size: 36px; font-weight: 900; margin: 0; color: #FFFFFF; font-style: italic;">
                      $${leadData.totalCostLow?.toLocaleString()} - $${leadData.totalCostHigh?.toLocaleString()}
                    </h3>
                    <p style="font-size: 10px; color: #888888; margin: 5px 0 0 0;">Includes Materials & Professional Installation</p>
                  </div>

                  <h3 style="font-size: 16px; font-weight: bold; border-bottom: 1px solid #E5E2DC; padding-bottom: 8px; margin-top: 0; color: #1A1A1A; text-transform: uppercase; letter-spacing: 1px;">Project Specifications</h3>
                  <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #555555; margin-bottom: 25px;">
                    ${leadData.includeCountertops ? `
                    <tr style="border-bottom: 1px solid #FAF8F5;">
                      <td style="padding: 10px 0; font-weight: bold;">Countertops Area</td>
                      <td style="padding: 10px 0; text-align: right;">${leadData.countertopLinearFt} ft (${leadData.countertopSqFt} sq ft)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #FAF8F5;">
                      <td style="padding: 10px 0; font-weight: bold;">Quartz Material Tier</td>
                      <td style="padding: 10px 0; text-align: right; text-transform: capitalize;">${leadData.quartzLevel}</td>
                    </tr>
                    ${leadData.selectedSlab ? `
                    <tr style="border-bottom: 1px solid #FAF8F5;">
                      <td style="padding: 10px 0; font-weight: bold;">Selected Slab</td>
                      <td style="padding: 10px 0; text-align: right;">${leadData.selectedSlab}</td>
                    </tr>
                    ` : ''}
                    <tr style="border-bottom: 1px solid #FAF8F5;">
                      <td style="padding: 10px 0; font-weight: bold;">Island / Peninsula</td>
                      <td style="padding: 10px 0; text-align: right; text-transform: capitalize;">${leadData.islandType || 'None'}</td>
                    </tr>
                    ` : ''}
                    ${leadData.includeCabinets ? `
                    <tr style="border-bottom: 1px solid #FAF8F5;">
                      <td style="padding: 10px 0; font-weight: bold;">Cabinets Area</td>
                      <td style="padding: 10px 0; text-align: right;">${leadData.cabinetLinearFt} ft</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #FAF8F5;">
                      <td style="padding: 10px 0; font-weight: bold;">Cabinets Collection</td>
                      <td style="padding: 10px 0; text-align: right; text-transform: capitalize;">${leadData.cabinetStyle}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #FAF8F5;">
                      <td style="padding: 10px 0; font-weight: bold;">Delivery Method</td>
                      <td style="padding: 10px 0; text-align: right; text-transform: uppercase;">${leadData.deliveryMethod || 'Installed'}</td>
                    </tr>
                    ` : ''}
                    ${leadData.extras && leadData.extras.length > 0 ? `
                    <tr style="border-bottom: 1px solid #FAF8F5;">
                      <td style="padding: 10px 0; font-weight: bold;">Selected Details</td>
                      <td style="padding: 10px 0; text-align: right; font-size: 11px;">${leadData.extras.map(e => e.replace(/([A-Z])/g, ' $1').trim()).join(', ')}</td>
                    </tr>
                    ` : ''}
                  </table>

                  <div style="background-color: #FAF8F5; padding: 25px 20px; border-radius: 12px; border: 1px solid #E5E2DC; margin-bottom: 25px; font-family: sans-serif;">
                    <h4 style="margin: 0 0 15px 0; font-size: 15px; color: #1A1A1A; font-weight: bold; text-align: left; font-family: sans-serif;">To receive a more accurate estimate, send us:</h4>
                    
                    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; margin-bottom: 20px; font-family: sans-serif; font-size: 13px; color: #444444;">
                      <tr>
                        <td style="width: 24px; vertical-align: top; color: #C6A87D; font-weight: bold; font-size: 14px; line-height: 1.6;">✓</td>
                        <td style="padding-bottom: 8px; vertical-align: top; line-height: 1.6;">Kitchen measurements</td>
                      </tr>
                      <tr>
                        <td style="width: 24px; vertical-align: top; color: #C6A87D; font-weight: bold; font-size: 14px; line-height: 1.6;">✓</td>
                        <td style="padding-bottom: 8px; vertical-align: top; line-height: 1.6;">Sketches</td>
                      </tr>
                      <tr>
                        <td style="width: 24px; vertical-align: top; color: #C6A87D; font-weight: bold; font-size: 14px; line-height: 1.6;">✓</td>
                        <td style="padding-bottom: 8px; vertical-align: top; line-height: 1.6;">Inspiration photos</td>
                      </tr>
                      <tr>
                        <td style="width: 24px; vertical-align: top; color: #C6A87D; font-weight: bold; font-size: 14px; line-height: 1.6;">✓</td>
                        <td style="padding-bottom: 8px; vertical-align: top; line-height: 1.6;">Existing kitchen photos</td>
                      </tr>
                      <tr>
                        <td style="width: 24px; vertical-align: top; color: #C6A87D; font-weight: bold; font-size: 14px; line-height: 1.6;">✓</td>
                        <td style="padding-bottom: 8px; vertical-align: top; line-height: 1.6;">Architectural drawings <span style="color: #888888; font-size: 11px;">(if available)</span></td>
                      </tr>
                    </table>

                    <div style="margin-bottom: 20px; font-family: sans-serif;">
                      <p style="font-size: 12px; color: #1A1A1A; font-weight: bold; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px; text-align: center;">Upload Documents</p>
                      <a href="https://quartzinternational.ca/contact" style="display: block; text-decoration: none; border: 2px dashed #C6A87D; background-color: #FFFFFF; border-radius: 8px; padding: 20px; text-align: center;">
                        <span style="font-size: 14px; color: #1A1A1A; font-weight: bold; display: block; margin-bottom: 4px;">Drag & Drop</span>
                        <span style="font-size: 11px; color: #888888; display: block; margin-bottom: 6px;">or</span>
                        <span style="display: inline-block; background-color: #C6A87D; color: #FFFFFF; padding: 8px 18px; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Browse Files</span>
                      </a>
                    </div>

                    <div style="border-top: 1px dashed #E5E2DC; padding-top: 20px; margin-bottom: 20px; text-align: center; font-family: sans-serif;">
                      <p style="font-size: 12px; color: #666666; margin: 0 0 10px 0;">Prefer to send photos or files directly?</p>
                      <a href="https://wa.me/16473706684" target="_blank" style="display: inline-block; background-color: #25D366; color: #FFFFFF; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin: 5px;">
                        WhatsApp Us
                      </a>
                      <a href="mailto:info@quartzinternational.ca?subject=Kitchen Estimate Documents" style="display: inline-block; background-color: #1A1A1A; color: #FFFFFF; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin: 5px;">
                        Email Us
                      </a>
                    </div>

                    <p style="font-size: 11px; color: #888888; text-align: center; margin: 0; line-height: 1.4; font-family: sans-serif; font-style: italic;">
                      Need help with measurements? Let us know and we will guide you through it!
                    </p>
                  </div>

                  <p style="font-size: 11px; color: #999999; line-height: 1.5; margin: 0;">
                    * This is a budgetary estimate for planning purposes. Final pricing is subject to physical site measure and exact slab selection.
                  </p>
                </div>
                <div style="background-color: #F8F9FA; border-top: 1px solid #E5E2DC; padding: 20px; text-align: center; font-size: 11px; color: #888888;">
                  <p style="margin: 0 0 5px 0; font-weight: bold;">Quartz International GTA HQ</p>
                  <p style="margin: 0;">(647) 370-6938 • info@quartzinternational.ca • Toronto • Markham • Vaughan</p>
                </div>
              </div>
            `
          };
          try {
            await transporter.sendMail(clientMailOptions);
            console.log("Client estimate email sent successfully.");
          } catch (err) {
            console.error("Failed to send client estimate email:", err);
          }
        }
      }

      res.status(201).json({
        status: "success",
        message: "Lead captured successfully",
        leadId: leadData.id
      });
    } else {
      res.status(500).json({ error: "Failed to save lead" });
    }
  });

  // Rate limiting map
  const ipLimits = new Map<string, { count: number, resetAt: number }>();
  async function checkRateLimit(ip: string): Promise<boolean> {
    const useKV = !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
    if (useKV) {
      try {
        const limitKey = `rate_limit_design:${ip}`;
        const countRaw = await kv.get<number>(limitKey);
        const count = countRaw ? Number(countRaw) : 0;
        if (count >= 3) {
          return false;
        }
        await kv.set(limitKey, count + 1, { ex: 24 * 60 * 60 });
        return true;
      } catch (err) {
        console.error("KV rate limit error:", err);
      }
    }
    
    // In-memory fallback
    const limit = ipLimits.get(ip);
    const now = Date.now();
    if (!limit) {
      ipLimits.set(ip, { count: 1, resetAt: now + 24 * 60 * 60 * 1000 });
      return true;
    }
    if (now > limit.resetAt) {
      ipLimits.set(ip, { count: 1, resetAt: now + 24 * 60 * 60 * 1000 });
      return true;
    }
    if (limit.count >= 3) {
      return false;
    }
    limit.count += 1;
    return true;
  }

  // Helper function to dynamically generate a concept image based on the uploaded kitchen layout
  async function generateConceptImage(aiClient: any, base64Input: string, conceptName: string, cabinetFinish: string, quartzStyle: string, backsplash: string, hasIsland: boolean = true): Promise<string | null> {
    try {
      const base64Data = base64Input.includes(",") ? base64Input.split(",")[1] : base64Input;
      const islandInstruction = hasIsland
        ? "Include a kitchen island in the design."
        : "Do NOT include a kitchen island. The kitchen should have NO island at all — only perimeter cabinetry and countertops.";
      const promptText = `Re-render this kitchen photo. Keep the exact layout, window placement, walls, and structural elements of the kitchen identical (the layout footprint must remain exactly the same).
      Change the cabinetry styling to match: ${cabinetFinish}
      Change the countertops to: ${quartzStyle}
      Change the backsplash to: ${backsplash}
      ${islandInstruction}
      Generate a highly realistic, professional architectural render showing this transformation of the space.`;

      const response = await aiClient.models.generateContent({
        model: "gemini-1.5-flash",
        contents: [
          {
            inlineData: {
              data: base64Data,
              mimeType: "image/jpeg"
            }
          },
          promptText
        ],
        config: {
          responseModalities: ["IMAGE"]
        }
      });

      const part = response.candidates?.[0]?.content?.parts?.find((p: any) => p.inlineData);
      if (part && part.inlineData && part.inlineData.data) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
      return null;
    } catch (err) {
      console.error(`Failed to generate concept image for ${conceptName}:`, err);
      return null;
    }
  }


  // AI design visualizer endpoint
  app.post("/api/design-recommendations", async (req, res) => {
    const { 
      name, 
      email, 
      phone, 
      scope, 
      preferredStyle, 
      cabinetColor, 
      budgetTier, 
      hasIsland, 
      isCondo, 
      postalCode, 
      timeline, 
      images 
    } = req.body;

    const clientIp = req.ip || req.headers['x-forwarded-for'] || "127.0.0.1";
    const allowed = await checkRateLimit(String(clientIp));
    if (!allowed) {
      return res.status(429).json({ error: "Rate limit exceeded. Maximum 3 submissions per day." });
    }

    if (!name || !email || !phone || !images || !Array.isArray(images) || images.length === 0) {
      return res.status(400).json({ error: "Missing required contact details or kitchen photos." });
    }

    let analysis: any;
    const apiKey = process.env.GEMINI_API_KEY;

    const getDynamicFallbackAnalysis = () => {
      let layout = "L-Shaped";
      if (hasIsland) {
        layout = isCondo ? "Galley with Island Peninsula" : "Island with Perimeter L-Shape";
      } else if (isCondo) {
        layout = "Galley";
      } else if (preferredStyle?.toLowerCase().includes("shaker")) {
        layout = "U-Shaped";
      }

      return {
        layout,
        estimated_kitchen_size: isCondo ? "small" : (hasIsland ? "large" : "medium"),
        existing_cabinet_style: preferredStyle || "flat-panel",
        existing_cabinet_tone: cabinetColor || "white",
        countertop_tone: "light neutral",
        backsplash: "tile",
        flooring: "wood",
        natural_light: "moderate"
      };
    };

    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not defined. Using dynamic kitchen analysis.");
      analysis = getDynamicFallbackAnalysis();
    } else {
      try {
        const googleAI = new GoogleGenAI({ apiKey });
        const imageParts = images.map((img: any) => {
          const base64Data = img.base64.split(",")[1];
          return {
            inlineData: {
              data: base64Data,
              mimeType: "image/jpeg"
            }
          };
        });

        const promptText = `
        Analyze the uploaded kitchen photos and provide a structured JSON classification of the existing space.
        Return EXACTLY the following JSON format:
        {
          "layout": "L-shaped" | "U-shaped" | "Galley" | "One-wall" | "Island",
          "estimated_kitchen_size": "small" | "medium" | "large",
          "existing_cabinet_style": "raised-panel" | "shaker" | "flat-panel" | "other",
          "existing_cabinet_tone": "dark brown" | "light wood" | "white" | "grey" | "other",
          "countertop_tone": "dark neutral" | "light neutral" | "white" | "veined" | "other",
          "backsplash": "tile" | "slab" | "paint" | "none",
          "flooring": "wood" | "tile" | "laminate" | "other",
          "natural_light": "low" | "moderate" | "bright"
        }
        Do not return markdown wrappers, backticks, or any other text around the JSON object.
        `;

        const aiResponse = await googleAI.models.generateContent({
          model: "gemini-1.5-flash",
          contents: [...imageParts, promptText],
          config: {
            responseMimeType: "application/json"
          }
        });

        const responseText = aiResponse.text?.trim() || "";
        analysis = JSON.parse(responseText);
      } catch (err) {
        console.error("Gemini Vision API Error:", err);
        analysis = getDynamicFallbackAnalysis();
      }
    }

    // Match real catalog & rules-based pricing
    const rawConcepts = getMatchedConcepts(preferredStyle, cabinetColor);
    // Deep clone to avoid mutating the global template cache
    const matchedConcepts = JSON.parse(JSON.stringify(rawConcepts));

    // If the user selected no island, swap in the non-island image fallback
    if (!hasIsland) {
      matchedConcepts.forEach((concept: any) => {
        if (concept.imageNoIsland) {
          concept.image = concept.imageNoIsland;
        }
      });
    }

    // Generate styled concept images dynamically if API key is present
    if (apiKey) {
      try {
        const googleAI = new GoogleGenAI({ apiKey });
        const primaryImageBase64 = images[0].base64;

        console.log(`Generating dynamic concept images for lead...`);
        const imgA = await generateConceptImage(
          googleAI,
          primaryImageBase64,
          matchedConcepts[0].name,
          matchedConcepts[0].cabinetFinish,
          matchedConcepts[0].quartzStyle,
          matchedConcepts[0].backsplash,
          hasIsland
        );
        if (imgA) {
          matchedConcepts[0].image = imgA;
          console.log(`Concept A image generated successfully`);
        }

        const imgB = await generateConceptImage(
          googleAI,
          primaryImageBase64,
          matchedConcepts[1].name,
          matchedConcepts[1].cabinetFinish,
          matchedConcepts[1].quartzStyle,
          matchedConcepts[1].backsplash,
          hasIsland
        );
        if (imgB) {
          matchedConcepts[1].image = imgB;
          console.log(`Concept B image generated successfully`);
        }
      } catch (genErr) {
        console.error("Failed during AI concept image generation, using static templates:", genErr);
      }
    }

    const priceRange = calculatePackageRange(
      scope,
      analysis.estimated_kitchen_size,
      budgetTier,
      budgetTier === 'elite' ? 'luxury' : budgetTier === 'premium' ? 'premium' : 'standard',
      hasIsland,
      isCondo
    );

    const leadId = Math.random().toString(36).substr(2, 9);
    
    // Save to leads database
    const notesText = `AI Concept Package Lead.
[Spatial Analysis]
- Layout: ${analysis.layout}
- Size: ${analysis.estimated_kitchen_size}
- Current Cabinets: ${analysis.existing_cabinet_style} (${analysis.existing_cabinet_tone})
- Current Countertops: ${analysis.countertop_tone}
- Lighting: ${analysis.natural_light}

[Selected Preferences]
- Scope: ${scope}
- Style: ${preferredStyle}
- Cabinet color: ${cabinetColor}
- Budget: ${budgetTier}
- Timeline: ${timeline}
- Postal Code: ${postalCode}

[Matched Concepts]
- Concept A: ${matchedConcepts[0].name} (${matchedConcepts[0].matchedCabinets})
- Concept B: ${matchedConcepts[1].name} (${matchedConcepts[1].matchedCabinets})
- Cost Range: $${priceRange.low.toLocaleString()} - $${priceRange.high.toLocaleString()}`;

    const leadData: Lead = {
      id: leadId,
      createdAt: new Date().toISOString(),
      leadStatus: 'New Estimate Lead',
      name,
      email,
      phone,
      notes: notesText,
      layout: analysis.layout,
      quartzLevel: budgetTier === 'elite' ? 'Luxury' : budgetTier === 'premium' ? 'Premium' : 'Standard',
      hasIsland,
      includeCabinets: scope !== 'countertops',
      cabinetStyle: preferredStyle,
      timeline,
      totalCostLow: priceRange.low,
      totalCostHigh: priceRange.high
    };

    // Auto link to customer profile & save base64 photo references
    let customerId = "";
    const customers = await getCustomers();
    const existingCust = customers.find(c => c.email.toLowerCase() === email.toLowerCase());

    const customerFiles = images.map((img: any, idx: number) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: img.name || `kitchen_photo_${idx + 1}.jpg`,
      size: "82 KB",
      uploadedAt: new Date().toISOString(),
      url: img.base64
    }));

    if (existingCust) {
      customerId = existingCust.id;
      leadData.customerId = customerId;
      const files = existingCust.files || [];
      customerFiles.forEach((file: any) => {
        files.unshift(file);
      });
      await updateCustomer(existingCust.id, { files });
    } else {
      customerId = Math.random().toString(36).substr(2, 9);
      leadData.customerId = customerId;
      const newCustomer: Customer = {
        id: customerId,
        createdAt: new Date().toISOString(),
        name,
        email,
        phone,
        notes: "Auto-created from AI Concept Package lead.",
        files: customerFiles
      };
      await saveCustomer(newCustomer);
    }

    const saved = await saveLead(leadData);

    if (saved && process.env.SMTP_USER && process.env.SMTP_PASS) {
      // Send alert emails (admin & client)
      // 1. Admin Email
      const adminMailOptions = {
        from: process.env.SMTP_FROM || `"Quartz International AI Visualizer" <no-reply@quartzinternational.ca>`,
        to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
        subject: `New AI Visualizer Lead: ${name}`,
        html: `
          <h2>New AI Visualizer Concept Lead</h2>
          <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: sans-serif; border-color: #E5E2DC;">
            <tr style="background-color: #C6A87D; color: white;">
              <th colspan="2" style="text-align: left; padding: 10px;">Contact Details</th>
            </tr>
            <tr><td><strong>Name</strong></td><td>${name}</td></tr>
            <tr><td><strong>Email</strong></td><td>${email}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
            <tr><td><strong>Postal Code</strong></td><td>${postalCode}</td></tr>
            <tr style="background-color: #FAF8F5;"><td colspan="2"><strong>AI Spatial analysis:</strong></td></tr>
            <tr><td><strong>Layout</strong></td><td>${analysis.layout}</td></tr>
            <tr><td><strong>Estimated Size</strong></td><td>${analysis.estimated_kitchen_size}</td></tr>
            <tr><td><strong>Lighting</strong></td><td>${analysis.natural_light}</td></tr>
            <tr style="background-color: #FAF8F5;"><td colspan="2"><strong>Selected Concepts:</strong></td></tr>
            <tr><td><strong>Concept A</strong></td><td>${matchedConcepts[0].name} (${matchedConcepts[0].matchedCabinets})</td></tr>
            <tr><td><strong>Concept B</strong></td><td>${matchedConcepts[1].name} (${matchedConcepts[1].matchedCabinets})</td></tr>
            <tr style="font-weight: bold; background-color: #f9f9f9;">
              <td><strong>Calculated Pricing</strong></td>
              <td>$${priceRange.low.toLocaleString()} - $${priceRange.high.toLocaleString()}</td>
            </tr>
          </table>
        `
      };

      // 2. Client Email
      const clientMailOptions = {
        from: process.env.SMTP_FROM || `"Quartz International" <no-reply@quartzinternational.ca>`,
        to: email,
        subject: `Your Free Kitchen Concept Package - Quartz International`,
        html: `
          <div style="font-family: sans-serif; color: #1A1A1A; max-width: 600px; margin: 0 auto; border: 1px solid #E5E2DC; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            <div style="background-color: #1A1A1A; padding: 30px; text-align: center;">
              <h1 style="color: #FFFFFF; font-size: 24px; margin: 0; font-weight: 900; letter-spacing: 2px;">QUARTZ INTERNATIONAL</h1>
              <p style="color: #C6A87D; font-size: 10px; margin: 5px 0 0 0; font-weight: bold; letter-spacing: 3px;">KITCHEN CONCEPT PACKAGE</p>
            </div>
            <div style="padding: 30px; background-color: #FFFFFF;">
              <h2>Hello ${name},</h2>
              <p style="font-size: 14px; color: #555555; line-height: 1.6;">Thank you for requesting your kitchen concept package. Based on the photos and layout of your existing kitchen, our design system has generated two styling directions:</p>
              
              <div style="background-color: #FAF8F5; border: 1px solid #E5E2DC; padding: 20px; border-radius: 12px; margin: 20px 0;">
                <h3 style="margin: 0 0 10px 0; color: #C6A87D;">Concept A: ${matchedConcepts[0].name}</h3>
                <p style="font-size: 13px; color: #555555; margin: 0 0 10px 0;">${matchedConcepts[0].explanation}</p>
                <ul style="font-size: 12px; color: #666666; margin: 0; padding-left: 20px;">
                  <li><strong>Cabinets:</strong> ${matchedConcepts[0].cabinetFinish}</li>
                  <li><strong>Quartz:</strong> ${matchedConcepts[0].quartzStyle}</li>
                  <li><strong>Backsplash:</strong> ${matchedConcepts[0].backsplash}</li>
                </ul>
              </div>

              <div style="background-color: #FAF8F5; border: 1px solid #E5E2DC; padding: 20px; border-radius: 12px; margin: 20px 0;">
                <h3 style="margin: 0 0 10px 0; color: #C6A87D;">Concept B: ${matchedConcepts[1].name}</h3>
                <p style="font-size: 13px; color: #555555; margin: 0 0 10px 0;">${matchedConcepts[1].explanation}</p>
                <ul style="font-size: 12px; color: #666666; margin: 0; padding-left: 20px;">
                  <li><strong>Cabinets:</strong> ${matchedConcepts[1].cabinetFinish}</li>
                  <li><strong>Quartz:</strong> ${matchedConcepts[1].quartzStyle}</li>
                  <li><strong>Backsplash:</strong> ${matchedConcepts[1].backsplash}</li>
                </ul>
              </div>

              <div style="background-color: #1A1A1A; color: #FFFFFF; padding: 25px; border-radius: 12px; text-align: center; margin: 25px 0;">
                <p style="font-size: 10px; color: #C6A87D; font-weight: bold; margin: 0 0 5px 0; letter-spacing: 2px;">Preliminary Package Range</p>
                <h3 style="font-size: 32px; font-weight: 900; margin: 0; color: #FFFFFF; font-style: italic;">
                  $${priceRange.low.toLocaleString()} - $${priceRange.high.toLocaleString()}
                </h3>
                <p style="font-size: 10px; color: #888888; margin: 5px 0 0 0;">Includes Materials & Professional Installation</p>
              </div>

              <p style="font-size: 11px; color: #999999; line-height: 1.5; margin-bottom: 25px;">
                * This is a preliminary planning package range. Final styling selections, material matching, and pricing will be locked in after our professional on-site laser measure and layout verification.
              </p>

              <div style="text-align: center;">
                <a href="https://quartzinternational.ca/contact" style="display: inline-block; background-color: #C6A87D; color: #FFFFFF; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Book Free Precision Measure</a>
              </div>
            </div>
            <div style="background-color: #F8F9FA; border-top: 1px solid #E5E2DC; padding: 20px; text-align: center; font-size: 11px; color: #888888;">
              <p style="margin: 0 0 5px 0; font-weight: bold;">Quartz International</p>
              <p style="margin: 0;">(647) 370-6938 • info@quartzinternational.ca • Vaughan showroom</p>
            </div>
          </div>
        `
      };

      transporter.sendMail(adminMailOptions).catch((err: any) => console.error("Admin visualizer mail err:", err));
      transporter.sendMail(clientMailOptions).catch((err: any) => console.error("Client visualizer mail err:", err));
    }



    res.status(201).json({
      status: "success",
      analysis,
      matchedConcepts,
      priceRange
    });
  });

  // Get all leads (Admin Protected)
  app.get("/api/leads", async (req, res) => {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'aura-admin-2026' && adminSecret !== 'qi-admin-2026') {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const currentLeads = await getLeads();
    res.json(currentLeads);
  });

  // Save or update quote details for a specific lead (Admin Protected)
  app.post("/api/leads/:id/quote", async (req, res) => {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'aura-admin-2026' && adminSecret !== 'qi-admin-2026') {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { id } = req.params;
    const updates = { ...req.body };
    if (updates.quoteStatus === 'sent') {
      updates.quoteSentAt = new Date().toISOString();
    }
    const updated = await updateLead(id, updates);
    if (updated) {
      if (updates.quoteStatus === 'sent' && process.env.SMTP_USER && process.env.SMTP_PASS) {
        try {
          const leads = await getLeads();
          const lead = leads.find(l => l.id === id);
          if (lead && lead.email) {
            const signUrl = `${process.env.APP_URL || 'http://localhost:3000'}/quote/${id}`;
            const mailOptions = {
              from: getFromEmail(adminSecret, "Quartz International Quotes"),
              to: lead.email,
              subject: `Your Project Proposal & Quote: ${updates.quoteNumber || lead.quoteNumber || 'Quote'} - Quartz International`,
              html: `
                <div style="font-family: sans-serif; color: #1A1A1A; max-width: 600px; margin: 0 auto; border: 1px solid #E5E2DC; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                  <div style="background-color: #1A1A1A; padding: 30px; text-align: center;">
                    <h1 style="color: #FFFFFF; font-size: 24px; margin: 0; font-weight: 900; letter-spacing: 2px;">QUARTZ INTERNATIONAL</h1>
                    <p style="color: #C6A87D; font-size: 10px; margin: 5px 0 0 0; font-weight: bold; letter-spacing: 3px;">OFFICIAL PROJECT PROPOSAL</p>
                  </div>
                  <div style="padding: 30px; background-color: #FFFFFF;">
                    <h2 style="font-size: 20px; font-weight: bold; margin-top: 0; color: #1A1A1A;">Hello ${lead.name || 'Client'},</h2>
                    <p style="font-size: 14px; color: #555555; line-height: 1.6;">Our team has compiled your official project proposal and pricing quote. Please find the details below:</p>
                    
                    <div style="background-color: #FAF8F5; border: 1px solid #E5E2DC; border-radius: 12px; padding: 20px; margin: 20px 0;">
                      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                        <tr>
                          <td style="padding: 5px 0; color: #888888;">Quote Reference:</td>
                          <td style="padding: 5px 0; text-align: right; font-weight: bold; font-family: monospace;">${updates.quoteNumber || lead.quoteNumber || 'N/A'}</td>
                        </tr>
                        <tr>
                          <td style="padding: 5px 0; color: #888888;">Date Generated:</td>
                          <td style="padding: 5px 0; text-align: right; font-weight: bold;">${new Date().toLocaleDateString()}</td>
                        </tr>
                      </table>
                    </div>

                    <h3 style="font-size: 15px; font-weight: bold; border-bottom: 1px solid #E5E2DC; padding-bottom: 8px; margin-top: 0; color: #1A1A1A;">PROPOSED LINE ITEMS</h3>
                    <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #555555; margin-bottom: 25px;">
                      <thead>
                        <tr style="border-bottom: 1px solid #E5E2DC; font-weight: bold; color: #1A1A1A;">
                          <th style="padding: 10px 0; text-align: left;">Description</th>
                          <th style="padding: 10px 0; text-align: center; width: 60px;">Qty</th>
                          <th style="padding: 10px 0; text-align: right; width: 100px;">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${(updates.quoteItems || lead.quoteItems || []).map((item: any) => `
                          <tr style="border-bottom: 1px solid #FAF8F5;">
                            <td style="padding: 10px 0; line-height: 1.4;">${item.description}</td>
                            <td style="padding: 10px 0; text-align: center;">${item.quantity}</td>
                            <td style="padding: 10px 0; text-align: right;">$${item.total?.toLocaleString()}</td>
                          </tr>
                        `).join('')}
                      </tbody>
                    </table>

                    <div style="background-color: #FAF8F5; border-radius: 12px; padding: 20px; margin-bottom: 25px; border: 1px solid #E5E2DC;">
                      <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #555555;">
                        <tr>
                          <td style="padding: 6px 0;">Subtotal</td>
                          <td style="padding: 6px 0; text-align: right; font-weight: bold; color: #1A1A1A;">$${(updates.quoteSubtotal || lead.quoteSubtotal || 0).toLocaleString()}</td>
                        </tr>
                        ${(updates.quoteDiscount || lead.quoteDiscount || 0) > 0 ? `
                        <tr>
                          <td style="padding: 6px 0; color: #27AE60;">Discount Applied</td>
                          <td style="padding: 6px 0; text-align: right; font-weight: bold; color: #27AE60;">-$${(updates.quoteDiscount || lead.quoteDiscount || 0).toLocaleString()}</td>
                        </tr>
                        ` : ''}
                        <tr>
                          <td style="padding: 6px 0;">Tax (HST 13%)</td>
                          <td style="padding: 6px 0; text-align: right; font-weight: bold; color: #1A1A1A;">$${(updates.quoteTax || lead.quoteTax || 0).toLocaleString()}</td>
                        </tr>
                        <tr style="border-top: 1px solid #E5E2DC; font-size: 16px; font-weight: bold; color: #1A1A1A;">
                          <td style="padding: 15px 0 0 0; color: #C6A87D;">Proposal Total</td>
                          <td style="padding: 15px 0 0 0; text-align: right; color: #C6A87D;">$${(updates.quoteTotal || lead.quoteTotal || 0).toLocaleString()}</td>
                        </tr>
                      </table>
                    </div>

                    ${(updates.quoteNotes || lead.quoteNotes) ? `
                    <div style="background-color: #FFFFFF; border-radius: 12px; padding: 20px; margin-bottom: 25px; border: 1px solid #E5E2DC;">
                      <h4 style="margin: 0 0 10px 0; font-size: 13px; color: #888888; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Additional Information / Notes</h4>
                      <p style="font-size: 14px; color: #555555; line-height: 1.6; margin: 0; white-space: pre-wrap;">${(updates.quoteNotes || lead.quoteNotes)}</p>
                    </div>
                    ` : ''}

                    <div style="text-align: center; margin: 30px 0;">
                      <p style="font-size: 13px; color: #666666; margin-bottom: 15px; line-height: 1.5;">To lock in this proposal, schedule your project, and initiate production, please review and electronically sign the quote here:</p>
                      <a href="${signUrl}" style="display: inline-block; background-color: #C6A87D; color: #FFFFFF; padding: 15px 35px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 4px 10px rgba(198, 168, 125, 0.3);">Review & Sign Proposal</a>
                    </div>

                    <p style="font-size: 11px; color: #999999; line-height: 1.5; margin: 0; text-align: center;">
                      This proposal is valid for 30 days from the date of generation.
                    </p>
                  </div>
                  <div style="background-color: #F8F9FA; border-top: 1px solid #E5E2DC; padding: 20px; text-align: center; font-size: 11px; color: #888888;">
                    <p style="margin: 0 0 5px 0; font-weight: bold;">Quartz International GTA HQ</p>
                    <p style="margin: 0;">(647) 370-6938 • info@quartzinternational.ca • Toronto • Markham • Vaughan</p>
                  </div>
                </div>
              `
            };
            try {
              await transporter.sendMail(mailOptions);
              console.log(`Quote proposal email sent to customer successfully (Lead: ${id}).`);
            } catch (err) {
              console.error("Error sending quote email to customer:", err);
            }
          }
        } catch (err) {
          console.error("Error fetching leads for quote email:", err);
        }
      }
      res.json({ status: "success", message: "Quote saved successfully" });
    } else {
      res.status(500).json({ error: "Failed to save quote" });
    }
  });

  // Get single quote by ID (Public Access for client signature page)
  app.get("/api/quotes/:id", async (req, res) => {
    const { id } = req.params;
    const leads = await getLeads();
    const lead = leads.find(l => l.id === id);
    if (!lead) {
      return res.status(404).json({ error: "Quote not found" });
    }
    res.json({
      id: lead.id,
      createdAt: lead.createdAt,
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      layout: lead.layout,
      quartzLevel: lead.quartzLevel,
      selectedSlab: lead.selectedSlab,
      countertopSqFt: lead.countertopSqFt,
      hasIsland: lead.hasIsland,
      includeCabinets: lead.includeCabinets,
      cabinetLinearFt: lead.cabinetLinearFt,
      cabinetStyle: lead.cabinetStyle,
      timeline: lead.timeline,
      quoteStatus: lead.quoteStatus,
      quoteNumber: lead.quoteNumber,
      quoteItems: lead.quoteItems,
      quoteTaxRate: lead.quoteTaxRate,
      quoteDiscount: lead.quoteDiscount,
      quoteNotes: lead.quoteNotes,
      quoteSubtotal: lead.quoteSubtotal,
      quoteTax: lead.quoteTax,
      quoteTotal: lead.quoteTotal,
      clientSignedAt: lead.clientSignedAt,
      clientSignatureName: lead.clientSignatureName,
      quoteDepositPercent: lead.quoteDepositPercent
    });
  });

  // Client signature and quote approval submission (Public Access)
  app.post("/api/quotes/:id/approve", async (req, res) => {
    const { id } = req.params;
    const { signatureName } = req.body;

    if (!signatureName) {
      return res.status(400).json({ error: "Signature name is required" });
    }

    const leads = await getLeads();
    const lead = leads.find(l => l.id === id);
    if (!lead) {
      return res.status(404).json({ error: "Quote not found" });
    }

    const depositPercent = lead.quoteDepositPercent !== undefined ? lead.quoteDepositPercent : 50;
    const isNoDeposit = depositPercent === 0;
    const nextQuoteStatus = isNoDeposit ? 'invoiced' : 'approved';

    const clientSignedAt = new Date().toISOString();
    const updates: Partial<Lead> = {
      quoteStatus: nextQuoteStatus,
      clientSignedAt,
      clientSignatureName: signatureName
    };

    if (isNoDeposit) {
      updates.leadStatus = 'Invoice Sent';
    }

    const updated = await updateLead(id, updates);

    if (updated) {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        // Send email to admin (non-blocking)
        const adminMailOptions = {
          from: process.env.SMTP_FROM || `"Quartz International Quotes" <no-reply@quartzinternational.ca>`,
          to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER || "info@quartzinternational.ca",
          subject: `Quote Approved & Signed: ${lead.quoteNumber || "Quote"} - ${lead.name}`,
          html: `
            <h2>Quote Signed & Approved</h2>
            <p>The client has reviewed and electronically signed their proposal.</p>
            <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: sans-serif; border-color: #E5E2DC;">
              <tr style="background-color: #C6A87D; color: white;">
                <th colspan="2" style="text-align: left; padding: 10px;">Approval Details</th>
              </tr>
              <tr><td><strong>Quote Number</strong></td><td>${lead.quoteNumber || "N/A"}</td></tr>
              <tr><td><strong>Customer Name</strong></td><td>${lead.name}</td></tr>
              <tr><td><strong>E-Signature</strong></td><td><em>${signatureName}</em></td></tr>
              <tr><td><strong>Signed At</strong></td><td>${new Date(clientSignedAt).toLocaleString()}</td></tr>
            </table>
          `
        };
        
        // Asynchronous, non-blocking send
        transporter.sendMail(adminMailOptions)
          .then(() => console.log("Approval notification email sent successfully to admin."))
          .catch((err: any) => console.error("Error sending approval email to admin:", err));

        // Send confirmation email to customer (non-blocking)
        if (lead.email) {
          const clientMailOptions = {
            from: process.env.SMTP_FROM || `"Quartz International Quotes" <no-reply@quartzinternational.ca>`,
            to: lead.email,
            subject: `Proposal Approved & Signed: ${lead.quoteNumber || 'Quote'} - Quartz International`,
            html: `
              <div style="font-family: sans-serif; color: #1A1A1A; max-width: 600px; margin: 0 auto; border: 1px solid #E5E2DC; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                <div style="background-color: #1A1A1A; padding: 30px; text-align: center;">
                  <h1 style="color: #FFFFFF; font-size: 24px; margin: 0; font-weight: 900; letter-spacing: 2px;">QUARTZ INTERNATIONAL</h1>
                  <p style="color: #C6A87D; font-size: 10px; margin: 5px 0 0 0; font-weight: bold; letter-spacing: 3px;">PROPOSAL APPROVED & SIGNED</p>
                </div>
                <div style="padding: 30px; background-color: #FFFFFF; text-align: center;">
                  <div style="background-color: #2ECC71; color: #FFFFFF; border-radius: 50%; width: 60px; height: 60px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px; font-size: 30px; font-weight: bold;">✓</div>
                  <h2 style="font-size: 20px; font-weight: bold; margin-top: 0; color: #1A1A1A;">Thank you, ${lead.name || 'Client'}!</h2>
                  <p style="font-size: 14px; color: #555555; line-height: 1.6;">We have received your electronically signed proposal. Your project details are now locked in, and we are preparing for the next phases.</p>
                  
                  <div style="background-color: #FAF8F5; border: 1px solid #E5E2DC; border-radius: 12px; padding: 20px; margin: 25px 0; text-align: left;">
                    <h4 style="margin: 0 0 10px 0; font-size: 14px; color: #1A1A1A; font-weight: bold; border-bottom: 1px solid #E5E2DC; padding-bottom: 5px;">Approval Details</h4>
                    <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #555555;">
                      <tr>
                        <td style="padding: 5px 0;">Quote Number:</td>
                        <td style="padding: 5px 0; text-align: right; font-weight: bold; color: #1A1A1A;">${lead.quoteNumber || "N/A"}</td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0;">E-Signature:</td>
                        <td style="padding: 5px 0; text-align: right; font-weight: bold; font-style: italic; color: #1A1A1A;">${signatureName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0;">Signed At:</td>
                        <td style="padding: 5px 0; text-align: right; font-weight: bold; color: #1A1A1A;">${new Date(clientSignedAt).toLocaleString()}</td>
                      </tr>
                      <tr style="border-top: 1px solid #E5E2DC; font-weight: bold;">
                        <td style="padding: 10px 0 0 0; color: #C6A87D;">Total Amount:</td>
                        <td style="padding: 10px 0 0 0; text-align: right; color: #C6A87D;">$${(lead.quoteTotal || 0).toLocaleString()}</td>
                      </tr>
                    </table>
                  </div>

                  <div style="background-color: #F8FDF9; border: 1px solid #D1EAD8; padding: 20px; border-radius: 12px; text-align: left; margin-bottom: 25px;">
                    <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #27AE60; font-weight: bold;">What Happens Next?</h4>
                    <ol style="font-size: 13px; color: #555555; margin: 0; padding-left: 20px; line-height: 1.6;">
                      <li><strong>Project Coordinator Contact</strong>: A project manager will call you within 24 business hours to confirm details.</li>
                      <li><strong>Precision Site Scan</strong>: We will schedule our technicians to visit your home and complete a sub-millimeter laser scan.</li>
                      <li><strong>Material Procurement & Fabrication</strong>: Once dimensions are scanned, your selected slabs will be cut and polished.</li>
                      <li><strong>Turnkey Installation</strong>: Our white-glove installation team will deliver and install your countertops and cabinetry.</li>
                    </ol>
                  </div>

                  <p style="font-size: 12px; color: #888888; line-height: 1.5; margin: 0;">
                    If you have any immediate questions, please call us directly at (647) 370-6938.
                  </p>
                </div>
                <div style="background-color: #F8F9FA; border-top: 1px solid #E5E2DC; padding: 20px; text-align: center; font-size: 11px; color: #888888;">
                  <p style="margin: 0 0 5px 0; font-weight: bold;">Quartz International GTA HQ</p>
                  <p style="margin: 0;">(647) 370-6938 • info@quartzinternational.ca • Toronto • Markham • Vaughan</p>
                </div>
              </div>
            `
          };
          
          // Asynchronous, non-blocking send
          transporter.sendMail(clientMailOptions)
            .then(() => console.log(`Quote approval confirmation email sent to customer (Lead: ${id})`))
            .catch((err: any) => console.error("Error sending quote approval confirmation email to customer:", err));
        }
      }
      res.json({ status: "success", message: "Quote approved and signed successfully" });
    } else {
      res.status(500).json({ error: "Failed to sign quote" });
    }
  });

  // Get all customers (Admin Protected)
  app.get("/api/customers", async (req, res) => {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'aura-admin-2026' && adminSecret !== 'qi-admin-2026') {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const customers = await getCustomers();
    res.json(customers);
  });

  // Create customer manually (Admin Protected)
  app.post("/api/customers", async (req, res) => {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'aura-admin-2026' && adminSecret !== 'qi-admin-2026') {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { name, email, phone, notes } = req.body;
    const newCustomer: Customer = {
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      name,
      email,
      phone,
      notes: notes || "",
      files: []
    };
    const saved = await saveCustomer(newCustomer);
    if (saved) {
      res.status(201).json(newCustomer);
    } else {
      res.status(500).json({ error: "Failed to save customer" });
    }
  });

  // Update customer (Admin Protected)
  app.put("/api/customers/:id", async (req, res) => {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'aura-admin-2026' && adminSecret !== 'qi-admin-2026') {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { id } = req.params;
    const { name, email, phone, notes } = req.body;
    const updated = await updateCustomer(id, { name, email, phone, notes });
    if (updated) {
      // Propagate changes to all associated leads/quotes
      const leads = await getLeads();
      const associatedLeads = leads.filter(l => l.customerId === id);
      for (const lead of associatedLeads) {
        await updateLead(lead.id, {
          name: name ?? lead.name,
          email: email ?? lead.email,
          phone: phone ?? lead.phone
        });
      }
      res.json({ status: "success", message: "Customer updated successfully" });
    } else {
      res.status(404).json({ error: "Customer not found" });
    }
  });

  // Add mock file upload details to a customer (Admin Protected)
  app.post("/api/customers/:id/files", async (req, res) => {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'aura-admin-2026' && adminSecret !== 'qi-admin-2026') {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { id } = req.params;
    const { fileName, fileSize } = req.body;
    
    const customers = await getCustomers();
    const customer = customers.find(c => c.id === id);
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }

    const newFile = {
      id: Math.random().toString(36).substr(2, 9),
      name: fileName,
      size: fileSize || "1.2 MB",
      uploadedAt: new Date().toISOString(),
      url: "#"
    };

    const files = customer.files || [];
    files.unshift(newFile);

    const updated = await updateCustomer(id, { files });
    if (updated) {
      res.json(newFile);
    } else {
      res.status(500).json({ error: "Failed to upload file details" });
    }
  });

  // Get unified messages history (Admin Protected)
  app.get("/api/messages", async (req, res) => {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'aura-admin-2026' && adminSecret !== 'qi-admin-2026') {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const messages = await getMessages();
    res.json(messages);
  });

  // Save outbound message and simulate delayed mock customer reply (Admin Protected)
  app.post("/api/messages", async (req, res) => {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'aura-admin-2026' && adminSecret !== 'qi-admin-2026') {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { customerId, channel, text, sender } = req.body;
    if (!customerId || !channel || !text) {
      return res.status(400).json({ error: "Missing fields" });
    }
    const message: Message = {
      id: Math.random().toString(36).substr(2, 9),
      customerId,
      channel,
      direction: 'outbound',
      sender: sender || 'info@quartzinternational.ca',
      text,
      timestamp: new Date().toISOString()
    };
    
    const saved = await saveMessage(message);
    if (saved) {
      if (channel === 'email' && process.env.SMTP_USER && process.env.SMTP_PASS) {
        try {
          const customers = await getCustomers();
          const cust = customers.find(c => c.id === customerId);
          if (cust && cust.email) {
            const mailOptions = {
              from: getFromEmail(adminSecret, "Quartz International Support"),
              to: cust.email,
              subject: `Message from Quartz International`,
              html: `
                <div style="font-family: sans-serif; color: #1A1A1A; max-width: 600px; margin: 0 auto; border: 1px solid #E5E2DC; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                  <div style="background-color: #1A1A1A; padding: 25px; text-align: center;">
                    <h1 style="color: #FFFFFF; font-size: 20px; margin: 0; font-weight: 900; letter-spacing: 2px;">QUARTZ INTERNATIONAL</h1>
                  </div>
                  <div style="padding: 30px; background-color: #FFFFFF;">
                    <h2 style="font-size: 18px; font-weight: bold; margin-top: 0; color: #1A1A1A;">Hello ${cust.name || 'Client'},</h2>
                    <p style="font-size: 14px; color: #333333; line-height: 1.6; white-space: pre-line;">${text}</p>
                    
                    <hr style="border: 0; border-top: 1px solid #E5E2DC; margin: 25px 0;">
                    <p style="font-size: 12px; color: #888888; line-height: 1.5; margin: 0;">
                      You have received this email from your Quartz International project coordinator. To reply, simply email us at info@quartzinternational.ca or call (647) 370-6938.
                    </p>
                  </div>
                  <div style="background-color: #F8F9FA; border-top: 1px solid #E5E2DC; padding: 20px; text-align: center; font-size: 11px; color: #888888;">
                    <p style="margin: 0 0 5px 0; font-weight: bold;">Quartz International GTA HQ</p>
                    <p style="margin: 0;">(647) 370-6938 • info@quartzinternational.ca • Toronto • Markham • Vaughan</p>
                  </div>
                </div>
              `
            };
            try {
              await transporter.sendMail(mailOptions);
              console.log(`Outbound message email successfully sent to customer ${customerId}`);
            } catch (err) {
              console.error("Error sending outbound message email to customer:", err);
            }
          }
        } catch (err) {
          console.error("Error fetching customers for outbound message email:", err);
        }
      }

      // Simulate client inbound response after 5 seconds
      setTimeout(async () => {
        try {
          const customers = await getCustomers();
          const cust = customers.find(c => c.id === customerId);
          const replyMessage: Message = {
            id: Math.random().toString(36).substr(2, 9),
            customerId,
            channel,
            direction: 'inbound',
            sender: cust?.email || cust?.phone || 'client',
            text: `Thanks for the updates! We will review the proposal details.`,
            timestamp: new Date().toISOString(),
            isRead: false
          };
          await saveMessage(replyMessage);
          console.log("Mock inbound reply simulated.");
        } catch (err) {
          console.error("Failed mock response simulation:", err);
        }
      }, 5000);

      res.status(201).json(message);
    } else {
      res.status(500).json({ error: "Failed to save message" });
    }
  });

  // Mark messages as read for a customer (Admin Protected)
  app.post("/api/messages/read", async (req, res) => {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'aura-admin-2026' && adminSecret !== 'qi-admin-2026') {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { customerId } = req.body;
    const marked = await markMessagesAsRead(customerId);
    if (marked) {
      res.json({ status: "success" });
    } else {
      res.status(500).json({ error: "Failed to mark messages as read" });
    }
  });

  // Save an analytics event (public)
  app.post("/api/analytics/track", async (req, res) => {
    const { sessionId, type, path, utmSource, utmMedium, utmCampaign, referrer } = req.body;
    if (!sessionId || !type) {
      return res.status(400).json({ error: "Missing sessionId or type" });
    }
    const event: AnalyticEvent = {
      id: Math.random().toString(36).substr(2, 9),
      sessionId,
      type,
      path,
      utmSource,
      utmMedium,
      utmCampaign,
      referrer,
      timestamp: new Date().toISOString()
    };
    const saved = await saveAnalyticsEvent(event);
    if (saved) {
      res.status(201).json({ status: "success" });
    } else {
      res.status(500).json({ error: "Failed to save analytics event" });
    }
  });

  // Get all analytics events (Admin Protected)
  app.get("/api/analytics", async (req, res) => {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'aura-admin-2026' && adminSecret !== 'qi-admin-2026') {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const events = await getAnalyticsEvents();
    res.json(events);
  });

  // Create Stripe Checkout Session for Quote Deposit / Invoice Payment
  app.post("/api/quotes/:id/create-checkout-session", async (req, res) => {
    const { id } = req.params;
    const leads = await getLeads();
    const lead = leads.find(l => l.id === id);
    if (!lead) {
      return res.status(404).json({ error: "Quote not found" });
    }

    // Determine amount to charge
    let amount = lead.quoteTotal;
    let description = `Full invoice payment for proposal ${lead.quoteNumber}`;

    if (lead.quoteStatus === 'approved') {
      const depositPercent = lead.quoteDepositPercent !== undefined ? lead.quoteDepositPercent : 50;
      amount = Math.round(lead.quoteTotal * (depositPercent / 100));
      description = `${depositPercent}% Project Deposit for proposal ${lead.quoteNumber}`;
    }

    if (amount <= 0) {
      return res.status(400).json({ error: "Invoice total must be greater than zero." });
    }

    try {
      const origin = process.env.NODE_ENV === "production" 
        ? (process.env.APP_URL || "https://www.quartzinternational.ca") 
        : `http://localhost:${process.env.PORT || 3000}`;

      // In mock mode (if secret key is default mock), simulate a Stripe redirect link
      if (stripeSecretKey.startsWith('sk_test_mock_secret_key')) {
        const mockSessionId = 'mock_session_' + Math.random().toString(36).substr(2, 9);
        const mockUrl = `${origin}/quote/${id}?success=true&session_id=${mockSessionId}`;
        console.log("Mock Stripe mode enabled, redirecting to:", mockUrl);
        return res.json({ url: mockUrl });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        invoice_creation: { enabled: true },
        line_items: [
          {
            price_data: {
              currency: 'cad',
              product_data: {
                name: `Quartz International ${lead.quoteStatus === 'approved' ? 'Deposit' : 'Invoice'}`,
                description: description,
              },
              unit_amount: Math.round(amount * 100), // in cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${origin}/quote/${id}?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/quote/${id}?canceled=true`,
        metadata: {
          leadId: id,
          quoteNumber: lead.quoteNumber,
          paymentType: lead.quoteStatus === 'approved' ? 'deposit' : 'full'
        }
      });

      res.json({ url: session.url });
    } catch (err: any) {
      console.error("Stripe session creation failed:", err);
      res.status(500).json({ error: err.message || "Failed to initiate payment processor." });
    }
  });

  // Verify Stripe Payment
  app.post("/api/quotes/:id/verify-payment", async (req, res) => {
    const { id } = req.params;
    const { sessionId } = req.body;

    if (!sessionId) {
      return res.status(400).json({ error: "Missing session ID" });
    }

    try {
      const leads = await getLeads();
      const lead = leads.find(l => l.id === id);
      if (!lead) {
        return res.status(404).json({ error: "Quote not found" });
      }

      // If it's a mock session, bypass Stripe validation
      let isVerified = false;
      let paymentType = 'deposit';

      if (sessionId.startsWith('mock_session_')) {
        isVerified = true;
        paymentType = lead.quoteStatus === 'approved' ? 'deposit' : 'full';
      } else {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        if (session.payment_status === 'paid') {
          isVerified = true;
          paymentType = session.metadata?.paymentType || 'deposit';
        }
      }

      if (isVerified) {
        // Advance lead to 'paid' status and CRM stage to 'Deposit Received' if not already done
        const updates: any = {
          quoteStatus: 'paid'
        };
        
        if (lead.leadStatus === 'New Estimate Lead' || lead.leadStatus === 'Quote Sent' || lead.leadStatus === 'Site Measure') {
          updates.leadStatus = 'Deposit Received';
        }

        await updateLead(id, updates);
        console.log(`Payment verified for lead ${id}. quoteStatus updated to paid. leadStatus updated to Deposit Received.`);
        return res.json({ status: "success" });
      } else {
        return res.status(400).json({ error: "Payment verification failed" });
      }
    } catch (err: any) {
      console.error("Payment verification failed:", err);
      res.status(500).json({ error: err.message || "Failed to verify payment." });
    }
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

export default app;

if (!process.env.VERCEL) {
  const startLocalServer = async () => {
    const PORT = process.env.PORT || 3000;
    // Vite middleware for development
    if (process.env.NODE_ENV !== "production") {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } else {
      const distPath = path.join(process.cwd(), 'dist');
      app.use(express.static(distPath));
      app.get('*', (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    }

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  };

  startLocalServer().catch(err => {
    console.error("Failed to start local dev server:", err);
  });
}
