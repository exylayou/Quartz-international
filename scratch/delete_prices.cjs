const fs = require('fs');
const csv = require('csv-parser');
const { Project, SyntaxKind } = require('ts-morph');

const csvFilePath = 'delete labs - Sheet1.csv';
const tsFilePath = 'src/data/materials.ts';

function normalizeString(str) {
  if (!str) return '';
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

async function run() {
  const productsToDelete = [];

  // 1. Read CSV
  await new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (row) => {
        const brand = row['brand'] ? row['brand'].trim() : '';
        const model = row['model# '] ? row['model# '].trim() : (row['model'] ? row['model'].trim() : '');
        
        if (!brand || !model) {
          return;
        }

        productsToDelete.push({
          brand,
          model,
          normalizedModel: normalizeString(model),
        });
      })
      .on('end', resolve)
      .on('error', reject);
  });

  console.log(`Loaded ${productsToDelete.length} products to delete from CSV.`);

  // 2. Modify TS File
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(tsFilePath);
  
  const materialsDecl = sourceFile.getVariableDeclaration('materials');
  const arrayLiteral = materialsDecl.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
  
  const elements = arrayLiteral.getElements();
  const elementsToRemove = [];

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
    let match = productsToDelete.find(p => {
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
      match = productsToDelete.find(p => p.normalizedModel === normName || normName.includes(p.normalizedModel));
    }

    if (match) {
      elementsToRemove.push(element);
      console.log(`REMOVING: ${nameVal} (${brandVal})`);
    }
  });

  // Remove discontinued elements
  for (const el of elementsToRemove) {
    arrayLiteral.removeElement(el);
  }

  console.log(`Removed ${elementsToRemove.length} discontinued products.`);

  await project.save();
}

run().catch(console.error);
