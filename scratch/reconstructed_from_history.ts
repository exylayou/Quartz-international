
> react-example@0.0.0 dev
> tsx server.ts
◇ injecting env (9) from .env.local // tip: ◈ encrypted .env [www.dotenvx.com]
◇ injecting env (0) from .env // tip: ⌘ override existing { override: true }
Server running on http://localhost:3000
Initialized messages database with 14 mock communications.







2:25:47 PM [vite] (client) hmr update /src/pages/Admin.tsx, /src/index.css





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
  app.post("/api/leads", async (req, res) => {
    const raw = req.body;
    const adminSecret = req.header
    const countertopSqFt = Number(state.countertopSqFt || raw.countertopSqFt || raw.kitchenSize || 0);
    const hasIsland = Boolean(state.hasIsland || raw.hasIsland || false);
    const includeCabinets = Boolean(state.includeCabinets || raw.includeCabinets || false);
    const cabinetLinearFt = Number(state.cabinetLinearFt || raw.cabinetLinearFt || raw.cabinetSize || 0);
    const cabinetStyle = state.cabinetStyle || raw.cabinetStyle || "";
    const timeline = state.timeline || raw.timeline || "";

    let extras: string[] = [];
    const rawExtras = state.extras || raw.extras;
    if (rawExtras) {
      if (Array.isArray(rawExtras)) {
        extras = rawExtras;
      } else {
        extras = Object.entries(rawExtras).filter(([_, v]) => v).map(([k]) => k);
      }
    }


      if (Array.isArray(rawCabinetExtras)) {
        cabinetExtras = rawCabinetExtras;
      } else {
        cabinetExtras = Object.entries(rawCabinetExtras).filter(([_, v]) => v).map(([k]) => k);
      }
    }

    const results = raw.results || {};
    const finalPrice = raw.finalPrice || {};

    const countertopCostLow = Number(results.countertop?.low ?? finalPrice.countertopLow ?? 0);
    const countertopCostHigh = Number(results.countertop?.high ?? finalPrice.countertopHigh ?? 0);
    const cabinetCostLow = Number(results.cabinets?.low ?? finalPrice.cabinetLow ?? 0);
    const cabinetCostHigh = Number(results.cabinets?.high ?? finalPrice.cabinetHigh ?? 0);
    const totalCostLow = Number(results.total?.low ?? finalPrice.totalLow ?? 0);
    const totalCostHigh = Number(results.total?.high ?? finalPrice.totalHigh ?? 0);

    const leadData: Lead = {
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      name,
      email,
      phone,
      notes,
      const customer = customers.find(c => c.id === customerId);
      if (customer) {
        name = customer.name;
        email = customer.email;
        phone = customer.phone;
      }
    } else if (email || phone) {
      // Find or create customer
      const customers = await getCustomers();
      let customer = customers.find(c =>
        (email && c.email.toLowerCase() === email.toLowerCase()) ||
        (phone && c.phone.replace(/\D/g, '') === phone.replace(/\D/g, ''))
      );
      if (customer) {
        customerId = customer.id;
        if (!name) name = customer.name;
        if (!email) email = customer.email;
        if (!phone) phone = customer.phone;
      } else {
        // Create new customer
        customerId = Math.random().toString(36).substr(2, 9);
        const newCustomer: Customer = {
          id: customerId,
          createdAt: new Date().toISOString(),
          name: name || "New Customer",
          email: email || "",
          phone: phone || "",
          notes: notes || "Automatically created from lead capture."
        };
        await saveCustomer(newCustomer);
      }
    }

    const leadData: Lead = {
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      name,
      email,
      phone,
      notes,
      layout,
      quartzLevel,
      selectedSlab,
      countertopSqFt,
      hasIsland,
      includeCabinets,
      cabinetLinearFt,
      cabinetStyle,
      timeline,
      extras,
      cabinetExtras,
      countertopCostLow,
      countertopCostHigh,
      cabinetCostLow,
      cabinetCostHigh,
      totalCostLow,
      totalCostHigh,
      customerId,

      // Admin quote override fields
      quoteStatus: isAdmin && raw.quoteStatus ? raw.quoteStatus : (isAdmin ? 'draft' : undefined),
      quoteNumber: isAdmin ? raw.quoteNumber : undefined,
      quoteItems: isAdmin ? raw.quoteItems : undefined,
      quoteTaxRate: isAdmin ? Number(raw.quoteTaxRate ?? 0.13) : undefined,
      quoteDiscount: isAdmin ? Number(raw.quoteDiscount ?? 0) : undefined,
      quoteSubtotal: isAdmin ? Number(raw.quoteSubtotal ?? 0) : undefined,
      quoteTax: isAdmin ? Number(raw.quoteTax ?? 0) : undefined,
      quoteTotal: isAdmin ? Number(raw.quoteTotal ?? 0) : undefined,
    };

    const saved = await saveLead(leadData);
    if (saved) {
      console.log("Lead saved to database successfully:", leadData.id);
    } else {
      console.error("Failed to save lead to database");
    }

    if (!isAdmin) {
      // Send email notification to admin
      const mailOptions = {
        from: process.env.SMTP_FROM || `"Quartz International Leads" <no-reply@quartzinternational.ca>`,
        to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER || "info@quartzinternational.ca",
        subject: `New Lead Captured: ${leadData.name || "Anonymous"}`,
        html: `
          <h2>New Lead Details</h2>
          <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; max-w
          <tr>
            <td><strong>Selected Extras</strong></td>
            <td>${leadData.extras && leadData.extras.length > 0 ? leadData.extras.map(k => k.replace(/([A-Z])/g, ' $1').trim()).join(', ') : 'None'}</td>
          </tr>
// MISSING LINE 187
// MISSING LINE 188
// MISSING LINE 189
// MISSING LINE 190
// MISSING LINE 191
// MISSING LINE 192
// MISSING LINE 193
// MISSING LINE 194
// MISSING LINE 195
// MISSING LINE 196
// MISSING LINE 197
// MISSING LINE 198
// MISSING LINE 199
          <tr style="font-weight: bold; background-color: #f9f9f9;">
            <td><strong>Total Estimated Range</strong></td>
            <td>$${leadData.totalCostLow?.toLocaleString() || '0'} - $${leadData.totalCostHigh?.toLocaleString() || '0'}</td>
          </tr>
        </table>
      `,
    };

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending lead notification email:", error);
        } else {
          console.log("Lead notification email sent successfully:", info.response);
        }
      });
    } else {
          </tr>
          ${leadData.includeCabinets ? `
          <tr>
            <td><strong>Cabinets Cost</strong></td>
            <td>$${leadData.cabinetCostLow?.toLocaleString() || '0'} - $${leadData.cabinetCostHigh?.toLocaleString() || '0'}</td>
          </tr>
          ` : ''}
          <tr style="font-weight: bold; background-color: #f9f9f9;">
            <td><strong>Total Estimated Range</strong></td>
            <td>$${leadData.totalCostLow?.toLocaleString() || '0'} - $${leadData.totalCostHigh?.toLocaleString() || '0'}</td>
          </tr>
        </table>
      `,
    };

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending lead notification email:", error);
        } else {
          console.log("Lead notification email sent successfully:", info.response);
        }
      });
    } else {
      console.log("Skipping email notification: SMTP credentials are not configured.");
    }

    res.status(201).json({
      status: "success",
            <tr>
              <td><strong>Countertop Cost</strong></td>
              <td>$${leadData.countertopCostLow?.toLocaleString() || '0'} - $${leadData.countertopCostHigh?.toLocaleString() || '0'}</td>
            </tr>
            ${leadData.includeCabinets ? `
            <tr>
              <td><strong>Cabinets Cost</strong></td>
              <td>$${leadData.cabinetCostLow?.toLocaleString() || '0'} - $${leadData.cabinetCostHigh?.toLocaleString() || '0'}</td>
            </tr>
            ` : ''}
            <tr style="font-weight: bold; background-color: #f9f9f9;">
              <td><strong>Total Estimated Range</strong></td>
              <td>$${leadData.totalCostLow?.toLocaleString() || '0'} - $${leadData.totalCostHigh?.toLocaleString() || '0'}</td>
            </tr>
          </table>
        `,
      };

      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Error sending lead notification email:", error);
          } else {
            console.log("Lead notification email sent successfully:", info.response);
          }
        });
      } else {
        console.log("Skipping email notification: SMTP credentials are not configured.");
      }
    } else {
      console.log("Skipping email notification for admin-created lead/quote.");
    }

    res.status(201).json({
      status: "success",
      message: isAdmin ? "Quote/Lead created successfully" : "Lead captured successfully",
      leadId: leadData.id
    });
  });

  // Save or update quote details for a specific lead (Admin Protected)
// MISSING LINE 287
// MISSING LINE 288
// MISSING LINE 289
// MISSING LINE 290
// MISSING LINE 291
// MISSING LINE 292
// MISSING LINE 293
// MISSING LINE 294
// MISSING LINE 295
// MISSING LINE 296
// MISSING LINE 297
// MISSING LINE 298
// MISSING LINE 299
// MISSING LINE 300
// MISSING LINE 301
// MISSING LINE 302
// MISSING LINE 303
// MISSING LINE 304
// MISSING LINE 305
// MISSING LINE 306
// MISSING LINE 307
// MISSING LINE 308
// MISSING LINE 309





5:25:07 PM [vite] (client) hmr update /src/pages/QuartzBrowse.tsx, /src/index.cs
s




// MISSING LINE 321
// MISSING LINE 322
// MISSING LINE 323
// MISSING LINE 324
// MISSING LINE 325
// MISSING LINE 326
// MISSING LINE 327
// MISSING LINE 328
// MISSING LINE 329
// MISSING LINE 330
// MISSING LINE 331
// MISSING LINE 332
// MISSING LINE 333
// MISSING LINE 334
// MISSING LINE 335
// MISSING LINE 336
// MISSING LINE 337
// MISSING LINE 338
// MISSING LINE 339
// MISSING LINE 340
// MISSING LINE 341
// MISSING LINE 342
// MISSING LINE 343
// MISSING LINE 344
// MISSING LINE 345
// MISSING LINE 346
// MISSING LINE 347
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

  // Client signature and quote approval submission
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
      // Send email notification to admin about signature
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
            <tr>
              <td><strong>Quote Number</strong></td>
              <td>${lead.quoteNumber || "N/A"}</td>
            </tr>
            <tr>
              <td><strong>Customer Name</strong></td>
              <td>${lead.name}</td>
            </tr>
            <tr>
              <td><strong>E-Signature</strong></td>
              <td><em>${signatureName}</em></td>
            </tr>
            <tr>
              <td><strong>Signed At</strong></td>
              <td>${new Date(clientSignedAt).toLocaleString()}</td>
            </tr>
            <tr style="font-we
          }
        });
      }

      res.json({ status: "success", message: "Quote approved and signed successfully" });
    } else {
      res.status(500).json({ error: "Failed to s
    }
  });

          if (error) {
            console.error("Error sending quote approval email:", error);
          } else {
            console.log("Quote approval email sent successfully:", info.response);
          }
        });
      }

      res.json({ status: "success", message: "Quote approved and signed successfully" });
    } else {
      res.status(500).json({ error: "Failed to sign quote" });
    }
  });

  // Get unified messages history (Admin Protected)
  app.get("/api/messages", async (req, res) => {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'qi-admin-2026') {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const messages = await getMessages();
    res.json(messages);
  });

  // Save outbound message and simulate delayed mock customer reply (Admin Protected)
  app.post("/api/messages", async (req, res) => {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'qi-admin-2026') {
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
// MISSING LINE 481
// MISSING LINE 482
// MISSING LINE 483
    }
  });

  // Update customer (Admin Protected)
  app.put("/api/customers/:id", async (req, res) => {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'qi-admin-2026') {
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
      res.json({ status: "success", message: "Customer updated and changes propagated successfully" });
    } else {
      res.status(404).json({ error: "Customer not found" });
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

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

// MISSING LINE 540
// MISSING LINE 541
// MISSING LINE 542
// MISSING LINE 543
// MISSING LINE 544
// MISSING LINE 545
// MISSING LINE 546
// MISSING LINE 547
// MISSING LINE 548
// MISSING LINE 549
// MISSING LINE 550
// MISSING LINE 551
// MISSING LINE 552
// MISSING LINE 553
// MISSING LINE 554
// MISSING LINE 555
// MISSING LINE 556
// MISSING LINE 557
// MISSING LINE 558
// MISSING LINE 559
      uploadedAt: new Date().toISOString(),
      url: "#"
    };

    const files = customer.files || [];
    files.unshift(newFile);

    const updated = await updateCustomer(id, { files });
    if (updated) {
      res.json({ status: "success", file: newFile });
    } else {
      res.status(500).json({ error: "Failed to upload file mock" });
    }
  });

  app.get("/api/leads", async (req, res) => {
    // Basic protection: check for a secret header
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'qi-admin-2026') {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const currentLeads = await getLeads();
    res.json(currentLeads);
  });

  // Get all customers (Admin Protected)
  app.get("/api/customers", async (req, res) => {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'qi-admin-2026') {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const customers = await getCustomers();
    res.json(customers);
  });

  // Create customer manually (Admin Protected)
  app.post("/api/customers", async (req, res) => {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'qi-admin-2026') {
      return res.status(401).json({ error: "Unauthorized" });
    }
// MISSING LINE 601
// MISSING LINE 602
// MISSING LINE 603
// MISSING LINE 604
// MISSING LINE 605
// MISSING LINE 606
// MISSING LINE 607
// MISSING LINE 608
// MISSING LINE 609
// MISSING LINE 610
// MISSING LINE 611
// MISSING LINE 612
// MISSING LINE 613
// MISSING LINE 614
// MISSING LINE 615
// MISSING LINE 616
// MISSING LINE 617
// MISSING LINE 618
// MISSING LINE 619
  });

  // Update customer (Admin Protected)
  app.put("/api/customers/:id", async (req, res) => {
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'qi-admin-2026') {
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
      res.json({ status: "success", message: "Customer updated and changes propagated successfully" });
    } else {
      res.status(404).json({ error: "Customer not found" });
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

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

