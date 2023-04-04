import { test, type Page } from '@playwright/test'
import {
  initialisePage,
  openLandingPage
} from '../../src/pages/base-page'
import { clickOnLink } from '../../src/pages/create-quiz-page'
import { loginToQuizmartApp } from '../../src/utility/api'
import * as enums from '../../src/utility/enums'

test.describe('Create quiz', () => {
  let page : Page

  test.beforeAll(async () => {
    page = await initialisePage()
    await openLandingPage(page)

  });

  test.beforeEach(async () => {
    const url = await loginToQuizmartApp(page)
    await page.goto(url)
    await clickOnLink(page, enums.Link.Create)

  });
  test('Open sign in page from landing page', async () => {
    console.log('Test pass')
  });
})