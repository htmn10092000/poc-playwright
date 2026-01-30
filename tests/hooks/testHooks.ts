import { test as base, expect, Page } from '@playwright/test';

/**
 * Custom hooks wrapper
 * Import file này vào spec là hooks auto chạy
 */

// chạy 1 lần cho cả file spec
export const test = base.extend<{
  page: Page;
}>({});

// -------- GLOBAL HOOKS --------

test.beforeAll(async () => {
  console.log('🚀 beforeAll: setup once before all tests');
  // ví dụ:
  // - prepare test data
  // - read env config
});

// chạy trước mỗi test
test.beforeEach(async ({ page }) => {
  console.log('➡️ beforeEach: setup before each test');
  await page.goto('/');
});

// chạy sau mỗi test
test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    console.log(`❌ Test failed: ${testInfo.title}`);
    await page.screenshot({
      path: `screenshots/${testInfo.title}.png`,
    });
  }
});

// chạy 1 lần sau tất cả test
test.afterAll(async () => {
  console.log('🧹 afterAll: cleanup once after all tests');
  // ví dụ:
  // - cleanup DB
  // - remove temp files
});

export { expect };
