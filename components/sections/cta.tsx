// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CTA() {
  return (
    <section className="relative py-32 sm:py-40 md:py-48 lg:py-56 overflow-hidden">
      {/* Gradient background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-600 to-accent-500" />
      
      {/* Animated gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-brand-500/10" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:60px_60px] opacity-30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Main heading with logo integration */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-[1.1] tracking-tight"
          >
            <span className="inline-flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
              <span>Sumate a</span>
              <span className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20 flex-shrink-0">
                <Image
                  src="/logo/logo-blanco.png"
                  alt="JuegoTenis"
                  fill
                  className="object-cover p-1.5 sm:p-2"
                  priority
                />
              </span>
              <span>y empezá a disfrutar del tenis hoy mismo</span>
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            Contactanos y reservá tu clase de prueba.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-white/70 text-sm sm:text-base"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              <span>Clases personalizadas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              <span>Profesores certificados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              <span>Dos sedes en CABA</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
