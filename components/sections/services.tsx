// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/section-title'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/config/site'
import Image from 'next/image'

const services = [
	{
		title: 'Clases de tenis para adultos',
		description:
			'Clases diseñadas para adultos de todos los niveles. Mejorá tu técnica, desarrollá tu juego y disfrutá del tenis en un ambiente amigable y profesional.',
		image: '/adultos.png',
		alt: 'Clases de tenis para adultos en JuegoTenis',
	},
	{
		title: 'Clases de niños y adolescentes',
		description:
			'Escuela infantil de tenis con metodología lúdica y adaptada a cada edad. Desarrollamos habilidades técnicas, coordinación y valores deportivos desde temprana edad.',
		image: '/niños.png',
		alt: 'Clases de tenis para niños y adolescentes en JuegoTenis',
	},
]

export function Services() {
	return (
		<section
			id="clases"
			className="py-24 sm:py-28 md:py-32 lg:py-36 bg-gradient-to-b from-white via-neutral-50/30 to-white"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
					className="mb-16 sm:mb-20"
				>
					<SectionTitle className="text-neutral-950 mb-4">
						Nuestras <span className="text-brand-500">Clases</span>
					</SectionTitle>
					<p className="text-center text-neutral-600 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
						Ofertas diseñadas para cada nivel y edad
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ 
								duration: 1.2, 
								delay: index * 0.3,
								ease: [0.16, 1, 0.3, 1]
							}}
							className="group"
						>
							<div className="relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-neutral-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1 border border-neutral-100">
								{/* Image */}
								<div className="aspect-[16/10] relative overflow-hidden bg-neutral-100">
									<Image
										src={service.image}
										alt={service.alt}
										fill
										className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
									{/* Subtle gradient overlay on hover */}
									<div className="absolute inset-0 bg-gradient-to-t from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/5 group-hover:to-transparent transition-all duration-500" />
								</div>

								{/* Content */}
								<div className="p-8 sm:p-10">
									<h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 mb-4 leading-tight">
										{service.title}
									</h3>
									<p className="text-neutral-600 mb-8 leading-relaxed text-base sm:text-lg">
										{service.description}
									</p>
									<Button
										variant="primary"
										className="w-full sm:w-auto group/btn shadow-md hover:shadow-lg hover:shadow-brand-500/30"
										asChild
									>
										<a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
											Reservá tu clase de prueba
										</a>
									</Button>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

