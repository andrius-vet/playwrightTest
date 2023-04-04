import { getElementByLocator } from './base-page'


function link(href: string): string {
  return `(//a[@href="${href}"])[1]`
}
export async function clickOnLink(page, href: string): Promise<void> {
  await (await getElementByLocator(page, link(href))).click()
}