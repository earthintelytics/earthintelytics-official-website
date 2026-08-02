# Rules

## Deploying TanStack Start to Netlify
When configuring a TanStack Start app for deployment to Netlify (especially one that uses `@lovable.dev/vite-tanstack-config`), follow these rules to ensure Server-Side Rendering (SSR) works correctly and does not result in 404 errors:

1. **Enable Nitro with Netlify Preset**: Update `vite.config.ts` to include the Nitro Netlify preset:
   ```typescript
   export default defineConfig({ nitro: { preset: 'netlify' } });
   ```
2. **Configure Functions Directory**: In `netlify.toml`, explicitly set the functions directory to `dist/server` so Netlify knows where the Nitro server handler is output:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist/client"
     functions = "dist/server"
   ```
3. **DO NOT Redirect to index.html**: TanStack Start uses SSR and does not produce a static `index.html` file by default. Remove any catch-all `[[redirects]]` (like `from = "/*" to = "/index.html"`) from `netlify.toml`. Having this redirect will bypass the SSR function and guarantee a 404 error.
