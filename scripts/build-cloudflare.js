const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('>>> Executing Next.js Static Export build...');
execSync('npx next build', { stdio: 'inherit', env: process.env });

const outDir = path.join(__dirname, '..', 'out');

if (!fs.existsSync(outDir)) {
  console.error('Error: "out" directory was not generated!');
  process.exit(1);
}

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const workerJsContent = `export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let res = await env.ASSETS.fetch(request);
    if (res.status === 404) {
      if (!url.pathname.endsWith('.html') && !url.pathname.includes('.')) {
        const cleanPath = url.pathname.replace(/\\/$/, '');
        const htmlUrl = new URL(request.url);
        htmlUrl.pathname = cleanPath + '.html';
        const htmlRes = await env.ASSETS.fetch(new Request(htmlUrl.toString(), request));
        if (htmlRes.status !== 404) {
          return htmlRes;
        }
      }
      const notFoundUrl = new URL('/404.html', request.url);
      return env.ASSETS.fetch(new Request(notFoundUrl.toString(), request));
    }
    return res;
  }
};
`;

const routesJsonContent = JSON.stringify({
  version: 1,
  include: ["/*"],
  exclude: []
}, null, 2);

// Target destinations expected by various Cloudflare presets
const targetDirs = [
  path.join(__dirname, '..', '.vercel', 'output', 'static'),
  path.join(__dirname, '..', '.worker-next'),
  outDir
];

for (const dir of targetDirs) {
  if (dir !== outDir) {
    console.log(`>>> Copying static export to ${path.relative(path.join(__dirname, '..'), dir)}...`);
    copyDirRecursive(outDir, dir);
  }
  fs.writeFileSync(path.join(dir, '_worker.js'), workerJsContent, 'utf8');
  fs.writeFileSync(path.join(dir, '_routes.json'), routesJsonContent, 'utf8');
}

console.log('>>> Cloudflare Pages build prepared successfully across all target output directories!');
