// generated with Cursor + agents.md — reviewed by Christian Oscar Papa


export function Footer() {
	return (
		<footer className="bg-neutral-950 text-white py-16 sm:py-20 relative overflow-hidden">
			{/* Subtle gradient accent */}
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
			
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Copyright */}
				<div className="border-t border-neutral-800 pt-8 text-center">
					<p className="text-neutral-500 text-sm sm:text-base">
						© {new Date().getFullYear()} JuegoTenis. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	)
}

