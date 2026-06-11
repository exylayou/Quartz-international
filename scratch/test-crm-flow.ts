import fetch from 'node-fetch'; // Not needed since Node 18+ has global fetch, but we can write simple code using global fetch

async function run() {
  const secret = 'qi-admin-2026';
  const baseUrl = 'http://localhost:3000';

  console.log("1. Fetching current customers...");
  const custRes = await fetch(`${baseUrl}/api/customers`, {
    headers: { 'x-admin-secret': secret }
  });
  const customers = await custRes.json() as any[];
  console.log(`Current customer count: ${customers.length}`);

  console.log("\n2. Creating a new customer...");
  const newCustRes = await fetch(`${baseUrl}/api/customers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-admin-secret': secret
    },
    body: JSON.stringify({
      name: 'Test Customer Flow',
      email: 'testflow@example.com',
      phone: '123-456-7890',
      notes: 'Created by automated test flow.'
    })
  });
  const newCustData = await newCustRes.json() as any;
  console.log("Customer created:", newCustData);
  const createdCustId = newCustData.id;

  console.log("\n3. Creating a new quote/lead associated with this customer...");
  const newLeadRes = await fetch(`${baseUrl}/api/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-admin-secret': secret
    },
    body: JSON.stringify({
      customerId: createdCustId,
      layout: 'U-Shape',
      quartzLevel: 'luxury',
      countertopSqFt: 60,
      hasIsland: true,
      quoteStatus: 'draft',
      quoteNumber: 'QI-TEST-999',
      quoteItems: [
        { description: 'Luxury Quartz Fabrication & Installation', quantity: 60, unitPrice: 150, total: 9000 },
        { description: 'Undermount Sink Cutout & Installation', quantity: 1, unitPrice: 350, total: 350 }
      ],
      quoteTaxRate: 0.13,
      quoteDiscount: 500,
      quoteSubtotal: 9350,
      quoteTax: 1151,
      quoteTotal: 10001
    })
  });
  const newLeadData = await newLeadRes.json() as any;
  console.log("Quote/Lead created:", newLeadData);
  const createdLeadId = newLeadData.leadId;

  console.log("\n4. Verification: Fetch leads and find the new lead...");
  const leadsRes = await fetch(`${baseUrl}/api/leads`, {
    headers: { 'x-admin-secret': secret }
  });
  const leads = await leadsRes.json() as any[];
  const matchedLead = leads.find((l: any) => l.id === createdLeadId);
  console.log("Found lead in database:", matchedLead);

  if (matchedLead && matchedLead.customerId === createdCustId && matchedLead.email === 'testflow@example.com') {
    console.log("SUCCESS: Lead is successfully associated with the customer and populated with email.");
  } else {
    console.error("FAIL: Lead association check failed.");
  }

  console.log("\n5. Updating the customer's email and phone...");
  const updateCustRes = await fetch(`${baseUrl}/api/customers/${createdCustId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-admin-secret': secret
    },
    body: JSON.stringify({
      name: 'Test Customer Flow Updated',
      email: 'testflow_updated@example.com',
      phone: '999-999-9999',
      notes: 'Updated note.'
    })
  });
  const updateCustData = await updateCustRes.json() as any;
  console.log("Customer update response:", updateCustData);

  console.log("\n6. Verification: Check if the lead/quote has updated details propagated...");
  const leadsRes2 = await fetch(`${baseUrl}/api/leads`, {
    headers: { 'x-admin-secret': secret }
  });
  const leads2 = await leadsRes2.json() as any[];
  const matchedLead2 = leads2.find((l: any) => l.id === createdLeadId);
  console.log("Lead in database after customer update:", matchedLead2);

  if (matchedLead2 && matchedLead2.email === 'testflow_updated@example.com' && matchedLead2.phone === '999-999-9999' && matchedLead2.name === 'Test Customer Flow Updated') {
    console.log("SUCCESS: Customer detail propagation to associated leads works flawlessly!");
  } else {
    console.error("FAIL: Detail propagation check failed.");
  }
}

run();
