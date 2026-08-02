const fs = require('fs');
let code = fs.readFileSync('src/routes/modules.tsx', 'utf8');

// 1. Remove TABS array
code = code.replace(/const TABS = \[\s*\{ id: "overview".*\n.*\n.*\n\];\s*/m, '');

// 2. Remove hooks and state in ModulesPage
code = code.replace(/function ModulesPage\(\) \{[\s\S]*?return \(/m, 'function ModulesPage() {\n  return (');

// 3. Remove Tabs Navigation UI
code = code.replace(/\{\/\* Tabs Navigation \*\/\}\s*<div className=\"sticky top-20[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/m, '');

// 4. Remove the overview wrapping condition
code = code.replace(/\{\/\* ─── TAB 1: CORE MODULES ─── \*\/\}\s*\{activeTab === \"overview\" && \(\s*<section className=\"mx-auto max-w-7xl px-6\">/m, '<section className="mx-auto max-w-7xl px-6">');

// 5. Remove the monitoring tab
code = code.replace(/\{\/\* ─── TAB 3: MONITORING LAYERS ─── \*\/\}\s*\{activeTab === \"monitoring\" && \([\s\S]*?In-Season Advisor Channels[\s\S]*?<\/section>\s*\)/m, '');

// 6. Remove the architecture wrapping condition
code = code.replace(/\{\/\* ─── TAB 5: ARCHITECTURE ─── \*\/\}\s*\{activeTab === \"architecture\" && \(\s*<section className=\"mx-auto max-w-7xl px-6\">/m, '<div className="mt-24 border-t border-border pt-20"></div>\n<section className="mx-auto max-w-7xl px-6">');

// 7. Remove the final closing brackets for the tabs
code = code.replace(/<\/section>\s*\)\}\s*<\/div>\s*<\/PageShell>/m, '</section>\n</div>\n</PageShell>');

// 8. One more inner `)}` is left from the overview tab closure, we must remove it.
// The overview section ended right before the monitoring tab.
code = code.replace(/<\/section>\s*\)\}\s*<!-- ─── TAB 3/m, '</section>\n        <!-- ─── TAB 3'); // But monitoring is deleted.

fs.writeFileSync('src/routes/modules.tsx', code);
