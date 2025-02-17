import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // ✅ Allows access from Docker
    port: 5173,      // ✅ Keeps Vite running on the default port

  },
});
