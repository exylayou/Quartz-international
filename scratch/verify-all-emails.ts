import fetch from 'node-fetch'; // Standard Node 18 global fetch fallback

const baseUrl = 'http://localhost:3000';
const adminSecret = 'qi-admin-2026';

async function testAll() {
  console.log("=== STARTING END-TO-END EMAIL FLOW VERIFICATION ===\n");

  try {
    // 1. Test Lead Capture Email Flow (POST /api/leads)
    console.log("1. Testing Estimator Lead Submission Email Flow...");
    const leadData = {
      name: "Verify Tester",
      email: "info@quartzinternational.ca", // sends a copy to themselves to verify
      phone: "647-555-0199",
      notes: "E2E verification run.",
      state: {
        layout: "L-Shape",
        quartzLevel: "premium",
        selectedSlab: "TCE 4032",
        countertopSqFt: 45,
        countertopLinearFt: 25,
        hasIsland: true,
        islandType: "small",
        includeCabinets: true,
        cabinetLinearFt: 20,
        cabinetStyle: "premium",
        deliveryMethod: "installed",
        selectedCabinetStyle: "Slim Shaker",
        timeline: "1-3-months",
        extras: { sink: true, cooktop: true, waterfall: false }
      },
      results: {
        countertop: { low: 3105, high: 4275 },
        cabinets: { low: 4700, high: 5800 },
        total: { low: 7805, high: 10075 }
      }
    };

    const leadStartTime = Date.now();
    const leadRes = await fetch(`${baseUrl}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData)
    });
    const leadDuration = Date.now() - leadStartTime;
    const leadJson = await leadRes.json() as any;

    console.log(`- API Status Code: ${leadRes.status}`);
    console.log(`- API Response Duration: ${leadDuration}ms (should be fast, < 200ms because of async email send)`);
    console.log(`- API Response Body:`, leadJson);
    if (leadRes.status === 201) {
      console.log("✓ SUCCESS: Lead submission completed successfully.");
    } else {
      console.error("✗ FAILURE: Lead submission failed.");
    }
    const leadId = leadJson.leadId;

    // 2. Test Quote Proposal Email Flow (POST /api/leads/:id/quote)
    console.log("\n2. Testing Quote Generation and 'Sent' Status Email Flow...");
    const quoteData = {
      quoteStatus: "sent",
      quoteNumber: "QI-E2E-9999",
      quoteItems: [
        { description: "TCE 4032 Premium Countertops (Fabricated & Installed)", quantity: 45, unitPrice: 82, total: 3690 },
        { description: "Premium Slim Shaker Custom Cabinetry Bundle", quantity: 20, unitPrice: 260, total: 5200 },
        { description: "Undermount Sink Cutout & Polish", quantity: 1, unitPrice: 350, total: 350 },
        { description: "Cooktop Cutout", quantity: 1, unitPrice: 250, total: 250 }
      ],
      quoteTaxRate: 0.13,
      quoteDiscount: 300,
      quoteSubtotal: 9490,
      quoteTax: 1194.7,
      quoteTotal: 10384.7
    };

    const quoteStartTime = Date.now();
    const quoteRes = await fetch(`${baseUrl}/api/leads/${leadId}/quote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-secret': adminSecret
      },
      body: JSON.stringify(quoteData)
    });
    const quoteDuration = Date.now() - quoteStartTime;
    const quoteJson = await quoteRes.json() as any;

    console.log(`- API Status Code: ${quoteRes.status}`);
    console.log(`- API Response Duration: ${quoteDuration}ms`);
    console.log(`- API Response Body:`, quoteJson);
    if (quoteRes.status === 200) {
      console.log("✓ SUCCESS: Quote saved and 'sent' email triggered.");
    } else {
      console.error("✗ FAILURE: Quote save/send failed.");
    }

    // 3. Test Quote Approval Confirmation Email Flow (POST /api/quotes/:id/approve)
    console.log("\n3. Testing Client Signature & Approval Confirmation Email Flow...");
    const approveStartTime = Date.now();
    const approveRes = await fetch(`${baseUrl}/api/quotes/${leadId}/approve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ signatureName: "Verify Tester Approved Signature" })
    });
    const approveDuration = Date.now() - approveStartTime;
    const approveJson = await approveRes.json() as any;

    console.log(`- API Status Code: ${approveRes.status}`);
    console.log(`- API Response Duration: ${approveDuration}ms`);
    console.log(`- API Response Body:`, approveJson);
    if (approveRes.status === 200) {
      console.log("✓ SUCCESS: Signature approval submitted and confirmation emails triggered.");
    } else {
      console.error("✗ FAILURE: Signature approval failed.");
    }

    // 4. Test CRM Message Email Delivery (POST /api/messages)
    console.log("\n4. Testing CRM Outbound Email Message flow...");
    // Let's get the customer ID associated with the lead we just captured
    const customersRes = await fetch(`${baseUrl}/api/customers`, {
      headers: { 'x-admin-secret': adminSecret }
    });
    const customers = await customersRes.json() as any[];
    const testerCustomer = customers.find(c => c.email.toLowerCase() === 'info@quartzinternational.ca');

    if (testerCustomer) {
      const msgStartTime = Date.now();
      const msgRes = await fetch(`${baseUrl}/api/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-secret': adminSecret
        },
        body: JSON.stringify({
          customerId: testerCustomer.id,
          channel: "email",
          text: "Hi Verify Tester, this is a custom outbound CRM message sent to verify email notifications are functioning beautifully! Enjoy your new countertops.",
          sender: "info@quartzinternational.ca"
        })
      });
      const msgDuration = Date.now() - msgStartTime;
      const msgJson = await msgRes.json() as any;

      console.log(`- API Status Code: ${msgRes.status}`);
      console.log(`- API Response Duration: ${msgDuration}ms`);
      console.log(`- API Response Body:`, msgJson);
      if (msgRes.status === 201) {
        console.log("✓ SUCCESS: CRM email message created and email triggered.");
      } else {
        console.error("✗ FAILURE: CRM email message creation failed.");
      }
    } else {
      console.error("✗ FAILURE: Tester customer not found in database.");
    }

  } catch (error) {
    console.error("✗ AN ERROR OCCURRED DURING TEST RUN:", error);
  }

  console.log("\n=== END-TO-END EMAIL FLOW VERIFICATION COMPLETED ===");
}

testAll();
