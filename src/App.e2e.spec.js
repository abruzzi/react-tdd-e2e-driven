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

import axios from 'axios'

describe('Bookish', () => {
  afterEach(() => {
    return axios.delete('http://localhost:8080/books?_cleanup=true').catch(err => err)
  })

  beforeEach(() => {
    const books = [
      {"title": "Building Microservices", "author": "Sam Newman", "price": 100, "description": "Building Microservices"},
      {"title": "Domain Driven Design", "author": "Eric Evans","price": 101, "description": "Domain Driven Design"},
      {"title": "Refactoring", "author": "Martin Fowler", "price": 102, "description": "Refactoring"}
    ]

    return books.map(item => axios.post('http://localhost:8080/books', item, {headers: { 'Content-Type': 'application/json' }}))
  })

  describe('Book List', () => {
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
      expect(books).toContain('Building Microservices')
      expect(books).toContain('Domain Driven Design')
      expect(books).toContain('Refactoring')
    })

  })

  describe('Detail page', () => {
    test('Goto book detail page', async () => {
      await page.goto(`${appUrlBase}/books`)
      await page.waitForSelector('a.view-detail')

      const links = await page.evaluate(() => {
        return [...document.querySelectorAll('a.view-detail')].map(el => el.getAttribute('href'))
      })

      await Promise.all([
        page.waitForNavigation({waitUntil: 'networkidle2'}),
        page.goto(`${appUrlBase}${links[0]}`)
      ])

      const url = await page.evaluate('location.href')
      expect(url).toEqual(`${appUrlBase}/books/1`)

      await page.waitForSelector('.description')
      const result = await page.evaluate(() => {
        return document.querySelector('.description').innerText
      })
      expect(result).toEqual('Building Microservices')
    })

  })

  describe('Search', () => {
    test('Show books which name contains keyword', async () => {
      await page.goto(`${appUrlBase}/books`)

      const input = await page.waitForSelector('input.search')
      page.type('input.search', 'Domain')

      await page.screenshot({path: 'search-for-domain.png'});
      await page.waitForSelector('.book .title')
      const books = await page.evaluate(() => {
        return [...document.querySelectorAll('.book .title')].map(el => el.innerText)
      })

      expect(books.length).toEqual(1)
      expect(books[0]).toEqual('Domain Driven Design')
    })
  })
})

afterAll(() => {
  if (!process.env.DEBUG) {
    browser.close()
  }
})