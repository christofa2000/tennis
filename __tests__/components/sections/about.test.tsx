// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

import { render, screen } from '@testing-library/react'
import { About } from '@/components/sections/about'

describe('About Section', () => {
	it('should render the section title', () => {
		render(<About />)
		
		const title = screen.getByRole('heading', { level: 2 })
		expect(title).toBeInTheDocument()
		expect(title).toHaveTextContent(/Quiénes.*Somos/i)
	})

	it('should render the main description paragraph', () => {
		render(<About />)
		
		const paragraphs = screen.getAllByText((content, element) => {
			return element?.tagName === 'P' &&
			       element?.textContent?.includes('En') && 
			       element?.textContent?.includes('JuegoTenis') && 
			       element?.textContent?.includes('te ayudamos a aprender')
		})
		expect(paragraphs.length).toBeGreaterThan(0)
		expect(paragraphs[0]).toBeInTheDocument()
	})

	it('should render the methodology description', () => {
		render(<About />)
		
		const paragraph = screen.getByText(/Nuestro equipo diseña clases personalizadas/i)
		expect(paragraph).toBeInTheDocument()
	})

	it('should render the call to action text', () => {
		render(<About />)
		
		const cta = screen.getByText(/Sumate a JuegoTenis y descubrí una forma diferente/i)
		expect(cta).toBeInTheDocument()
	})

	it('should render emoji in content', () => {
		render(<About />)
		
		const content = screen.getByText(/🎾/)
		expect(content).toBeInTheDocument()
	})

	it('should have proper section id for navigation', () => {
		render(<About />)
		
		const section = document.querySelector('section[id="quienes-somos"]')
		expect(section).toBeInTheDocument()
	})

	it('should render the professor image with alt text', () => {
		render(<About />)
		
		const image = screen.getByAltText(/Profesor de tenis enseñando en JuegoTenis/i)
		expect(image).toBeInTheDocument()
	})

	it('should have proper semantic structure', () => {
		render(<About />)
		
		const section = document.querySelector('section')
		expect(section).toBeInTheDocument()
		
		const headings = screen.getAllByRole('heading')
		expect(headings.length).toBeGreaterThan(0)
	})
})

