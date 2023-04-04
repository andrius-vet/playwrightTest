import { test, type Page, expect, request } from '@playwright/test'
import {
  clickOnButton, getPageHeaderTextForGuestAfterFormBtnIsVisible,
  initialisePage,
  openLandingPage
} from '../../src/pages/base-page'
import { loginToQuizmartApp } from '../../src/utility/api'
import * as enums from '../../src/utility/enums'
import * as api from '../../src/utility/api'


test.describe('Landing page', () => {
  let page : Page

  test.beforeEach(async () => {
    page = await initialisePage()
    await openLandingPage(page, )
  });
  test('Open sign in page from landing page', async () => {
    await clickOnButton(page, enums.Button.SignInWithEmail)
    expect (await getPageHeaderTextForGuestAfterFormBtnIsVisible(page,enums.Button.SignIn)).toContain(enums.Header.SignIn)

  });
})