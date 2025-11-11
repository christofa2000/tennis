// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/config/site'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

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
						className="text-2xl font-bold text-white hover:text-brand-500 transition-colors"
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						Juego<span className="text-brand-500">Tenis</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<button
								key={item.href}
								onClick={() => handleNavClick(item.href)}
								className="text-white hover:text-brand-500 transition-colors font-medium"
							>
								{item.label}
							</button>
						))}
						<Button
							variant="primary"
							size="sm"
							asChild
						>
							<a
								href={siteConfig.links.whatsapp}
								target="_blank"
								rel="noopener noreferrer"
							>
								Contratá acá
							</a>
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-white"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label="Toggle menu"
					>
						{isMobileMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
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
						<div className="container mx-auto px-4 py-6 space-y-4">
							{navItems.map((item) => (
								<button
									key={item.href}
									onClick={() => handleNavClick(item.href)}
									className="block w-full text-left text-white hover:text-brand-500 transition-colors font-medium py-2"
								>
									{item.label}
								</button>
							))}
							<Button
								variant="primary"
								size="sm"
								className="w-full"
								asChild
							>
								<a
									href={siteConfig.links.whatsapp}
									target="_blank"
									rel="noopener noreferrer"
								>
									Contratá acá
								</a>
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

