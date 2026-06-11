import json
import re

log_path = "/home/oltonexeter/.gemini/antigravity/brain/ea4590c8-ba3b-4483-9138-41b85531eda6/.system_generated/logs/transcript.jsonl"
history = {} # line_number -> [(step_index, created_at, content)]

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            step_index = data.get('step_index')
            type_name = data.get('type')
            content = data.get('content', '')

            if type_name == 'VIEW_FILE' and 'File Path: `file:///home/oltonexeter/Antigravity-x64/quartz-international/server.ts`' in content:
                created_at = data.get('created_at', '')
                for file_line in content.split('\n'):
                    match = re.match(r"^(\d+):\s?(.*)$", file_line.strip())
                    if match:
                        line_num = int(match.group(1))
                        line_content = match.group(2)

                        if line_num not in history:
                            history[line_num] = []
                        history[line_num].append((step_index, created_at, line_content))
        except Exception as e:
            pass

output_path = "/home/oltonexeter/Antigravity-x64/quartz-international/scratch/server_line_history.txt"
with open(output_path, 'w', encoding='utf-8') as f:
    for line_num in sorted(history.keys()):
        f.write(f"=== Line {line_num} ===\n")
        # Sort by step index descending (newest first)
        for step, date, content in sorted(history[line_num], key=lambda x: x[0], reverse=True):
            f.write(f"  Step {step} ({date}): {content}\n")
        f.write("\n")

print(f"Wrote line history to {output_path}")

    print(f"  {start}-{prev}")

    # Write the reconstructed file
    output_path = "/home/oltonexeter/Antigravity-x64/quartz-international/server.ts"
    with open(output_path, 'w', encoding='utf-8') as f:
        max_line = max(all_lines)
        for i in range(1, max_line + 1):
            if i in line_db:
                f.write(line_db[i][1] + "\n")
            else:
                f.write(f"// MISSING LINE {i}\n")
    print(f"Wrote strict reconstructed file to {output_path}")

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



2:35:50 PM [vite] (client) hmr update /src/pages/Admin.tsx, /src/index.css (x8)







2:36:53 PM [vite] (client) page reload data/messages.json







2:37:16 PM [vite] (client) page reload data/messages.json (x2)







2:41:21 PM [vite] (client) hm
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
      at normalizeFile (/home/oltonexeter/Antigravity-x64/quartz-international/n
ode_modules/@babel/core/src/transformation/normalize-file.ts:50:24)
      at normalizeFile.next (<anonymous>)
      at run (/home/oltonexeter/Antigravity-x64/quartz-international/node_module
s/@babel/core/src/transformation/index.ts:41:36)
      at run.next (<anonymous>)
      at transform (/home/oltonexeter/Antigravity-x64/quartz-international/node_
modules/@babel/core/src/transform.ts:29:20)
      at transform.next (<anonymous>)
      at step (/home/oltonexeter/Antigravity-x64/quartz-international/node_modul
es/gensync/index.js:261:32)
      at /home/oltonexeter/Antigravity-x64/quartz-international/node_modules/gen
sync/index.js:273:13
      at async.call.result.err.err (/home/oltonexeter/Antigravity-x64/quartz-int
ernational/node_modules/gensync/index.js:223:11)
      at /home/oltonexeter/Antigravity-x64/quartz-international/node_modules/gen
sync/index.js:189:28
      at <anonymous> (/home/oltonexeter/Antigravity-x64/quartz-international/nod
e_modules/@babel/core/src/gensync-utils/async.ts:90:7)
      at /home/oltonexeter/Antigravity-x64/quartz-international/node_modules/gen
sync/index.js:113:33
      at step (/home/oltonexeter/Antigravity-x64/quartz-international/node_modul
es/gensync/index.js:287:14)
      at /home/oltonexeter/Antigravity-x64/quartz-international/node_modules/gen
sync/index.js:273:13
      at async.call.result.err.err (/home/oltonexeter/Antigravity-x64/quartz-int
ernational/node_modules/gensync/index.js:223:11)
12:39:28 PM [vite] (client) Pre-transform error: /home/oltonexeter/Antigravity-x
64/quartz-international/src/pages/Blog.tsx: 'return' outside of function. (590:4
)

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
x64/quartz-international/node_modules/@babel/parser/src/plugins/jsx/index.ts:470
:35)
      at TypeScriptParserMixin.jsxParseElement (/home/oltonexeter/Antigravity-x6
4/quartz-international/node_modules/@babel/parser/src/plugins/jsx/index.ts:559:1
9)
      at TypeScriptParserMixin.parseExprAtom (/home/oltonexeter/Antigravity-x64/
quartz-international/node_modules/@babel/parser/src/plugins/jsx/index.ts:573:21)
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









5:28:20 PM [vite] (client) hmr update /src/pages/LucentQuartz.tsx, /src/index.cs
s








5:28:27 PM [vite] (client) hmr update /src/pages/QuartzBrowse.tsx, /src/index.cs
s









6:00:31 PM [vite] (client) hmr update /src/index.css, /src/pages/SlabDetail.tsx,
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


// MISSING LINE 676
// MISSING LINE 677
// MISSING LINE 678
// MISSING LINE 679
// MISSING LINE 680
// MISSING LINE 681
// MISSING LINE 682
// MISSING LINE 683
// MISSING LINE 684
// MISSING LINE 685
// MISSING LINE 686
// MISSING LINE 687
// MISSING LINE 688
// MISSING LINE 689
// MISSING LINE 690
// MISSING LINE 691
// MISSING LINE 692
// MISSING LINE 693
// MISSING LINE 694
// MISSING LINE 695
// MISSING LINE 696
// MISSING LINE 697
// MISSING LINE 698
// MISSING LINE 699
// MISSING LINE 700
// MISSING LINE 701
// MISSING LINE 702
// MISSING LINE 703
// MISSING LINE 704
// MISSING LINE 705
// MISSING LINE 706
// MISSING LINE 707
// MISSING LINE 708
// MISSING LINE 709
// MISSING LINE 710
// MISSING LINE 711
// MISSING LINE 712
// MISSING LINE 713
// MISSING LINE 714
// MISSING LINE 715
// MISSING LINE 716
// MISSING LINE 717
// MISSING LINE 718
// MISSING LINE 719
// MISSING LINE 720
// MISSING LINE 721
// MISSING LINE 722
// MISSING LINE 723
// MISSING LINE 724
// MISSING LINE 725
// MISSING LINE 726
// MISSING LINE 727
// MISSING LINE 728
// MISSING LINE 729
// MISSING LINE 730
// MISSING LINE 731
// MISSING LINE 732
// MISSING LINE 733
// MISSING LINE 734
// MISSING LINE 735
// MISSING LINE 736
// MISSING LINE 737
// MISSING LINE 738
// MISSING LINE 739
// MISSING LINE 740
// MISSING LINE 741
// MISSING LINE 742
// MISSING LINE 743
// MISSING LINE 744
// MISSING LINE 745
// MISSING LINE 746
// MISSING LINE 747
// MISSING LINE 748
      at transform.next (<anonymous>)
      at step (/home/oltonexeter/Antigravity-x64/quartz-international/node_modul
es/gensync/index.js:261:32)
      at /home/oltonexeter/Antigravity-x64/quartz-international/node_modules/gen
sync/index.js:273:13
      at async.call.result.err.err (/home/oltonexeter/Antigravity-x64/quartz-int
ernational/node_modules/gensync/index.js:223:11)
      at /home/oltonexeter/Antigravity-x64/quartz-international/node_modules/gen
sync/index.js:189:28
      at <anonymous> (/home/oltonexeter/Antigravity-x64/quartz-international/nod
e_modules/@babel/core/src/gensync-utils/async.ts:90:7)
      at /home/oltonexeter/Antigravity-x64/quartz-international/node_modules/gen
sync/index.js:113:33
      at step (/home/oltonexeter/Antigravity-x64/quartz-international/node_modul
es/gensync/index.js:287:14)
      at /home/oltonexeter/Antigravity-x64/quartz-international/node_modules/gen
sync/index.js:273:13
      at async.call.result.err.err (/home/oltonexeter/Antigravity-x64/quartz-int
ernational/node_modules/gensync/index.js:223:11)




















12:47:04 PM [vite] (client) Pre-transform error: /home/oltonexeter/Antigravity-x
64/quartz-international/src/pages/Blog.tsx: 'return' outside of function. (1098:
4)

  1096 |
  1097 |   if (activePostId === 3) {
> 1098 |     return (
       |     ^
  1099 |       <div className="bg-background pt-24 pb-32">
  1100 |         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
  1101 |           <button
  Plugin: vite:react-babel
  File: /home/oltonexeter/Antigravity-x64/quartz-international/src/pages/Blog.ts
