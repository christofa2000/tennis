// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/config/site'
import { MessageCircle } from 'lucide-react'

export function CTA() {
	return (
		<section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-brand-500 via-brand-600 to-accent-500 text-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.8 }}
					className="max-w-3xl mx-auto text-center"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
						Sumate a JuegoTenis y empezá a disfrutar del tenis hoy mismo 🎾
					</h2>
					<p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed">
						Contactanos y reservá tu clase de prueba.
					</p>
					<Button
						size="lg"
						variant="secondary"
						className="min-w-[280px] text-lg group"
						asChild
					>
						<a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
							<MessageCircle className="mr-2 h-5 w-5" />
							Contactar por WhatsApp
						</a>
					</Button>
				</motion.div>
			</div>
		</section>
	)
}

