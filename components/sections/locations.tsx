// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/section-title'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/config/site'
import { MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export function Locations() {
	return (
		<section
			id="sedes"
			className="py-20 sm:py-24 md:py-32 bg-white"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center"
				>
					<SectionTitle className="text-neutral-950 mb-4">
						Nuestras <span className="text-brand-500">Sedes</span>
					</SectionTitle>
					<p className="text-neutral-600 text-lg max-w-2xl mx-auto">
						Encontranos en dos ubicaciones estratégicas en Buenos Aires
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
					{Object.values(siteConfig.locations).map((location, index) => (
						<motion.div
							key={location.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="group"
						>
							<div className="relative overflow-hidden rounded-2xl bg-neutral-50 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
								{/* Image */}
								<div className="aspect-[16/10] relative overflow-hidden">
									<Image
										src={location.image}
										alt={`${location.name} - ${location.address}`}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-110"
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
								</div>

								{/* Content */}
								<div className="p-6 sm:p-8">
									<h3 className="text-2xl font-bold text-neutral-950 mb-3">
										{location.name}
									</h3>
									<div className="flex items-start gap-3 text-neutral-600 mb-6">
										<MapPin className="h-5 w-5 text-brand-500 mt-0.5 flex-shrink-0" />
										<p className="leading-relaxed">{location.address}</p>
									</div>
									<Button
										variant="outline"
										className="w-full sm:w-auto"
										asChild
									>
										<a
											href={location.mapsUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											Ver ubicación
											<ExternalLink className="ml-2 h-4 w-4" />
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

