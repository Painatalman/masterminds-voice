import postcss from "./postcss.config.cjs";
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
   css: {
    postcss,
  },
};

export default config;
