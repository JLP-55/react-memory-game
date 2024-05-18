import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(),
		// config for vitePWA
		VitePWA({
			registerType: 'autoUpdate',
			injectRegister: 'script-defer',
			devOptions: {
				enabled: false
			},
			manifest: {
				name: 'A Game of Memory',
				short_name: 'Memory',
				description: 'A game where you match unknown cards',
				theme_color: '#ffffff',
				icons: [
				{
					src: 'pwa-192x192.png',
					sizes: '192x192',
					type: 'image/png'
				},
				{
					src: 'pwa-512x512.png',
					sizes: '512x512',
					type: 'image/png'
				}
				]
			},
			workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,jpg,pdf,jsx}'],
				runtimeCaching: [
				{
					urlPattern: ({ url }) => {
						return url.pathname.startsWith("/");
					},
					handler: "CacheFirst",
					options: {
						cacheName: "assets-cache",
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				},
				],
			},
		})
		],
	server: {
		port: 3000,
		// this will open the app automatically
		open: true,
		// do we only need a proxy for when we build the application?
		// not sure of the use of a proxy server.
		proxy: {
		  '/graphql': {
		    target: 'http://localhost:3001',
		    changeOrigin: true,
		    secure: false,
		  },     
		}
	}
})