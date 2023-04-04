import { chromium, type Page } from '@playwright/test'

export async function initialisePage(): Promise<any> {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  return await browser.newPage()
}


export async function openLandingPage(page): Promise<void> {
  await page.goto('')
}

export async function globalLogIn(page): Promise<void> {
  await page.goto('')
}