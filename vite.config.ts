import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	base: process.env.NODE_ENV === 'poduction' ? '/seamless-color-ball/' : './',
	build: {
		outDir: 'docs',
	},
	plugins: [vue()],
});
