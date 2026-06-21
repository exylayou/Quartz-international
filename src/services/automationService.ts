import { getLeads, updateLead, getMessages, getCustomers, saveMessage, Message, Lead } from "./dbService.js";
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

// Determines if a lead/customer prefers WhatsApp based on message history
async function getPreferredChannel(customerId: string | undefined): Promise<'whatsapp' | 'email'> {
  if (!customerId) return 'email';
  const messages = await getMessages();
  const usesWhatsApp = messages.some(m => m.customerId === customerId && m.channel === 'whatsapp');
  return usesWhatsApp ? 'whatsapp' : 'email';
}

async function sendFollowUp(lead: Lead, stepId: string, channel: 'whatsapp' | 'email', text: string, subject?: string) {
  const customerId = lead.customerId;
  if (!customerId) return false;

  const customers = await getCustomers();
  const customer = customers.find(c => c.id === customerId);
  if (!customer) return false;

  // Save the message in the unified inbox
  const message: Message = {
    id: Math.random().toString(36).substr(2, 9),
    customerId,
    channel,
    direction: 'outbound',
    sender: 'info@quartzinternational.ca', // Automated sender
    text,
    timestamp: new Date().toISOString()
  };

  await saveMessage(message);

  // If email, actually send it via SMTP
  if (channel === 'email' && transporter && customer.email) {
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
    }
  }

  // Update the lead's followupsLog
  const followupsLog = lead.followupsLog || [];
  followupsLog.push(stepId);
  await updateLead(lead.id, { followupsLog });
  console.log(`Sent ${stepId} via ${channel} to lead ${lead.id}`);
  return true;
}

export async function runAutomations() {
  console.log("Running Drip Campaign Automations...");
  try {
    const leads = await getLeads();
    const now = Date.now();
    const msInDay = 24 * 60 * 60 * 1000;

    for (const lead of leads) {
      const followupsLog = lead.followupsLog || [];
      const channel = await getPreferredChannel(lead.customerId);

      // --- ESTIMATE FOLLOW-UPS ---
      if (lead.createdAt && (!lead.quoteSentAt || lead.quoteStatus !== 'sent')) {
        const daysSinceEstimate = (now - new Date(lead.createdAt).getTime()) / msInDay;

        // Day 3 Estimate Follow-up (No Day 6)
        if (daysSinceEstimate >= 3 && !followupsLog.includes('estimate_day3')) {
          const text = channel === 'whatsapp'
            ? `Hi ${lead.name || 'Client'},\n\nJust checking in to see if you received the budgetary estimate we sent over. Do you have any initial questions or need help with measurements?\n\n— Quartz International`
            : `Hi ${lead.name || 'Client'},\n\nJust checking in to see if you received the budgetary estimate we sent over recently. Do you have any initial questions or would you like to schedule a time to go over the numbers? Let us know if you need help with measurements!\n\nBest,\nQuartz International Team`;
          await sendFollowUp(lead, 'estimate_day3', channel, text, "Following up on your Kitchen Estimate");
          continue; // Process one per lead per run
        }
      }

      // --- QUOTE FOLLOW-UPS ---
      if (lead.quoteSentAt && lead.quoteStatus === 'sent') {
        const daysSinceQuote = (now - new Date(lead.quoteSentAt).getTime()) / msInDay;

        // Day 3 Quote Follow-up
        if (daysSinceQuote >= 3 && !followupsLog.includes('quote_day3')) {
          const text = channel === 'whatsapp'
            ? `Hi ${lead.name || 'Client'},\n\nJust checking in regarding the quote we sent.\n\nDo you have any questions about pricing, materials, timeline, or design options?\n\nIf you'd like to explore alternative cabinet styles or quartz selections that better fit your budget, we're happy to help.\n\n— Quartz International`
            : `Hi ${lead.name || 'Client'},\n\nJust checking in to see if you had any questions regarding your quote.\n\nWe're happy to discuss alternative cabinet styles, quartz options, or project configurations that may better fit your budget.\n\nFeel free to reply anytime.\n\nQuartz International`;
          await sendFollowUp(lead, 'quote_day3', channel, text, "Any Questions About Your Kitchen Quote?");
          continue;
        }

        // Day 7 Quote Follow-up
        if (daysSinceQuote >= 7 && !followupsLog.includes('quote_day7')) {
          const text = channel === 'whatsapp'
            ? `Hi ${lead.name || 'Client'},\n\nJust following up on your kitchen project.\n\nIf you're still comparing options or planning your renovation, we'd be happy to review your project and discuss next steps.\n\nLet us know if you'd like to move forward, make changes, or schedule a measurement.\n\n— Quartz International`
            : `Hi ${lead.name || 'Client'},\n\nJust following up regarding your kitchen project.\n\nIf timing, budget, or design requirements have changed, we're happy to update your quote accordingly.\n\nMany clients begin with an estimate and finalize details closer to their renovation schedule.\n\nReply anytime if you'd like us to revisit your project.\n\nQuartz International`;
          await sendFollowUp(lead, 'quote_day7', channel, text, "Still Planning Your Kitchen Project?");
          continue;
        }
      }
    }
  } catch (err) {
    console.error("Error running automations:", err);
  }
}
