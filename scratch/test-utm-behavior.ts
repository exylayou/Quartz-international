import { getLeads, saveLead, Lead } from '../src/services/dbService';

async function runTest() {
  console.log('--- Starting UTM & User Behavior Database Verification Test ---');

  const testLeadId = 'test-lead-' + Math.random().toString(36).substr(2, 5);

  const mockLead: Lead = {
    id: testLeadId,
    createdAt: new Date().toISOString(),
    name: 'Jane Doe Tracking Test',
    email: 'jane.tracking@example.com',
    phone: '555-987-6543',
    notes: 'Testing Google Ads and session tracking integration.',
    layout: 'L-Shape',
    quartzLevel: 'premium',
    countertopSqFt: 40,
    countertopLinearFt: 22,
    hasIsland: true,
    islandType: 'waterfall',
    includeCabinets: true,
    cabinetLinearFt: 18,
    cabinetStyle: 'premium',
    totalCostLow: 9800,
    totalCostHigh: 12500,
    includeCountertops: true,
    
    // UTM parameters
    utmSource: 'google',
    utmMedium: 'cpc',
    utmCampaign: 'GTA-Kitchen-Countertops-2026',
    utmTerm: 'quartz countertop price toronto',
    utmContent: 'expanded-ad-v2',
    gclid: 'gclid-test-value-xyz-9876543210',

    // User behavior journey log
    behavior: {
      sessionStart: new Date(Date.now() - 300000).toISOString(), // 5 minutes ago
      pageViews: [
        { path: '/', enteredAt: Date.now() - 300000, durationMs: 45000 },
        { path: '/quartz-countertops-toronto', enteredAt: Date.now() - 255000, durationMs: 120000 },
        { path: '/caesarstone', enteredAt: Date.now() - 135000, durationMs: 60000 },
        { path: '/results', enteredAt: Date.now() - 75000, durationMs: 75000 }
      ],
      calculatorOpenedCount: 1,
      totalInteractions: 14,
      timeSpentMs: 300000
    }
  };

  console.log(`Saving mock lead with ID: ${testLeadId}...`);
  const saveResult = await saveLead(mockLead);
  if (!saveResult) {
    throw new Error('Failed to save lead with UTM/Behavior analytics.');
  }
  console.log('Lead saved successfully!');

  console.log('Fetching leads from database to verify contents...');
  const leads = await getLeads();
  const fetchedLead = leads.find(l => l.id === testLeadId);

  if (!fetchedLead) {
    throw new Error(`Failed to find lead with ID ${testLeadId} in database.`);
  }

  console.log('Verifying fetched lead properties:');
  console.log('  Name:', fetchedLead.name);
  console.log('  UTM Source:', fetchedLead.utmSource);
  console.log('  UTM Medium:', fetchedLead.utmMedium);
  console.log('  UTM Campaign:', fetchedLead.utmCampaign);
  console.log('  UTM Term (Keyword):', fetchedLead.utmTerm);
  console.log('  GCLID:', fetchedLead.gclid);
  
  if (!fetchedLead.behavior) {
    throw new Error('Behavior analytics object is missing on the saved lead.');
  }

  console.log('  Behavior Page Views Count:', fetchedLead.behavior.pageViews.length);
  console.log('  Behavior Total Interactions:', fetchedLead.behavior.totalInteractions);
  console.log('  Behavior Total Session Duration:', fetchedLead.behavior.timeSpentMs, 'ms');
  
  // Verify matching values
  if (
    fetchedLead.utmSource !== mockLead.utmSource ||
    fetchedLead.gclid !== mockLead.gclid ||
    fetchedLead.behavior.pageViews.length !== mockLead.behavior.pageViews.length ||
    fetchedLead.behavior.totalInteractions !== mockLead.behavior.totalInteractions
  ) {
    throw new Error('Data mismatch between saved lead and fetched lead.');
  }

  console.log('\n--- SUCCESS: UTM & User Behavior Database Integration Verified! ---');
}

runTest().catch(err => {
  console.error('\n--- FAILURE during verification test: ---');
  console.error(err);
  process.exit(1);
});
