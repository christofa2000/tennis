// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

import { render, screen } from '@testing-library/react'
import { Locations } from '@/components/sections/locations'
import { siteConfig } from '@/lib/config/site'

describe('Locations Section', () => {
	it('should render the section title', () => {
		render(<Locations />)
		
		const title = screen.getByRole('heading', { level: 2 })
		expect(title).toBeInTheDocument()
		expect(title).toHaveTextContent(/NUESTRAS.*SEDES/i)
	})

	it('should render the description text', () => {
		render(<Locations />)
		
		const description = screen.getByText(/Dos sedes especialmente diseñadas/i)
		expect(description).toBeInTheDocument()
	})

	it('should render both locations', () => {
		render(<Locations />)
		
		const nunez = screen.getByText(/SEDE NÚÑEZ/i)
		const caballito = screen.getByText(/SEDE CABALLITO/i)
		
		expect(nunez).toBeInTheDocument()
		expect(caballito).toBeInTheDocument()
	})

	it('should render location addresses', () => {
		render(<Locations />)
		
		const nunezAddress = screen.getByText(/Santiago Calzadilla 1350/i)
		const caballitoAddress = screen.getByText(/Doblas 1043/i)
		
		expect(nunezAddress).toBeInTheDocument()
		expect(caballitoAddress).toBeInTheDocument()
	})

	it('should have correct Google Maps links', () => {
		render(<Locations />)
		
		const links = screen.getAllByRole('link')
		const mapsLinks = links.filter((link) => 
			link.getAttribute('href')?.includes('maps.google.com')
		)
		
		expect(mapsLinks.length).toBe(2)
		
		mapsLinks.forEach((link) => {
			expect(link).toHaveAttribute('target', '_blank')
			expect(link).toHaveAttribute('rel', 'noopener noreferrer')
		})
	})

	it('should render location images with alt text', () => {
		render(<Locations />)
		
		const nunezImage = screen.getByAltText(/Sede Núñez.*Santiago Calzadilla/i)
		const caballitoImage = screen.getByAltText(/Sede Caballito.*Doblas/i)
		
		expect(nunezImage).toBeInTheDocument()
		expect(caballitoImage).toBeInTheDocument()
	})

	it('should have proper section id for navigation', () => {
		render(<Locations />)
		
		const section = document.querySelector('section[id="sedes"]')
		expect(section).toBeInTheDocument()
	})

	it('should render logos in location cards', () => {
		render(<Locations />)
		
		const logos = screen.getAllByAltText(/JuegoTenis Logo/i)
		expect(logos.length).toBeGreaterThanOrEqual(2)
	})

	it('should have locations in correct order (Núñez first, Caballito second)', () => {
		render(<Locations />)
		
		const headings = screen.getAllByRole('heading', { level: 3 })
		expect(headings[0]).toHaveTextContent(/NÚÑEZ/i)
		expect(headings[1]).toHaveTextContent(/CABALLITO/i)
	})
})


