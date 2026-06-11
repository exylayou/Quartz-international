import fs from 'fs/promises';
import path from 'path';

const DB_DIR = path.resolve(process.cwd(), 'data');
const LEADS_FILE = path.resolve(DB_DIR, 'leads.json');
const CUSTOMERS_FILE = path.resolve(DB_DIR, 'customers.json');

async function clean() {
  try {
    // Clean leads
    const leadsData = await fs.readFile(LEADS_FILE, 'utf-8');
    const leads = JSON.parse(leadsData) as any[];
    const cleanedLeads = leads.filter(l => l.name !== 'Test Customer Flow' && l.name !== 'Test Customer Flow Updated' && l.email !== 'testflow@example.com' && l.email !== 'testflow_updated@example.com');
    await fs.writeFile(LEADS_FILE, JSON.stringify(cleanedLeads, null, 2), 'utf-8');
    console.log(`Leads cleaned: ${leads.length} -> ${cleanedLeads.length}`);

    // Clean customers
    const customersData = await fs.readFile(CUSTOMERS_FILE, 'utf-8');
    const customers = JSON.parse(customersData) as any[];
    const cleanedCustomers = customers.filter(c => c.name !== 'Test Customer Flow' && c.name !== 'Test Customer Flow Updated' && c.email !== 'testflow@example.com' && c.email !== 'testflow_updated@example.com');
    await fs.writeFile(CUSTOMERS_FILE, JSON.stringify(cleanedCustomers, null, 2), 'utf-8');
    console.log(`Customers cleaned: ${customers.length} -> ${cleanedCustomers.length}`);
  } catch (err) {
    console.error("Clean failed:", err);
  }
}

clean();
