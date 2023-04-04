import { expect } from '@playwright/test'


const url = 'https://staging-api.quizmart.io/api/v1/auth/login';
export async function loginToQuizmartApp({request}) {
  const response =await  request.post(url, {
    data: {
      'email': 'eglvns@telesoftas.com',
      'password': 'myPasswordIs321'
    }
  })
  const res = await response.json()
  expect(response.status()).toBe(200)
  return `https://staging-app.quizmart.io/auth#${res.accessToken}$$${res.refreshToken}$$`
}
