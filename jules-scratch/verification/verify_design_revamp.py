from playwright.sync_api import sync_playwright, expect

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # 1. Arrange: Go to the homepage.
        # The dev server runs on port 4321 by default for astro
        page.goto("http://localhost:4321")

        # 2. Assert: Wait for the page to load and the hero section to be visible.
        hero_section = page.locator("section.section.has-text-centered")
        expect(hero_section).to_be_visible()

        # 3. Screenshot: Capture the final result for visual verification.
        page.screenshot(path="jules-scratch/verification/verification.png")

        browser.close()

if __name__ == "__main__":
    main()