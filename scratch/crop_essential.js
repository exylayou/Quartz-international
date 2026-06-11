import { Jimp } from 'jimp';

async function cropPureWhite() {
  const input = '/home/oltonexeter/.gemini/antigravity/brain/895d2826-e59d-49cf-a0c1-dd4734605ec3/media__1780602907857.png';
  const output = 'src/assets/images/pure_white_slab.png';
  
  console.log(`Cropping Pure White...`);
  const image = await Jimp.read(input);
  
  // Crop coords based on door boundary, excluding text at y >= 870 and transparent space
  const x = 80;
  const y = 94;
  const w = 601 - 80 + 1; // 522
  const h = 858 - 94 + 1; // 765
  
  image.crop({ x, y, w, h });
  await image.write(output);
  console.log(`Saved Pure White to ${output}`);
}

async function cropWhitishMaple() {
  const input = '/home/oltonexeter/.gemini/antigravity/brain/895d2826-e59d-49cf-a0c1-dd4734605ec3/media__1780602907818.png';
  const output = 'src/assets/images/whitish_maple_flat.png';
  
  console.log(`Cropping Whitish Maple...`);
  const image = await Jimp.read(input);
  
  const x = 81;
  const y = 92;
  const w = 601 - 81 + 1; // 521
  const h = 894 - 92 + 1; // 803
  
  image.crop({ x, y, w, h });
  await image.write(output);
  console.log(`Saved Whitish Maple to ${output}`);
}

async function cropNaturalWood() {
  const input = '/home/oltonexeter/.gemini/antigravity/brain/895d2826-e59d-49cf-a0c1-dd4734605ec3/media__1780602958711.png';
  const output = 'src/assets/images/natural_wood_slab.png';
  
  console.log(`Cropping Natural Wood...`);
  const image = await Jimp.read(input);
  
  const x = 57;
  const y = 67;
  const w = 609 - 57 + 1; // 553
  const h = 952 - 67 + 1; // 886
  
  image.crop({ x, y, w, h });
  await image.write(output);
  console.log(`Saved Natural Wood to ${output}`);
}

async function cropSmokedOak() {
  const input = '/home/oltonexeter/.gemini/antigravity/brain/895d2826-e59d-49cf-a0c1-dd4734605ec3/media__1780602932564.jpg';
  const output = 'src/assets/images/smoked_oak_slab.png';
  
  console.log(`Cropping Smoked Oak...`);
  const image = await Jimp.read(input);
  
  // Crop slightly inside to clean borders
  const x = 2;
  const y = 2;
  const w = image.width - 4;
  const h = image.height - 4;
  
  image.crop({ x, y, w, h });
  await image.write(output);
  console.log(`Saved Smoked Oak to ${output}`);
}

async function main() {
  await cropPureWhite();
  await cropWhitishMaple();
  await cropNaturalWood();
  await cropSmokedOak();
  console.log('All crops completed successfully!');
}

main().catch(console.error);
