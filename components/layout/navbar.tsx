// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/config/site'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
	{ label: 'Clases', href: '#clases' },
	{ label: 'Sedes', href: '#sedes' },
	{ label: 'Quiénes somos', href: '#quienes-somos' },
]

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleNavClick = (href: string) => {
		if (href.startsWith('#')) {
			const element = document.querySelector(href)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}
		setIsMobileMenuOpen(false)
	}

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-neutral-950/95 backdrop-blur-md shadow-lg'
					: 'bg-transparent'
			}`}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Logo */}
					<Link
						href="/"
						className="flex items-center h-12 md:h-14 hover:opacity-80 transition-opacity"
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						<Image
							src="/logo/fondo-blanco.jpg"
							alt="JuegoTenis Logo"
							width={140}
							height={56}
							className="h-full w-auto object-contain"
							priority
						/>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">
						{navItems.map((item) => (
							<button
								key={item.href}
								onClick={() => handleNavClick(item.href)}
								className="text-white hover:text-brand-500 transition-colors font-medium min-h-[44px] px-3 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
							>
								{item.label}
							</button>
						))}
						<Button
							variant="primary"
							size="md"
							asChild
						>
							<a
								href={siteConfig.links.whatsapp}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Contactar por WhatsApp"
							>
								Contratá acá
							</a>
						</Button>
					</nav>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-white min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
						aria-expanded={isMobileMenuOpen}
					>
						{isMobileMenuOpen ? (
							<X className="h-6 w-6" aria-hidden="true" />
						) : (
							<Menu className="h-6 w-6" aria-hidden="true" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-neutral-950/98 backdrop-blur-md border-t border-neutral-800"
					>
						<nav className="container mx-auto px-4 py-6 space-y-2" aria-label="Menú móvil">
							{navItems.map((item) => (
								<button
									key={item.href}
									onClick={() => handleNavClick(item.href)}
									className="block w-full text-left text-white hover:text-brand-500 transition-colors font-medium min-h-[44px] px-4 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded"
								>
									{item.label}
								</button>
							))}
							<Button
								variant="primary"
								size="md"
								className="w-full"
								asChild
							>
								<a
									href={siteConfig.links.whatsapp}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Contactar por WhatsApp"
								>
									Contratá acá
								</a>
							</Button>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

