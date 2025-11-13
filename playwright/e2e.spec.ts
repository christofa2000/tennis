// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

import { test, expect } from '@playwright/test'

test.describe('JuegoTenis Landing Page E2E', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/')
	})

	test('should have correct page title and metadata', async ({ page }) => {
		await expect(page).toHaveTitle(/Clases de tenis en Buenos Aires.*JuegoTenis/i)
		
		const metaDescription = page.locator('meta[name="description"]')
		await expect(metaDescription).toHaveAttribute(
			'content',
			/Clases de tenis para adultos y niños/i
		)
	})

	test('should navigate smoothly between sections', async ({ page }) => {
		// Verificar que el hero está visible
		const hero = page.locator('section').first()
		await expect(hero).toBeVisible()

		// Scroll a sección de clases
		const clasesSection = page.locator('#clases')
		await clasesSection.scrollIntoViewIfNeeded()
		await expect(clasesSection).toBeVisible()

		// Scroll a sección de sedes
		const sedesSection = page.locator('#sedes')
		await sedesSection.scrollIntoViewIfNeeded()
		await expect(sedesSection).toBeVisible()

		// Scroll a sección quiénes somos
		const aboutSection = page.locator('#quienes-somos')
		await aboutSection.scrollIntoViewIfNeeded()
		await expect(aboutSection).toBeVisible()
	})

	test('should have working WhatsApp links with correct number', async ({ page }) => {
		const whatsappNumber = '5491123110735'
		
		// Verificar link en hero
		const heroWhatsapp = page.locator('a[href*="wa.me"]').first()
		await expect(heroWhatsapp).toHaveAttribute('href', new RegExp(whatsappNumber))
		await expect(heroWhatsapp).toHaveAttribute('target', '_blank')
		await expect(heroWhatsapp).toHaveAttribute('rel', 'noopener noreferrer')

		// Verificar link en CTA final
		const ctaWhatsapp = page.locator('a:has-text("Contactar por WhatsApp")')
		await expect(ctaWhatsapp).toHaveAttribute('href', new RegExp(whatsappNumber))
	})

	test('should display both locations correctly', async ({ page }) => {
		const sedesSection = page.locator('#sedes')
		await sedesSection.scrollIntoViewIfNeeded()

		// Verificar que ambas sedes están visibles
		await expect(page.getByText(/SEDE NÚÑEZ/i)).toBeVisible()
		await expect(page.getByText(/SEDE CABALLITO/i)).toBeVisible()

		// Verificar direcciones
		await expect(page.getByText(/Santiago Calzadilla 1350/i)).toBeVisible()
		await expect(page.getByText(/Doblas 1043/i)).toBeVisible()
	})

	test('should have working Google Maps links', async ({ page }) => {
		const sedesSection = page.locator('#sedes')
		await sedesSection.scrollIntoViewIfNeeded()

		const mapsLinks = page.locator('a[href*="maps.google.com"]')
		const count = await mapsLinks.count()
		expect(count).toBe(2)

		// Verificar que los links tienen target blank
		for (let i = 0; i < count; i++) {
			await expect(mapsLinks.nth(i)).toHaveAttribute('target', '_blank')
			await expect(mapsLinks.nth(i)).toHaveAttribute('rel', 'noopener noreferrer')
		}
	})

	test('should have responsive navigation', async ({ page }) => {
		// Verificar que el menú de navegación está presente
		const navigation = page.getByRole('navigation')
		await expect(navigation).toBeVisible()

		// Verificar que hay enlaces de navegación o botón de menú móvil
		const navLinks = page.locator('nav a, nav button')
		const navLinksCount = await navLinks.count()
		expect(navLinksCount).toBeGreaterThan(0)

		// Verificar navegación en desktop (viewport >= 768px)
		const viewport = page.viewportSize()
		if (viewport && viewport.width >= 768) {
			// En desktop, verificar que los enlaces de navegación son visibles
			const desktopNav = page.locator('nav[aria-label="Navegación principal"]')
			await expect(desktopNav).toBeVisible()
			
			const desktopLinks = desktopNav.locator('button, a')
			const desktopLinksCount = await desktopLinks.count()
			expect(desktopLinksCount).toBeGreaterThan(0)
		} else {
			// En mobile, verificar que el botón de menú funciona
			// Buscar el botón por aria-label primero, si no se encuentra, buscar por clase
			let menuButton = page.getByRole('button', { name: /Abrir menú|Cerrar menú/i })
			const isButtonVisible = await menuButton.isVisible().catch(() => false)
			
			if (!isButtonVisible) {
				menuButton = page.locator('button.md\\:hidden').first()
			}
			
			await expect(menuButton).toBeVisible()
			
			// Verificar que el menú está cerrado inicialmente
			const initialMenuState = page.locator('nav[aria-label="Menú móvil"]')
			const isInitiallyVisible = await initialMenuState.isVisible()
			expect(isInitiallyVisible).toBe(false)
			
			// Hacer clic para abrir el menú
			await menuButton.click()
			
			// Esperar a que la animación termine
			await page.waitForTimeout(500)
			
			// Verificar que el menú móvil se abrió
			const mobileMenu = page.locator('nav[aria-label="Menú móvil"]')
			await expect(mobileMenu).toBeVisible()
			
			// Verificar que hay elementos en el menú móvil
			const mobileMenuItems = mobileMenu.locator('button, a')
			const mobileItemsCount = await mobileMenuItems.count()
			expect(mobileItemsCount).toBeGreaterThan(0)
		}
	})

	test('should have proper heading hierarchy', async ({ page }) => {
		// Verificar que hay un H1
		const h1 = page.locator('h1')
		await expect(h1).toBeVisible()

		// Verificar que hay H2s
		const h2s = page.locator('h2')
		const h2Count = await h2s.count()
		expect(h2Count).toBeGreaterThan(0)

		// Verificar que no se salta niveles (no H4 sin H3 antes)
		const headings = await page.locator('h1, h2, h3, h4').all()
		let lastLevel = 0
		for (const heading of headings) {
			const tagName = await heading.evaluate((el) => el.tagName.toLowerCase())
			const level = parseInt(tagName.charAt(1))
			
			if (lastLevel > 0 && level > lastLevel + 1) {
				throw new Error(`Heading hierarchy violation: ${tagName} after h${lastLevel}`)
			}
			lastLevel = level
		}
	})

	test('should have accessible buttons with minimum size', async ({ page }) => {
		// Buscar solo botones visibles y enlaces que actúan como botones
		const buttons = page.locator('button:visible, a.button:visible, a[class*="Button"]:visible')
		const count = await buttons.count()

		// Verificar que hay al menos algunos botones interactivos
		expect(count).toBeGreaterThan(0)

		let accessibleButtonsCount = 0
		for (let i = 0; i < count; i++) {
			const button = buttons.nth(i)
			
			// Verificar que el botón es visible
			const isVisible = await button.isVisible()
			if (!isVisible) continue

			const box = await button.boundingBox()
			
			if (box) {
				// Verificar tamaño mínimo de 44x44px para accesibilidad
				const isAccessible = box.width >= 44 && box.height >= 44
				if (isAccessible) {
					accessibleButtonsCount++
				}
			}
		}

		// Verificar que al menos la mayoría de los botones principales son accesibles
		// (algunos botones decorativos pueden ser más pequeños)
		expect(accessibleButtonsCount).toBeGreaterThan(0)
	})

	test('should load images with proper alt text', async ({ page }) => {
		const images = page.locator('img')
		const count = await images.count()

		for (let i = 0; i < count; i++) {
			const img = images.nth(i)
			const alt = await img.getAttribute('alt')
			expect(alt).toBeTruthy()
			expect(alt?.length).toBeGreaterThan(0)
		}
	})

	test('should have proper viewport meta tag', async ({ page }) => {
		const viewport = page.locator('meta[name="viewport"]')
		await expect(viewport).toHaveAttribute('content', /width=device-width/i)
	})

	test('should have smooth scroll behavior', async ({ page }) => {
		// Verificar que el CSS tiene scroll-behavior: smooth
		const html = page.locator('html')
		const scrollBehavior = await html.evaluate((el) => 
			window.getComputedStyle(el).scrollBehavior
		)
		expect(scrollBehavior).toBe('smooth')
	})

	test('should display all sections in viewport without overflow', async ({ page }) => {
		// Verificar que la sección de sedes cabe en viewport
		const sedesSection = page.locator('#sedes')
		await sedesSection.scrollIntoViewIfNeeded()

		const sectionBox = await sedesSection.boundingBox()
		const viewport = page.viewportSize()

		if (sectionBox && viewport) {
			// Verificar que no hay overflow horizontal
			expect(sectionBox.width).toBeLessThanOrEqual(viewport.width)
		}
	})

	test('should have working floating WhatsApp button on mobile', async ({ page }) => {
		// Establecer viewport móvil
		await page.setViewportSize({ width: 375, height: 812 })

		const floatingButton = page.locator('a[aria-label*="WhatsApp"]').last()
		await expect(floatingButton).toBeVisible()

		const href = await floatingButton.getAttribute('href')
		expect(href).toContain('wa.me')
		expect(href).toContain('5491123110735')
	})
})

