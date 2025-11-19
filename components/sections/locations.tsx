// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/lib/config/site'
import { MapPin } from 'lucide-react'
import Image from 'next/image'

export function Locations() {
	const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)

	// Generar URLs de embed de Google Maps usando el formato estándar
	const getMapEmbedUrl = (address: string) => {
		const encodedAddress = encodeURIComponent(address)
		// Formato estándar de Google Maps embed sin API key
		return `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`
	}

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
					transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
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

				<div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-5 max-w-6xl mx-auto relative">
					{[
						siteConfig.locations.nunez,
						siteConfig.locations.caballito,
					].map((location, index) => {
						// Primera card (Núñez) - aparece normalmente
						// Segunda card (Doblas) - sale de dentro de la primera
						const isSecond = index === 1
						const isHovered = hoveredLocation === location.name
						
						return (
						<motion.div
							key={location.name}
							initial={isSecond ? {
								opacity: 0,
								scale: 0.6,
								y: -60,
								x: 0,
							} : {
								opacity: 0,
								y: 30,
							}}
							whileInView={isSecond ? {
								opacity: 1,
								scale: 1,
								y: 0,
								x: 0,
							} : {
								opacity: 1,
								y: 0,
							}}
							viewport={{ once: true, margin: '-50px' }}
							transition={isSecond ? {
								duration: 1.6,
								delay: 1.0,
								ease: [0.16, 1, 0.3, 1],
							} : {
								duration: 1.2,
								delay: 0.2,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="group"
							onMouseEnter={() => setHoveredLocation(location.name)}
							onMouseLeave={() => setHoveredLocation(null)}
						>
							<a
								href={location.mapsUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="block relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
							>
								{/* Image - Hidden on hover */}
								<div className={`aspect-[24/7] sm:aspect-[28/7] lg:aspect-[32/7] relative overflow-hidden bg-neutral-900 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
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
										<div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0 rounded-full overflow-hidden">
											<Image
												src="/logo/logo-blanco.png"
												alt="JuegoTenis Logo"
												fill
												className="object-cover"
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

								{/* Google Maps - Shown on hover */}
								<AnimatePresence>
									{isHovered && (
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											transition={{ duration: 0.4 }}
											className="absolute inset-0 aspect-[24/7] sm:aspect-[28/7] lg:aspect-[32/7]"
										>
											<iframe
												src={getMapEmbedUrl(location.address)}
												width="100%"
												height="100%"
												style={{ border: 0 }}
												allowFullScreen
												loading="lazy"
												referrerPolicy="no-referrer-when-downgrade"
												className="w-full h-full"
												title={`Mapa de ${location.name}`}
											/>
											{/* Overlay with content */}
											<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent pointer-events-none">
												{/* Content over map */}
												<div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
													<div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
														{/* Small logo */}
														<div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0 rounded-full overflow-hidden">
															<Image
																src="/logo/logo-blanco.png"
																alt="JuegoTenis Logo"
																fill
																className="object-cover"
															/>
														</div>
														
														{/* Location name */}
														<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white uppercase tracking-tight drop-shadow-lg">
															{location.name.toUpperCase()}
														</h3>
													</div>
												</div>
												
												{/* Address at bottom */}
												<div className="absolute bottom-3 sm:bottom-4 lg:bottom-5 left-4 sm:left-5 lg:left-6 right-4 sm:right-5 lg:right-6">
													<div className="flex items-center gap-2 text-white/95 drop-shadow-lg">
														<MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
														<p className="text-xs sm:text-sm font-medium">
															{location.address}
														</p>
													</div>
												</div>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</a>
						</motion.div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

