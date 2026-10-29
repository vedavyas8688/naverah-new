import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';
import contactHandler from './api/contact.js';

function contactApiPlugin() {
  return {
    name: 'local-contact-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (request, response) => {
        let rawBody = '';
        for await (const chunk of request) rawBody += chunk;

        const apiResponse = {
          setHeader: (...args) => response.setHeader(...args),
          status(code) {
            response.statusCode = code;
            return this;
          },
          json(payload) {
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(payload));
            return this;
          },
        };

        try {
          const body = rawBody ? JSON.parse(rawBody) : {};
          await contactHandler({ method: request.method, body }, apiResponse);
        } catch {
          apiResponse.status(400).json({ error: 'Invalid request.' });
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return {
    plugins: [react({ include: /\.(js|jsx)$/ }), tailwind(), contactApiPlugin()],
    esbuild: {
      loader: 'jsx',
      include: /src\/.*\.js$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: { '.js': 'jsx' },
      },
    },
    server: { host: '0.0.0.0', allowedHosts: true },
    build: {
      manifest: true,
      rollupOptions: {
        output: {
          manualChunks: { vendor: ['react', 'react-dom'], motion: ['gsap', 'gsap/ScrollTrigger'] },
        },
      },
    },
  };
});
