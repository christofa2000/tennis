// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/section-title'
import Image from 'next/image'

export function About() {
	return (
		<section
			id="quienes-somos"
			className="py-24 sm:py-28 md:py-32 lg:py-36 bg-neutral-950 text-white relative overflow-hidden"
		>
			{/* Subtle gradient accent */}
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
			<div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-transparent" />
			
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
					{/* Image */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
						className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-900 flex items-center justify-center shadow-2xl border border-neutral-800"
					>
						<Image
							src="/profe.png"
							alt="Profesor de tenis enseñando en JuegoTenis"
							fill
							className="object-contain object-center"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
						<div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-neutral-950/40" />
					</motion.div>

					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
					>
						<SectionTitle
							align="left"
							className="text-white mb-8 text-left"
						>
							Quiénes <span className="text-brand-500">Somos</span>
						</SectionTitle>
						<div className="space-y-6 text-neutral-200 text-lg sm:text-xl leading-relaxed">
							<p className="text-neutral-100">
								En <span className="text-brand-500 font-bold">JuegoTenis</span> te ayudamos a aprender, disfrutar y compartir el tenis desde el primer día{' '}
								<span className="inline-block">🎾</span>
							</p>
							<p>
								Nuestro equipo diseña clases personalizadas según tu nivel y tus objetivos, combinando técnica, movimiento y diversión.
							</p>
							<p className="text-white font-semibold text-lg sm:text-xl">
								👉 Sumate a JuegoTenis y descubrí una forma diferente de aprender y disfrutar el tenis.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

