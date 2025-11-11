// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/config/site'
import { MessageCircle } from 'lucide-react'

export function CTA() {
	return (
		<section className="relative py-24 sm:py-28 md:py-32 lg:py-36 overflow-hidden">
			{/* Gradient background */}
			<div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-600 to-accent-500" />
			{/* Subtle pattern overlay */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px] opacity-20" />
			{/* Animated gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/10 via-transparent to-transparent" />
			
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
					className="max-w-4xl mx-auto text-center"
				>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1.2, delay: 0.2 }}
						className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight tracking-tight"
					>
						Sumate a JuegoTenis y empezá a disfrutar del tenis hoy mismo{' '}
						<span className="inline-block">🎾</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1.2, delay: 0.4 }}
						className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-12 leading-relaxed font-medium"
					>
						Contactanos y reservá tu clase de prueba.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1.2, delay: 0.6 }}
					>
						<Button
							size="lg"
							variant="secondary"
							className="min-w-[300px] text-lg sm:text-xl h-14 sm:h-16 px-8 sm:px-10 group shadow-2xl shadow-neutral-950/30 hover:shadow-neutral-950/40 hover:scale-105 transition-all"
							asChild
						>
							<a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
								<MessageCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:scale-110" />
								Contactar por WhatsApp
							</a>
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}

