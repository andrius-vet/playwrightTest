import { chromium} from '@playwright/test'

const headerGuest = '(//h1)[1]'

function formButton(btnName: string): string {
  return `//button[text()="${btnName}"]`
}

export async function initialisePage(): Promise<any> {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  return await browser.newPage()
}

export async function openLandingPage(page): Promise<void> {
  await page.goto('')
}

//----------------ACTION----------------

export async function clickOnButton(page, btnName: string): Promise<void> {
  await (await getElementByLocator(page, formButton(btnName))).click()
}

//----------------GET----------------

export async function getElementByLocator(page, locator: string): Promise<any> {
  return await page.locator(locator)
}

export async function getPageHeaderTextForGuestAfterFormBtnIsVisible(page, btn: string, timeToWait?: number): Promise<string> {
  await waitUntilFormButtonByTextIsVisibleInViewport(page, btn, timeToWait)
  return await getPageHeaderText(page)
}

export async function getPageHeaderText(page): Promise<string> {
  return await (await getElementByLocator(page, headerGuest)).textContent()
}

//----------------WAIT BY TEXT----------------

export async function waitUntilFormButtonByTextIsVisibleInViewport(page, btnName: string, customTimeout?: number): Promise<void> {
  await page.waitForSelector(formButton(btnName), { visible: true, timeout: customTimeout });
}