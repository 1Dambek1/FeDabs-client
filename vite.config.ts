<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import path from "path";
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
=======
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), TanStackRouterVite()],
	server: {
		port: 3000,
	},
});
>>>>>>> 8221eecc3c066bd816fb19a85ab3304e5dafdc38
