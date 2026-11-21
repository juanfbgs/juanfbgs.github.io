// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://juanfbgs.github.io',
    markdown: {
        shikiConfig: {
            themes: {
                light: 'catppuccin-latte',
                dark: 'catppuccin-mocha',
            },
        },
    },
    fonts: [{
    provider: fontProviders.local(),
    name: "HackNerdFont",
    cssVariable: "--font-hack",
    options: {
      variants: [{
        src: ['./src/assets/fonts/HackNerdFont-Regular.woff2'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }] 
});


