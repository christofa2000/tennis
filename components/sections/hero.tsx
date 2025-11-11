// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/config/site'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/70 to-neutral-950/90 z-10" />
				{/* Placeholder for tennis image - replace with actual image */}
				<div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900" />
			</div>

			{/* Content */}
			<div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
					>
						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
							Somos{' '}
							<span className="text-brand-500">JuegoTenis</span>{' '}
							🎾
						</h1>
						<p className="text-lg sm:text-xl md:text-2xl text-neutral-200 mb-8 max-w-2xl mx-auto leading-relaxed">
							Clases de tenis dinámicas y divertidas en Buenos
							Aires.
						</p>
						<p className="text-base sm:text-lg text-neutral-300 mb-12 max-w-xl mx-auto">
							Entrena en Caballito o Núñez con profesores
							profesionales, en grupos reducidos y con una
							metodología que combina técnica, táctica y
							diversión.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
					>
						<Button
							size="lg"
							className="w-full sm:w-auto min-w-[200px] group"
							asChild
						>
							<a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
								Anotate acá
								<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
							</a>
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="w-full sm:w-auto min-w-[200px] border-white text-white hover:bg-white hover:text-neutral-950"
							asChild
						>
							<a href="#quienes-somos">
								Hablemos
								<ArrowRight className="ml-2 h-5 w-5" />
							</a>
						</Button>
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 0.5 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
					className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
				>
					<motion.div
						animate={{ y: [0, 12, 0] }}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
						className="w-1.5 h-1.5 bg-white rounded-full mt-2"
					/>
				</motion.div>
			</motion.div>
		</section>
	)
}

