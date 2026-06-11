import { Jimp } from 'jimp';

async function main() {
  console.log('Reading original matte image...');
  const image = await Jimp.read('/home/oltonexeter/.gemini/antigravity/brain/ea4590c8-ba3b-4483-9138-41b85531eda6/media__1780152575171.png');
  console.log('Original dimensions:', image.width, 'x', image.height);
  
  // Crop the image: remove the top 160px where the text labels and vertical lines are.
  // We keep the horizontal bounds centered by keeping the full width, or we can crop the sides to focus on the panels.
  // Let's keep the full width to keep it centered and matches the High Gloss image layout.
  console.log('Cropping top 160px...');
  image.crop({ x: 0, y: 160, w: image.width, h: image.height - 160 });
  
  console.log('Writing cropped image to src/assets/images/matte_doors.png...');
  await image.write('src/assets/images/matte_doors.png');
  console.log('Done!');
}

main().catch(err => {
  console.error('Error cropping image:', err);
  process.exit(1);
});
