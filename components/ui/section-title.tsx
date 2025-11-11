// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
	children: React.ReactNode
	className?: string
	align?: 'left' | 'center' | 'right'
}

export function SectionTitle({
	children,
	className,
	align = 'center',
}: SectionTitleProps) {
	const alignClasses = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right',
	}

	return (
		<motion.h2
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className={cn(
				'text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl',
				alignClasses[align],
				className
			)}
		>
			{children}
		</motion.h2>
	)
}

