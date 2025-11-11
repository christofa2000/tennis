// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

import Link from 'next/link'
import { siteConfig } from '@/lib/config/site'
import { Instagram } from 'lucide-react'
import Image from 'next/image'

const footerLinks = [
	{ label: 'Clases', href: '#clases' },
	{ label: 'Sedes', href: '#sedes' },
	{ label: 'Quiénes somos', href: '#quienes-somos' },
]

export function Footer() {
	return (
		<footer className="bg-neutral-950 text-white py-16 sm:py-20 relative overflow-hidden">
			{/* Subtle gradient accent */}
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
			
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-12">
					{/* Logo & Description */}
					<div>
						<Link
							href="/"
							className="inline-block mb-6 hover:opacity-80 transition-opacity"
						>
							<Image
								src="/logo/fondo-negro.jpeg"
								alt="JuegoTenis Logo"
								width={140}
								height={56}
								className="h-14 w-auto object-contain"
							/>
						</Link>
						<p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xs">
							Clases de tenis dinámicas y divertidas en Buenos Aires.
						</p>
					</div>

					{/* Links */}
					<div>
						<h4 className="font-bold text-white mb-6 text-base sm:text-lg">Enlaces</h4>
						<nav className="space-y-3">
							{footerLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="block text-neutral-400 hover:text-brand-500 transition-colors text-sm sm:text-base font-medium"
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>

					{/* Social & Contact */}
					<div>
						<h4 className="font-bold text-white mb-6 text-base sm:text-lg">Seguinos</h4>
						<div className="space-y-4">
							<a
								href={siteConfig.links.instagram}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-3 text-neutral-300 hover:text-brand-500 transition-all text-sm sm:text-base font-medium group"
							>
								<Instagram className="h-5 w-5 transition-transform group-hover:scale-110" />
								Instagram
							</a>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-neutral-800 pt-8 text-center">
					<p className="text-neutral-500 text-sm sm:text-base">
						© {new Date().getFullYear()} JuegoTenis. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	)
}

