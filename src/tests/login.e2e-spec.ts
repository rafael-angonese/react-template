import { expect, test } from '@playwright/test'

test.describe('login page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
  })

  test('should has title page', async ({ page }) => {
    await expect(page).toHaveTitle(/React Template/)
  })

  test('should has entry button', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Entrar' })).toBeVisible()
  })

  test('should navigate to login page', async ({ page }) => {
    await expect(page).toHaveURL('/login')
    await expect(page.locator('form')).toBeVisible()
  })

  test('login with wrong credentials', async ({ page }) => {
    await page.fill('input[name="email"]', 'email@error.com')
    await page.fill('input[name="password"]', 'password123')
    await page.click('button[type="submit"]')

    await expect(page.getByText(/Credências inválidas/)).toBeVisible()
  })

  test('should submit login form', async ({ page }) => {
    await page.fill('input[name="email"]', 'test@example.com')
    await page.fill('input[name="password"]', 'password123')
    await page.click('button[type="submit"]')

    await expect(page).not.toHaveURL('/login')

    await expect(page.getByText('Dashboard')).toBeVisible()
  })

  test('should toggle password visibility', async ({ page }) => {
    const passwordInput = page.locator('input[name="password"]')
    const toggleButton = page.locator(
      'button[aria-label="Toggle password visibility"]',
    )

    await page.fill('input[name="password"]', 'password123')
    await expect(passwordInput).toHaveAttribute('type', 'password')

    await toggleButton.click()
    await expect(passwordInput).toHaveAttribute('type', 'text')

    await toggleButton.click()
    await expect(passwordInput).toHaveAttribute('type', 'password')
  })

  test('should navigate to recovery password page', async ({ page }) => {
    await page.click('text=Esqueceu sua senha?')
    await expect(page).toHaveURL('/recovery-password')
  })
})
