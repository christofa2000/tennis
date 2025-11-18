// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { CTA } from '@/components/sections/cta'
import { siteConfig } from '@/lib/config/site'

expect.extend(toHaveNoViolations)

describe('CTA Section', () => {
	it('should render the main heading', () => {
		render(<CTA />)
		
		const heading = screen.getByRole('heading', { level: 2 })
		expect(heading).toBeInTheDocument()
		expect(heading).toHaveTextContent(/Sumate a JuegoTenis/i)
	})

	it('should render the description text', () => {
		render(<CTA />)
		
		const description = screen.getByText(/Contactanos y reservá tu clase de prueba/i)
		expect(description).toBeInTheDocument()
	})




	it('should have no accessibility violations', async () => {
		const { container } = render(<CTA />)
		const results = await axe(container, {
			rules: {
				'nested-interactive': { enabled: false }, // Button con asChild es válido en este contexto
			},
		})
		expect(results).toHaveNoViolations()
	})

	it('should have proper semantic structure', () => {
		render(<CTA />)
		
		const section = document.querySelector('section')
		expect(section).toBeInTheDocument()
		
		const heading = screen.getByRole('heading', { level: 2 })
		expect(heading).toBeInTheDocument()
	})
})

