import { test, expect } from './fixtures';

test('Extension loads successfully', async ({ context, extensionId }) => {
  const page = await context.newPage();
  await page.goto(`chrome-extension://${extensionId}/popup.html`);
  const title = await page.title();
  expect(title).toBe('Your Extension Popup Title');
});
