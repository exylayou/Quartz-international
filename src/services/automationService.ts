import { getLeads, updateLead, getMessages, getCustomers, saveMessage, claimFollowUp, Message, Lead } from "./dbService.js";
import nodemailer from "nodemailer";

// Simple Nodemailer Setup
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
  console.error("Automations: Failed to initialize SMTP transporter:", transporterErr);
}

function getFromEmail() {
  let fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER || "info@quartzinternational.ca";
  return `"Quartz International" <${fromEmail}>`;
}

async function sendFollowUp(lead: Lead, stepId: string, text: string, subject?: string) {
  const customerId = lead.customerId;
  if (!customerId || !transporter || !process.env.SMTP_USER || !process.env.SMTP_PASS) return false;
  const customers = await getCustomers();
  const customer = customers.find(c => c.id === customerId);
  if (!customer?.email) return false;

  // Previously sent messages are authoritative for the legacy campaign.
  const messages = await getMessages();
  if (messages.some(m => m.customerId === customerId && m.direction === 'outbound' && m.text === text)) return false;
  if (!(await claimFollowUp(lead.id, stepId))) return false;

  // Claiming before SMTP favours at-most-once delivery: an uncertain SMTP result
  // requires manual review, not an automatic retry that could email a client twice.
  try {
      const mailOptions = {
        from: getFromEmail(),
        to: customer.email,
        subject: subject || "Checking in from Quartz International",
        text: text, // Fallback plain text
        html: `
          <div style="font-family: sans-serif; color: #1A1A1A; max-width: 600px; margin: 0 auto; border: 1px solid #E5E2DC; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            <div style="background-color: #1A1A1A; padding: 25px; text-align: center;">
              <h1 style="color: #FFFFFF; font-size: 20px; margin: 0; font-weight: 900; letter-spacing: 2px;">QUARTZ INTERNATIONAL</h1>
            </div>
            <div style="padding: 30px; background-color: #FFFFFF;">
              <h2 style="font-size: 18px; font-weight: bold; margin-top: 0; color: #1A1A1A;">Hello ${customer.name || 'Client'},</h2>
              <p style="font-size: 14px; color: #333333; line-height: 1.6; white-space: pre-line;">${text}</p>
              
              <hr style="border: 0; border-top: 1px solid #E5E2DC; margin: 25px 0;">
              <p style="font-size: 12px; color: #888888; line-height: 1.5; margin: 0;">
                To reply, simply respond to this email or reach us on WhatsApp at (647) 370-6938.
              </p>
            </div>
          </div>
        `
      };
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error(`Failed to send follow-up email for lead ${lead.id}:`, err);
    return false;
  }

  const message: Message = {
    id: Math.random().toString(36).substr(2, 9),
    customerId, channel: 'email', direction: 'outbound',
    sender: 'info@quartzinternational.ca', text,
    timestamp: new Date().toISOString()
  };
  if (!(await saveMessage(message))) console.error(`Follow-up sent but inbox save failed for lead ${lead.id}`);
  const followupsLog = [...(lead.followupsLog || []), stepId];
  if (!(await updateLead(lead.id, { followupsLog }))) console.error(`Follow-up sent but lead log failed for lead ${lead.id}`);
  console.log(`Sent ${stepId} via email to lead ${lead.id}`);
  return true;
}

export async function runAutomations() {
  console.log("Running Drip Campaign Automations...");
  try {
    const leads = await getLeads();
    const now = Date.now();
    const msInDay = 24 * 60 * 60 * 1000;
    // Do not restart the paused campaign for leads/quotes created before the fix.
    const campaignStart = Date.parse('2026-11-02T14:45:00Z');

    for (const lead of leads) {
      const followupsLog = lead.followupsLog || [];
      // Email is the only implemented delivery channel; WhatsApp is not sent here.
      if (!lead.customerId || ['Completed', 'Deposit Received', 'Installation Scheduled'].includes(lead.leadStatus || '')) continue;

      // --- ESTIMATE FOLLOW-UPS ---
      if (lead.createdAt && Date.parse(lead.createdAt) >= campaignStart && (!lead.quoteSentAt || lead.quoteStatus !== 'sent')) {
        const daysSinceEstimate = (now - new Date(lead.createdAt).getTime()) / msInDay;

        // Day 3 Estimate Follow-up (No Day 6)
        if (daysSinceEstimate >= 3 && daysSinceEstimate < 6 && !followupsLog.includes('estimate_day3')) {
          const text = `Hi ${lead.name || 'Client'},\n\nJust checking in to see if you received the budgetary estimate we sent over recently. Do you have any initial questions or would you like to schedule a time to go over the numbers? Let us know if you need help with measurements!\n\nBest,\nQuartz International Team`;
          await sendFollowUp(lead, 'estimate_day3', text, "Following up on your Kitchen Estimate");
          continue; // Process one per lead per run
        }
      }

      // --- QUOTE FOLLOW-UPS ---
      if (lead.quoteSentAt && Date.parse(lead.quoteSentAt) >= campaignStart && lead.quoteStatus === 'sent') {
        const daysSinceQuote = (now - new Date(lead.quoteSentAt).getTime()) / msInDay;

        // Day 3 Quote Follow-up
        if (daysSinceQuote >= 3 && daysSinceQuote < 6 && !followupsLog.includes('quote_day3')) {
          const text = `Hi ${lead.name || 'Client'},\n\nJust checking in to see if you had any questions regarding your quote.\n\nWe're happy to discuss alternative cabinet styles, quartz options, or project configurations that may better fit your budget.\n\nFeel free to reply anytime.\n\nQuartz International`;
          await sendFollowUp(lead, 'quote_day3', text, "Any Questions About Your Kitchen Quote?");
          continue;
        }

        // Day 7 Quote Follow-up
        if (daysSinceQuote >= 7 && daysSinceQuote < 10 && !followupsLog.includes('quote_day7')) {
          const text = `Hi ${lead.name || 'Client'},\n\nJust following up regarding your kitchen project.\n\nIf timing, budget, or design requirements have changed, we're happy to update your quote accordingly.\n\nMany clients begin with an estimate and finalize details closer to their renovation schedule.\n\nReply anytime if you'd like us to revisit your project.\n\nQuartz International`;
          await sendFollowUp(lead, 'quote_day7', text, "Still Planning Your Kitchen Project?");
          continue;
        }
      }
    }
  } catch (err) {
    console.error("Error running automations:", err);
  }
}
