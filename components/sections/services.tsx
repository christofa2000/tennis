// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle } from '@/components/ui/section-title'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/config/site'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'

const services = [
	{
		title: 'Clases de tenis para adultos',
		description:
			'Clases diseñadas para adultos de todos los niveles. Mejorá tu técnica, desarrollá tu juego y disfrutá del tenis en un ambiente amigable y profesional.',
		image: '/adultos.png',
		alt: 'Clases de tenis para adultos en JuegoTenis',
		type: 'adultos',
	},
	{
		title: 'Clases de niños y adolescentes',
		description:
			'Escuela infantil de tenis con una metodología lúdica y adaptada a cada edad. Utilizamos el método "Play and Stay", que ajusta pelota y cancha según el desarrollo del niño, permitiendo aprender técnica, coordinación y valores deportivos desde temprana edad de forma progresiva y divertida.',
		image: '/niños.png',
		alt: 'Clases de tenis para niños y adolescentes en JuegoTenis',
		type: 'infantil',
	},
]

export function Services() {
	const [openModalidades, setOpenModalidades] = useState(false)
	const [openNiveles, setOpenNiveles] = useState(false)
	const [openCanchas, setOpenCanchas] = useState(false)

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

									{/* Contenido específico para adultos */}
									{service.type === 'adultos' && (
										<div className="space-y-4 mb-8">
											{/* Botón Modalidades */}
											<button
												onClick={() => setOpenModalidades(!openModalidades)}
												className="w-full flex items-center justify-between p-4 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
												aria-expanded={openModalidades}
											>
												<span className="font-semibold text-neutral-950">🟠 Elegí la modalidad que mejor se adapte a tu nivel y a tus objetivos</span>
												{openModalidades ? (
													<ChevronUp className="h-5 w-5 text-neutral-600 flex-shrink-0 ml-2" />
												) : (
													<ChevronDown className="h-5 w-5 text-neutral-600 flex-shrink-0 ml-2" />
												)}
											</button>

											<AnimatePresence>
												{openModalidades && (
													<motion.div
														initial={{ opacity: 0, height: 0 }}
														animate={{ opacity: 1, height: 'auto' }}
														exit={{ opacity: 0, height: 0 }}
														transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
														className="overflow-hidden"
													>
														<div className="space-y-4 pt-2 pb-4">
															<div className="p-4 bg-neutral-50 rounded-lg">
																<h4 className="font-semibold text-neutral-950 mb-2">Clases individuales</h4>
																<p className="text-neutral-700 text-sm leading-relaxed">
																	Entrenamientos personalizados, orientados a tu nivel y tus objetivos. Perfectas para quienes buscan avanzar rápido, perfeccionar técnica específica o retomar el deporte después de un tiempo.
																</p>
															</div>
															<div className="p-4 bg-neutral-50 rounded-lg">
																<h4 className="font-semibold text-neutral-950 mb-2">Grupos reducidos de 4 personas</h4>
																<p className="text-neutral-700 text-sm leading-relaxed">
																	Ideales tanto para quienes quieren iniciarse en el deporte como para quienes buscan mejorar su juego.
																</p>
															</div>
														</div>
													</motion.div>
												)}
											</AnimatePresence>

											{/* Botón Niveles */}
											<button
												onClick={() => setOpenNiveles(!openNiveles)}
												className="w-full flex items-center justify-between p-4 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
												aria-expanded={openNiveles}
											>
												<span className="font-semibold text-neutral-950">Niveles</span>
												{openNiveles ? (
													<ChevronUp className="h-5 w-5 text-neutral-600" />
												) : (
													<ChevronDown className="h-5 w-5 text-neutral-600" />
												)}
											</button>

											<AnimatePresence>
												{openNiveles && (
													<motion.div
														initial={{ opacity: 0, height: 0 }}
														animate={{ opacity: 1, height: 'auto' }}
														exit={{ opacity: 0, height: 0 }}
														transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
														className="overflow-hidden"
													>
														<div className="pt-2 pb-4">
															<div className="p-4 bg-neutral-50 rounded-lg">
																<p className="font-semibold text-neutral-950 mb-3">Niveles disponibles:</p>
																<ul className="space-y-2 text-neutral-700 text-sm">
																	<li>• Inicial</li>
																	<li>• Inicial con experiencia</li>
																	<li>• Intermedio</li>
																	<li>• Avanzado</li>
																</ul>
															</div>
														</div>
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									)}

									{/* Contenido específico para infantil */}
									{service.type === 'infantil' && (
										<div className="mb-8">
											<button
												onClick={() => setOpenCanchas(!openCanchas)}
												className="w-full flex items-center justify-between p-4 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
												aria-expanded={openCanchas}
											>
												<span className="font-semibold text-neutral-950">🟠 Canchas del método Play and Stay</span>
												{openCanchas ? (
													<ChevronUp className="h-5 w-5 text-neutral-600" />
												) : (
													<ChevronDown className="h-5 w-5 text-neutral-600" />
												)}
											</button>

											<AnimatePresence>
												{openCanchas && (
													<motion.div
														initial={{ opacity: 0, height: 0 }}
														animate={{ opacity: 1, height: 'auto' }}
														exit={{ opacity: 0, height: 0 }}
														transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
														className="overflow-hidden"
													>
														<div className="pt-4 pb-4">
															<h4 className="font-semibold text-neutral-950 mb-4">Canchas que utilizamos</h4>
															<div className="space-y-4">
																<div className="p-4 bg-neutral-50 rounded-lg">
																	<h5 className="font-semibold text-neutral-950 mb-2">• Cancha Roja</h5>
																	<p className="text-neutral-700 text-sm leading-relaxed">
																		Para los primeros pasos. Pelota más lenta y espacio reducido para que los chicos aprendan control, coordinación y los golpes básicos sin frustración.
																	</p>
																</div>
																<div className="p-4 bg-neutral-50 rounded-lg">
																	<h5 className="font-semibold text-neutral-950 mb-2">• Cancha Naranja</h5>
																	<p className="text-neutral-700 text-sm leading-relaxed">
																		Para niños con experiencia inicial. La cancha se amplía y permite trabajar desplazamientos, consistencia y confianza en los peloteos.
																	</p>
																</div>
																<div className="p-4 bg-neutral-50 rounded-lg">
																	<h5 className="font-semibold text-neutral-950 mb-2">• Cancha Verde</h5>
																	<p className="text-neutral-700 text-sm leading-relaxed">
																		Para quienes ya tienen buen dominio técnico. Pelota con más rebote para desarrollar ritmo, precisión y comprensión del juego.
																	</p>
																</div>
																<div className="p-4 bg-neutral-50 rounded-lg">
																	<h5 className="font-semibold text-neutral-950 mb-2">• Cancha Amarilla</h5>
																	<p className="text-neutral-700 text-sm leading-relaxed">
																		Cancha completa con pelota tradicional. Ideal para chicos avanzados que ya entrenan táctica, potencia y situaciones reales de partido.
																	</p>
																</div>
															</div>
														</div>
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									)}

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

