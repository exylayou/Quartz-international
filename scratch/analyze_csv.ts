import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';
import { materials } from '../src/data/materials';

interface CsvRow {
  brand: string;
  'model# ': string;
  price: string;
  Labour: string;
  from: string;
  to: string;
}

const csvFilePath = path.resolve(process.cwd(), 'Copy of new labs - Sheet1.csv');

const rows: CsvRow[] = [];

fs.createReadStream(csvFilePath)
  .pipe(csvParser())
  .on('data', (data: CsvRow) => {
    rows.push(data);
  })
  .on('end', () => {
    console.log(`Loaded ${rows.length} rows from CSV.`);

    const updatesNeeded: { materialId: string; newFrom: number; newTo: number; oldRange: string; name: string }[] = [];
    const newProducts: { brand: string; modelName: string; from: number | null; to: number | null }[] = [];

    for (const row of rows) {
      const model = row['model# ']?.trim();
      const brand = row.brand?.trim();
      if (!model || model.includes('(18 Slabs)') || model === '') {
        // Skip header/empty rows
        continue;
      }

      // Check if this row has pricing
      const hasPrice = row.from && row.from.trim() !== '' && parseFloat(row.from) > 36;
      const fromVal = hasPrice ? Math.round(parseFloat(row.from)) : null;
      const toVal = hasPrice ? Math.round(parseFloat(row.to)) : null;

      // Try to find a match in materials
      const normalizedModel = normalizeName(model);

      const matchedMaterial = materials.find(m => {
        const normMatName = normalizeName(m.name);
        const brandMatch = m.brand.toLowerCase() === brand.toLowerCase();
        
        // Special case for Empira White typo in materials.ts
        if (brandMatch && normalizedModel.includes('empirawhite') && normMatName.includes('empirawhite')) {
          return true;
        }

        return brandMatch && (normMatName.includes(normalizedModel) || normalizedModel.includes(normMatName));
      });

      if (matchedMaterial) {
        if (fromVal !== null && toVal !== null) {
          const newRange = `$${fromVal} – $${toVal}`;
          if (matchedMaterial.priceRange !== newRange) {
            updatesNeeded.push({
              materialId: matchedMaterial.id,
              name: matchedMaterial.name,
              newFrom: fromVal,
              newTo: toVal,
              oldRange: matchedMaterial.priceRange
            });
          }
        }
      } else {
        newProducts.push({
          brand,
          modelName: model,
          from: fromVal,
          to: toVal
        });
      }
    }

    console.log(`\n--- UPDATES NEEDED FOR EXISTING PRODUCTS (${updatesNeeded.length}) ---`);
    for (const update of updatesNeeded) {
      console.log(`- ${update.name} (${update.materialId}): range ${update.oldRange} -> $${update.newFrom} – $${update.newTo}`);
    }

    console.log(`\n--- NEW PRODUCTS TO BE ADDED (${newProducts.length}) ---`);
    for (const prod of newProducts) {
      const priceText = prod.from !== null ? `$${prod.from} – $${prod.to}` : 'NO PRICE';
      console.log(`- [NEW] Brand: "${prod.brand}", Model: "${prod.modelName}" (${priceText})`);
    }
  });

function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '') // remove spaces, dashes, special chars
    .replace(/^(tce|lq|ciq)/, ''); // remove brand prefixes from model code if any
}
