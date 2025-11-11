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
			className="py-20 sm:py-24 md:py-32 bg-white"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}
					className="mb-16"
				>
					<SectionTitle className="text-neutral-950 mb-4">
						Nuestras <span className="text-brand-500">Clases</span>
					</SectionTitle>
					<p className="text-center text-neutral-600 text-lg max-w-2xl mx-auto">
						Ofertas diseñadas para cada nivel y edad
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="group"
						>
							<div className="relative overflow-hidden rounded-2xl bg-neutral-100 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
								{/* Image */}
								<div className="aspect-[16/10] relative overflow-hidden">
									<Image
										src={service.image}
										alt={service.alt}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-110"
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
								</div>

								{/* Content */}
								<div className="p-6 sm:p-8">
									<h3 className="text-2xl font-bold text-neutral-950 mb-4">
										{service.title}
									</h3>
									<p className="text-neutral-600 mb-6 leading-relaxed">
										{service.description}
									</p>
									<Button
										variant="primary"
										className="w-full sm:w-auto"
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

