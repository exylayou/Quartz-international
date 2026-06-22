const fs = require('fs');
const csv = require('csv-parser');
const { Project, SyntaxKind } = require('ts-morph');

const csvFilePath = 'Copy of new labs - Sheet1.csv';
const tsFilePath = 'src/data/materials.ts';

function normalizeString(str) {
  if (!str) return '';
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

async function run() {
  const products = [];

  // 1. Read CSV
  await new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (row) => {
        const brand = row['brand'] ? row['brand'].trim() : '';
        const model = row['model# '] ? row['model# '].trim() : (row['model'] ? row['model'].trim() : '');
        const fromStr = row['from'] ? row['from'].trim() : '';
        const toStr = row['to'] ? row['to'].trim() : '';
        
        // Skip header rows like "Caesarstone (18 Slabs)"
        if (model.includes('(18 Slabs)') || !brand || !model) {
          return;
        }

        const from = parseFloat(fromStr);
        const to = parseFloat(toStr);
        const hasPrice = !isNaN(from) && !isNaN(to);

        products.push({
          brand,
          model,
          normalizedModel: normalizeString(model),
          hasPrice,
          from: hasPrice ? Math.round(from) : null,
          to: hasPrice ? Math.round(to) : null,
        });
      })
      .on('end', resolve)
      .on('error', reject);
  });

  console.log(`Loaded ${products.length} products from CSV.`);

  // 2. Modify TS File
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(tsFilePath);
  
  const materialsDecl = sourceFile.getVariableDeclaration('materials');
  const arrayLiteral = materialsDecl.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
  
  const elements = arrayLiteral.getElements();
  const elementsToRemove = [];
  const updatedCount = { count: 0 };

  console.log(`Found ${elements.length} materials in TS file.`);

  elements.forEach((element, index) => {
    if (element.getKind() !== SyntaxKind.ObjectLiteralExpression) return;
    
    const nameProp = element.getProperty('name');
    const brandProp = element.getProperty('brand');
    
    if (!nameProp || !brandProp) return;
    
    const nameVal = nameProp.getInitializerIfKind(SyntaxKind.StringLiteral)?.getLiteralValue() || '';
    const brandVal = brandProp.getInitializerIfKind(SyntaxKind.StringLiteral)?.getLiteralValue() || '';
    const normName = normalizeString(nameVal);
    const normBrand = normalizeString(brandVal);

    // Find match in CSV
    let match = products.find(p => {
      // First try to match exact normalized name
      if (p.normalizedModel === normName && normalizeString(p.brand) === normBrand) return true;
      // Some TS names have the brand removed or added, check if model is substring of name
      if (normName.includes(p.normalizedModel) || p.normalizedModel.includes(normName)) {
        if (normalizeString(p.brand) === normBrand) return true;
      }
      // Special case: Sio4
      if (normBrand === 'sio4' && p.normalizedModel.includes(normName.replace('sio4', ''))) return true;
      // Special case: "LQ2003 â€“ Sleek Cement" in CSV vs "CIQ2003 – Sleek Cement" in TS
      if (p.normalizedModel.includes('2003sleekcement') && normName.includes('2003sleekcement')) return true;
      return false;
    });

    // Special fallback for Silestone where brand might be missing in CSV or TS
    if (!match) {
      match = products.find(p => p.normalizedModel === normName || normName.includes(p.normalizedModel));
    }

    if (match && match.hasPrice) {
      // Update price
      const priceRangeProp = element.getProperty('priceRange');
      if (priceRangeProp) {
        priceRangeProp.setInitializer(`'$${match.from} – $${match.to}'`);
        updatedCount.count++;
      }
    }
  });

  console.log(`Updated ${updatedCount.count} products with new prices.`);

  await project.save();
}

run().catch(console.error);
