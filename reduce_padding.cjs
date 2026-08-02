const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, 'src', 'routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Reduce vertical padding classes for sections
  content = content.replace(/py-24/g, 'py-12 md:py-16');
  content = content.replace(/py-20/g, 'py-10 md:py-14');
  content = content.replace(/py-16/g, 'py-10 md:py-12');
  content = content.replace(/py-12/g, 'py-8 md:py-10');
  
  // Also fix any overlapping classes like 'md:py-12 md:py-16' which might result from double-replace
  content = content.replace(/md:py-12 md:py-16/g, 'md:py-16');

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Padding reduced across all route files.');
