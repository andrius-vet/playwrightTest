import { test, type Page, expect, chromium } from '@playwright/test'
import { initialisePage, openLandingPage } from '../page/studioBase'



test.describe('Application launch and navigation', () => {
let page : Page
  let page2 : Page


  test.beforeAll(async () => {
    page = await initialisePage()
    page2 = await initialisePage()
    await page.goto('https://app.test.sessionstudio.com/studio/auth')
    await page.waitForTimeout(3000)
  });

test.beforeEach(async () => {
  // await studioBase.openLandingPage(page)
  await page.waitForTimeout(3000)
  await page.goto('https://playwright.dev/docs/test-fixtures')
  await page2.goto('https://www.youtube.com/watch?v=l67b-HAC298')

});
  test('should allow me to add todo items', async () => {
    await page.waitForTimeout(3000)
    await page.goto('https://www.youtube.com/watch?v=l67b-HAC298')
    console.log('testas')
  });

  // test('should allow me to add todo', async () => {
  //   await page.waitForTimeout(3000)
  //   await page.goto('https://stackoverflow.com/')
  //   console.log('testas')
  // });
})