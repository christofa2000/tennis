// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

import Link from 'next/link'
import { siteConfig } from '@/lib/config/site'
import { Instagram } from 'lucide-react'

const footerLinks = [
	{ label: 'Clases', href: '#clases' },
	{ label: 'Sedes', href: '#sedes' },
	{ label: 'Quiénes somos', href: '#quienes-somos' },
]

export function Footer() {
	return (
		<footer className="bg-neutral-950 text-white py-12 sm:py-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Logo & Description */}
					<div>
						<h3 className="text-2xl font-bold mb-4">
							Juego<span className="text-brand-500">Tenis</span>
						</h3>
						<p className="text-neutral-400 text-sm leading-relaxed">
							Clases de tenis dinámicas y divertidas en Buenos Aires.
						</p>
					</div>

					{/* Links */}
					<div>
						<h4 className="font-semibold mb-4">Enlaces</h4>
						<nav className="space-y-2">
							{footerLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="block text-neutral-400 hover:text-brand-500 transition-colors text-sm"
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>

					{/* Social & Contact */}
					<div>
						<h4 className="font-semibold mb-4">Seguinos</h4>
						<div className="space-y-3">
							<a
								href={siteConfig.links.instagram}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-neutral-400 hover:text-brand-500 transition-colors text-sm"
							>
								<Instagram className="h-5 w-5" />
								Instagram
							</a>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
					<p>
						© {new Date().getFullYear()} JuegoTenis. Todos los derechos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	)
}

