import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      // allowedHosts should only contain hostnames, no 'https://'
      allowedHosts: [
        'gm-portfolio-site-1.onrender.com',
        'gmidreesi.dev' 
      ],
      cors: {
        // Use an array to allow multiple specific origins
        origin: [
          "https://gm-portfolio-site-1.onrender.com",
          "https://gmidreesi.dev"
        ],
        methods: ["GET", "POST"],
        credentials: true, // Set to true if you need to pass cookies or headers
      }
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
