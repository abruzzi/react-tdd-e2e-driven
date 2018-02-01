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
    const result = await page.evaluate(() => {
      return document.querySelector('h1').innerText
    })

    expect(result).toEqual('Bookish')
  })

  test('Show A List of books', async () => {
    await page.goto(`${appUrlBase}`)
    const books = await page.evaluate(() => {
      return [...document.querySelectorAll('.book .title')].map(el => el.innerText)
    })

    expect(books.length).toEqual(2)
    expect(books[0]).toEqual('Implementing Microservice')
    expect(books[1]).toEqual('Domain Driven Design')
  })
})

afterAll(() => {
  if (!process.env.DEBUG) {
    browser.close()
  }
})