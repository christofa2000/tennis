// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/config/site'
import { MapPin } from 'lucide-react'
import Image from 'next/image'

export function Locations() {
	return (
		<section
			id="sedes"
			className="min-h-screen flex items-center py-8 sm:py-10 md:py-12 bg-white relative overflow-hidden"
		>
			{/* Subtle gradient background */}
			<div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand-500/5 to-transparent pointer-events-none" />
			
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}
					className="mb-6 sm:mb-8 text-center"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 mb-2 tracking-tight">
						NUESTRAS{' '}
						<span className="text-brand-500 text-4xl sm:text-5xl md:text-6xl">
							SEDES
						</span>
					</h2>
					<p className="text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto">
						Dos sedes especialmente diseñadas para mejorar tu rendimiento en cada ejercicio, actividad u objetivo que te propongas.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-5 max-w-6xl mx-auto">
					{[
						siteConfig.locations.caballito,
						siteConfig.locations.nunez,
					].map((location, index) => (
						<motion.div
							key={location.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="group"
						>
							<a
								href={location.mapsUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="block relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
							>
								{/* Image */}
								<div className="aspect-[21/9] sm:aspect-[24/9] lg:aspect-[28/9] relative overflow-hidden bg-neutral-900">
									<Image
										src={location.image}
										alt={`${location.name} - ${location.address}`}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
										sizes="(max-width: 768px) 100vw, 1200px"
									/>
									{/* Dark overlay for text readability */}
									<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-950/50 to-neutral-950/30" />
									
									{/* Content over image */}
									<div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
										<div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
											{/* Small logo */}
											<div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0">
												<Image
													src="/logo/fondo-blanco.jpg"
													alt="JuegoTenis Logo"
													fill
													className="object-contain"
												/>
											</div>
											
											{/* Location name */}
											<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white uppercase tracking-tight">
												{location.name.toUpperCase()}
											</h3>
										</div>
									</div>
									
									{/* Address at bottom */}
									<div className="absolute bottom-3 sm:bottom-4 lg:bottom-5 left-4 sm:left-5 lg:left-6 right-4 sm:right-5 lg:right-6">
										<div className="flex items-center gap-2 text-white/95">
											<MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
											<p className="text-xs sm:text-sm font-medium">
												{location.address}
											</p>
										</div>
									</div>
								</div>
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

