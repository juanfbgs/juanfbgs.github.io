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
    fonts: [
        {
            name: "Inter",
            cssVariable: "--font-inter",
            provider: fontProviders.fontsource(),
            // Specify weights that are actually used
            weights: [400, 500, 600, 700],
            // Specify styles that are actually used
            styles: ["normal"],
            // Download only font files for characters used on the page
            subsets: ["latin", "cyrillic"],
            // Download more font formats
            formats: ["woff2", "woff"],
        },
        {
            name: "JetBrains Mono",
            cssVariable: "--font-jetbrains-mono",
            provider: fontProviders.fontsource(),
            // Download only font files for characters used on the page
            subsets: ["latin", "latin-ext"],
            // Use a fallback font family matching the intended appearance
            fallbacks: ["monospace"],
        },
    ]
});


