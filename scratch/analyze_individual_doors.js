import { Jimp } from 'jimp';

async function analyzePureWhite() {
  const img = await Jimp.read('/home/oltonexeter/.gemini/antigravity/brain/895d2826-e59d-49cf-a0c1-dd4734605ec3/media__1780602907857.png');
  console.log('\n--- Analyzing Pure White (media__1780602907857.png) ---');
  
  // Let's print the colors along the vertical center line (x = 341) from y = 800 to 946
  // to find where the door ends and where the text starts.
  // The text "Pure White" is likely black/dark pixels.
  const midX = 341;
  console.log('Vertical line sample near the bottom:');
  for (let y = 800; y < 946; y += 10) {
    const color = img.getPixelColor(midX, y);
    const r = (color >> 24) & 0xff;
    const g = (color >> 16) & 0xff;
    const b = (color >> 8) & 0xff;
    const a = color & 0xff;
    console.log(`y=${y}: #${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')} alpha=${a}`);
  }
}

async function analyzeSmokedOak() {
  const img = await Jimp.read('/home/oltonexeter/.gemini/antigravity/brain/895d2826-e59d-49cf-a0c1-dd4734605ec3/media__1780602932564.jpg');
  console.log('\n--- Analyzing Smoked Oak (media__1780602932564.jpg) ---');
  console.log(`Dimensions: ${img.width}x${img.height}`);
  
  // Let's sample colors on a horizontal line at y = 474 (middle) to find where the dark wood door is
  const midY = 474;
  console.log('Horizontal sample at y = 474:');
  for (let x = 0; x < img.width; x += 25) {
    const color = img.getPixelColor(x, midY);
    const r = (color >> 24) & 0xff;
    const g = (color >> 16) & 0xff;
    const b = (color >> 8) & 0xff;
    console.log(`x=${x}: #${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`);
  }

  // Let's also sample a vertical line at x = 293 (middle) to find top and bottom boundaries
  const midX = 293;
  console.log('\nVertical sample at x = 293:');
  for (let y = 0; y < img.height; y += 40) {
    const color = img.getPixelColor(midX, y);
    const r = (color >> 24) & 0xff;
    const g = (color >> 16) & 0xff;
    const b = (color >> 8) & 0xff;
    console.log(`y=${y}: #${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`);
  }
}

async function main() {
  await analyzePureWhite();
  await analyzeSmokedOak();
}

main().catch(console.error);
