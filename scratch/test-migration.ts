import fs from 'fs/promises';
import path from 'path';

const DB_DIR = path.resolve(process.cwd(), 'data');
const DB_FILE = path.resolve(DB_DIR, 'leads.json');
const CUSTOMERS_FILE = path.resolve(DB_DIR, 'customers.json');

async function run() {
  try {
    console.log("Checking leads.json...");
    const leadsData = await fs.readFile(DB_FILE, 'utf-8');
    const leads = JSON.parse(leadsData);
    console.log(`Loaded ${leads.length} leads.`);
    
    const uniqueCustomersMap = new Map();
    let needsLeadsUpdate = false;
    
    for (const lead of leads) {
      if (lead.email) {
        const emailKey = lead.email.toLowerCase();
        if (!uniqueCustomersMap.has(emailKey)) {
          const customerId = lead.customerId || Math.random().toString(36).substr(2, 9);
          if (!lead.customerId) {
            lead.customerId = customerId;
            needsLeadsUpdate = true;
          }
          uniqueCustomersMap.set(emailKey, {
            id: customerId,
            createdAt: lead.createdAt || new Date().toISOString(),
            name: lead.name || "Customer",
            email: lead.email,
            phone: lead.phone || "",
            notes: lead.notes || "Imported from past lead inquiry."
          });
        } else {
          const existingCust = uniqueCustomersMap.get(emailKey);
          if (lead.customerId !== existingCust.id) {
            lead.customerId = existingCust.id;
            needsLeadsUpdate = true;
          }
        }
      }
    }
    
    console.log(`Found ${uniqueCustomersMap.size} unique customers.`);
    if (uniqueCustomersMap.size > 0) {
      const initialCustomers = Array.from(uniqueCustomersMap.values());
      await fs.writeFile(CUSTOMERS_FILE, JSON.stringify(initialCustomers, null, 2), 'utf-8');
      if (needsLeadsUpdate) {
        await fs.writeFile(DB_FILE, JSON.stringify(leads, null, 2), 'utf-8');
        console.log("Updated leads.json with customer IDs.");
      }
      console.log("Written customers.json successfully!");
    }
  } catch (err) {
    console.error("Migration failed with error:", err);
  }
}

run();
