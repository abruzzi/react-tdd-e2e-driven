import puppeteer from 'puppeteer'

const appUrlBase = 'http://localhost:3001'


let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch(
    process.env.DEBUG
      ? {
          headless: false,
          slowMo: 100,
        }
      : {}
  )
  page = await browser.newPage()
})

describe('Application', () => {
  test('Heading', async () => {
    await page.goto(`${appUrlBase}`)
    const element = await page.$eval('h1', el => el.innerText)

    expect(element).toEqual('Hello World')
  })
})

afterAll(() => {
  if (!process.env.DEBUG) {
    browser.close()
  }
})