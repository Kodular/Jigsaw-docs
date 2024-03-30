import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Jigsaw Docs',
			social: {
				github: 'https://github.com/Kodular',
				discord: 'https://discord.gg/ZcPuVwkU'
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', link: '/guides/getting-started/' },
					],
				},
			],
		}),
	],
});
