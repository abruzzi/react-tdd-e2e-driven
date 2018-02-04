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

describe('Bookish', () => {
  test('Heading', async () => {
    await page.goto(`${appUrlBase}/`)
    await page.waitForSelector('h1')
    const result = await page.evaluate(() => {
      return document.querySelector('h1').innerText
    })

    expect(result).toEqual('Bookish')
  })

  test('Show a list of books', async () => {
    await page.goto(`${appUrlBase}/books`)
    await page.waitForSelector('.book .title')
    const books = await page.evaluate(() => {
      return [...document.querySelectorAll('.book .title')].map(el => el.innerText)
    })

    expect(books.length).toEqual(3)
    expect(books[0]).toEqual('Building Microservices')
    expect(books[1]).toEqual('Domain Driven Design')
    expect(books[2]).toEqual('Refactoring')
  })

  test('Goto book detail page', async () => {
      await page.goto(`${appUrlBase}/books`)
      await page.waitForSelector('a.view-detail')

      const links = await page.evaluate(() => {
          return [...document.querySelectorAll('a.view-detail')].map(el => el.getAttribute('href'))
      })

      await Promise.all([
          page.waitForNavigation({waitUntil:'networkidle2'}),
          page.goto(`${appUrlBase}${links[0]}`)
      ])

      const url = await page.evaluate('location.href')
      expect(url).toEqual(`${appUrlBase}/books/1`)

      await page.waitForSelector('.description')
      const result = await page.evaluate(() => {
          return document.querySelector('.description').innerText
      })
      expect(result).toEqual('')
  })
})

afterAll(() => {
  if (!process.env.DEBUG) {
    browser.close()
  }
})