import { test, expect } from '@playwright/test'

test('app loads and shows map container', async ({ page }) => {
  await page.goto('http://localhost:5173')
  await expect(page.locator('.leaflet-container')).toBeVisible()
})

test('click on map stores feature in localStorage', async ({ page }) => {
  await page.goto('http://localhost:5173')
  const map = page.locator('.leaflet-container')
  const box = await map.boundingBox()
  if (!box) throw new Error('map bounding box not found')
  await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2)
  await page.waitForTimeout(300)
  const stored = await page.evaluate(() => localStorage.getItem('aoi_features'))
  expect(stored).not.toBeNull()
})
