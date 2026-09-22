import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})
        await page.goto('http://localhost:3001/', wait_until='networkidle')
        # Scroll down smoothly to trigger all lazy loaded images
        for y in range(0, 5000, 500):
            await page.evaluate(f'window.scrollTo(0, {y})')
            await page.wait_for_timeout(200)
        await page.evaluate('window.scrollTo(0, 0)')
        await page.wait_for_timeout(1000)
        await page.screenshot(path='current_clone_screenshot.png', full_page=True)
        await browser.close()
        print('Scrolled screenshot saved to current_clone_screenshot.png')

asyncio.run(main())
