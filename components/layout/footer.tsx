// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

import Link from 'next/link'
import { siteConfig } from '@/lib/config/site'
import { Instagram, Facebook } from 'lucide-react'
import Image from 'next/image'

const footerLinks = [
	{ label: 'Clases', href: '#clases' },
	{ label: 'Torneos', href: '#torneos' },
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
						className="inline-block mb-4 hover:opacity-80 transition-opacity"
					>
					<div className="relative w-36 h-36 rounded-full overflow-hidden">
						<Image
							src="/logo/logo-blanco.png"
							alt="JuegoTenis Logo"
							fill
							className="object-cover"
						/>
					</div>
					</Link>
						<p className="text-neutral-200 text-sm sm:text-base leading-relaxed max-w-xs">
							Clases de tenis dinámicas y divertidas en Buenos Aires.
						</p>
					</div>

					{/* Links */}
					<nav aria-label="Enlaces del sitio">
						<h2 className="font-bold text-white mb-6 text-base sm:text-lg">Enlaces</h2>
						<ul className="space-y-3">
							{footerLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="block text-neutral-200 hover:text-brand-500 transition-colors text-sm sm:text-base font-medium min-h-[44px] flex items-center"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* Social & Contact */}
					<nav aria-label="Redes sociales">
						<h2 className="font-bold text-white mb-6 text-base sm:text-lg">Seguinos</h2>
						<ul className="space-y-3">
							<li>
								<a
									href={siteConfig.links.instagram}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Seguinos en Instagram"
									className="block text-neutral-200 hover:text-brand-500 transition-colors text-sm sm:text-base font-medium min-h-[44px] flex items-center gap-3 group"
								>
									<Instagram className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
									Instagram
								</a>
							</li>
							<li>
								<a
									href={siteConfig.links.tiktok}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Seguinos en TikTok"
									className="block text-neutral-200 hover:text-brand-500 transition-colors text-sm sm:text-base font-medium min-h-[44px] flex items-center gap-3 group"
								>
									<svg
										className="h-5 w-5 transition-transform group-hover:scale-110"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
									</svg>
									TikTok
								</a>
							</li>
							<li>
								<a
									href={siteConfig.links.facebook}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Seguinos en Facebook"
									className="block text-neutral-200 hover:text-brand-500 transition-colors text-sm sm:text-base font-medium min-h-[44px] flex items-center gap-3 group"
								>
									<Facebook className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
									Facebook
								</a>
							</li>
						</ul>
					</nav>
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

