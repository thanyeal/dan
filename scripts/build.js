import { mkdirSync, cpSync, existsSync } from 'node:fs';

const dirs = [
  'dist',
  'dist/assets',
  'dist/assets/css',
  'dist/assets/js',
  'dist/assets/images'
];

for (const dir of dirs) {
  mkdirSync(dir, { recursive: true });
}

// Copy images as-is (no minification needed)
cpSync('assets/images', 'dist/assets/images', { recursive: true });

// Copy .nojekyll if present (needed for GitHub Pages to serve files/folders starting with _ etc.)
if (existsSync('.nojekyll')) {
  cpSync('.nojekyll', 'dist/.nojekyll');
}

console.log('✔ dist/ scaffolded and static assets copied');