import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})
        await page.goto('http://localhost:3001/', wait_until='networkidle')
        await page.wait_for_timeout(1000)
        await page.screenshot(path='current_clone_screenshot.png', full_page=True)
        await browser.close()
        print('Screenshot saved to current_clone_screenshot.png')

asyncio.run(main())
