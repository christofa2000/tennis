// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

'use client'

import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/config/site'
import { cn } from '@/lib/utils'

interface FloatingWhatsAppProps {
	className?: string
}

export function FloatingWhatsApp({ className }: FloatingWhatsAppProps) {
	return (
		<a
			href={siteConfig.links.whatsapp}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				'fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-brand-500 text-white shadow-lg hover:bg-brand-600 active:bg-brand-700 transition-all duration-200 hover:scale-110 active:scale-95 md:hidden',
				className
			)}
			aria-label="Contactar por WhatsApp"
		>
			<MessageCircle className="h-6 w-6" />
		</a>
	)
}

