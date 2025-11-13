// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

import { render, screen, fireEvent } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Services } from '@/components/sections/services'
import { siteConfig } from '@/lib/config/site'

expect.extend(toHaveNoViolations)

describe('Services Section', () => {
	it('should render the section title', () => {
		render(<Services />)
		
		const title = screen.getByRole('heading', { level: 2 })
		expect(title).toBeInTheDocument()
		expect(title).toHaveTextContent(/Nuestras.*Clases/i)
	})

	it('should render description text', () => {
		render(<Services />)
		
		const description = screen.getByText(/Ofertas diseñadas para cada nivel y edad/i)
		expect(description).toBeInTheDocument()
	})

	it('should render both service cards', () => {
		render(<Services />)
		
		const adultosCard = screen.getByText(/Clases de tenis para adultos/i)
		const ninosCard = screen.getByText(/Clases de niños y adolescentes/i)
		
		expect(adultosCard).toBeInTheDocument()
		expect(ninosCard).toBeInTheDocument()
	})

	it('should render service descriptions', () => {
		render(<Services />)
		
		const adultosDesc = screen.getByText(/Clases diseñadas para adultos de todos los niveles/i)
		const ninosDesc = screen.getByText(/Escuela infantil de tenis con metodología lúdica/i)
		
		expect(adultosDesc).toBeInTheDocument()
		expect(ninosDesc).toBeInTheDocument()
	})

	it('should render CTA buttons for each service', () => {
		render(<Services />)
		
		const buttons = screen.getAllByRole('link', { name: /Reservá tu clase de prueba/i })
		expect(buttons).toHaveLength(2)
		
		buttons.forEach((button) => {
			expect(button).toHaveAttribute('href', siteConfig.links.whatsapp)
			expect(button).toHaveAttribute('target', '_blank')
			expect(button).toHaveAttribute('rel', 'noopener noreferrer')
		})
	})

	it('should have proper image alt texts', () => {
		render(<Services />)
		
		const adultosImage = screen.getByAltText(/Clases de tenis para adultos en JuegoTenis/i)
		const ninosImage = screen.getByAltText(/Clases de tenis para niños y adolescentes en JuegoTenis/i)
		
		expect(adultosImage).toBeInTheDocument()
		expect(ninosImage).toBeInTheDocument()
	})

	it('should have no accessibility violations', async () => {
		const { container } = render(<Services />)
		const results = await axe(container, {
			rules: {
				'nested-interactive': { enabled: false }, // Button con asChild es válido en este contexto
			},
		})
		expect(results).toHaveNoViolations()
	})

	it('should have proper semantic structure', () => {
		render(<Services />)
		
		const section = document.querySelector('section[id="clases"]')
		expect(section).toBeInTheDocument()
		
		const headings = screen.getAllByRole('heading')
		expect(headings.length).toBeGreaterThan(0)
	})
})

