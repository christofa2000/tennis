// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline'
	size?: 'sm' | 'md' | 'lg'
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant = 'primary',
			size = 'md',
			asChild = false,
			...props
		},
		ref
	) => {
		const baseStyles =
			'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

		const variants = {
			primary:
				'bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 shadow-lg hover:shadow-xl',
			secondary:
				'bg-neutral-950 text-white hover:bg-neutral-900 active:bg-neutral-800',
			outline:
				'border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white active:bg-brand-600',
		}

		const sizes = {
			sm: 'min-h-[44px] h-11 px-5 text-sm',
			md: 'min-h-[44px] h-12 px-6 text-base',
			lg: 'min-h-[44px] h-14 px-8 text-lg',
		}

		return (
			<button
				ref={ref}
				className={cn(
					baseStyles,
					variants[variant],
					sizes[size],
					className
				)}
				{...props}
			/>
		)
	}
)

Button.displayName = 'Button'

export { Button }

