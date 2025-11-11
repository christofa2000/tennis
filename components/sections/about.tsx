// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/section-title'
import Image from 'next/image'

export function About() {
	return (
		<section
			id="quienes-somos"
			className="py-20 sm:py-24 md:py-32 bg-neutral-950 text-white"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Image */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 flex items-center justify-center"
					>
						<Image
							src="/profe.png"
							alt="Profesor de tenis enseñando en JuegoTenis"
							fill
							className="object-contain object-center"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
						<div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-neutral-950/30" />
					</motion.div>

					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
					>
						<SectionTitle
							align="left"
							className="text-white mb-6 text-left"
						>
							Quiénes <span className="text-brand-500">Somos</span>
						</SectionTitle>
						<div className="space-y-6 text-neutral-200 text-lg leading-relaxed">
							<p>
								En <span className="text-brand-500 font-semibold">JuegoTenis</span> te ayudamos a aprender, disfrutar y compartir el tenis desde el primer día 🎾
							</p>
							<p>
								Nuestro equipo diseña clases personalizadas según tu nivel y tus objetivos, combinando técnica, movimiento y diversión.
							</p>
							<p className="text-white font-medium">
								👉 Sumate a JuegoTenis y descubrí una forma diferente de aprender y disfrutar el tenis.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

