import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: {
        channel: 'chrome',
        headless: false,
      },
    },
    {
      name: 'firefox',
      use: {
        channel: 'firefox',
        headless: false,
      },
    },
    {
      name: 'webkit',
      use: {
        channel: 'safari',
        headless: false,
      },
    },
  ],
  testDir: './tests',
});
