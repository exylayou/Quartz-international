import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
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
  Message
} from "./src/services/dbService";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
dotenv.config();

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
  console.warn("SMTP credentials (SMTP_USER/SMTP_PASS) are not defined. Lead notification emails will be skipped.");
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes

  // Submit new lead from Estimator or manual creation
  app.post("/api/leads", async (req, res) => {
    const raw = req.body;
    
    const leadData: Lead = {
      id: raw.id || Math.random().toString(36).substr(2, 9),
      createdAt: raw.createdAt || new Date().toISOString(),
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
    };

    // Auto link to customer profile
    if (!leadData.customerId && leadData.email) {
      const customers = await getCustomers();
      const existingCust = customers.find(c => c.email.toLowerCase() === leadData.email.toLowerCase());
      if (existingCust) {
        leadData.customerId = existingCust.id;
      } else {
        const customerId = Math.random().toString(36).substr(2, 9);
        const newCustomer: Customer = {
          id: customerId,
          createdAt: new Date().toISOString(),
          name: leadData.name,
          email: leadData.email,
          phone: leadData.phone,
          notes: "Auto-created from estimator lead inquiry.",
          files: []
        };
        await saveCustomer(newCustomer);
        leadData.customerId = customerId;
      }
    }

    const saved = await saveLead(leadData);
    if (saved) {
      console.log("Lead saved successfully:", leadData.id);
      
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        try {
          const mailOptions = {
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
                <tr style="font-weight: bold; background-color: #f9f9f9;">
                  <td><strong>Total Estimated Range</strong></td>
                  <td>$${leadData.totalCostLow?.toLocaleString()} - $${leadData.totalCostHigh?.toLocaleString()}</td>
                </tr>
              </table>
            `
          };
          await transporter.sendMail(mailOptions);
          console.log("Email notification sent successfully.");
        } catch (mailErr) {
          console.error("Failed to send email notification:", mailErr);
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
    const updates = req.body;
    const updated = await updateLead(id, updates);
    if (updated) {
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
      quoteSubtotal: lead.quoteSubtotal,
      quoteTax: lead.quoteTax,
      quoteTotal: lead.quoteTotal,
      clientSignedAt: lead.clientSignedAt,
      clientSignatureName: lead.clientSignatureName
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

    const clientSignedAt = new Date().toISOString();
    const updated = await updateLead(id, {
      quoteStatus: 'approved',
      clientSignedAt,
      clientSignatureName: signatureName
    });

    if (updated) {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        try {
          const mailOptions = {
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
          await transporter.sendMail(mailOptions);
          console.log("Approval notification email sent successfully.");
        } catch (mailErr) {
          console.error("Error sending approval email:", mailErr);
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

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
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
}

startServer();
