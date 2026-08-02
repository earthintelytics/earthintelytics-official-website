const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, 'src', 'routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace various patterns of text-5xl to be text-4xl sm:text-5xl
  content = content.replace(/text-5xl font-black/g, 'text-4xl sm:text-5xl font-black');
  content = content.replace(/text-5xl font-extrabold/g, 'text-4xl sm:text-5xl font-extrabold');
  
  // Clean up any double sm:text-X classes that might arise
  content = content.replace(/sm:text-5xl sm:text-6xl/g, 'sm:text-5xl');
  content = content.replace(/text-4xl sm:text-5xl sm:text-6xl/g, 'text-4xl sm:text-5xl');
  
  // specific fix for index.tsx
  content = content.replace(/text-5xl font-sans/g, 'text-4xl sm:text-5xl font-sans');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated mobile font sizes in ${file}`);
  }
}
