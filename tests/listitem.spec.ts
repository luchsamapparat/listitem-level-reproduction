import { expect, test } from '@playwright/test';
import path from 'path';

test('first-level list items', async ({ page }) => {
  await page.goto(`file://${path.join(__dirname, '../page.html')}`);

  expect(await page.getByRole('listitem').count()).toBe(3);
  expect(await page.getByRole('listitem', { level: 1 }).count()).toBe(2);
});

