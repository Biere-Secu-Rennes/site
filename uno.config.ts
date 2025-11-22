import {
  defineConfig,
  presetIcons,
  presetWind4,
  presetTypography,
} from 'unocss';

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons({
      collections: {
        logos: () =>
          import('@iconify-json/logos/icons.json').then((i) => i.default),
        uil: () =>
          import('@iconify-json/uil/icons.json').then((l) => l.default),
      },
    }),
    presetTypography(),
  ],
});
