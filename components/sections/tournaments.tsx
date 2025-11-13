// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import Image from "next/image";

export function Tournaments() {
  return (
    <section
      id="torneos"
      className="py-24 sm:py-28 md:py-32 lg:py-36 bg-gradient-to-b from-white via-neutral-50/30 to-white relative overflow-hidden"
    >
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-20"
        >
          <SectionTitle className="text-neutral-950 mb-4">
            Nuestros <span className="text-brand-500">Torneos</span>
          </SectionTitle>
          <p className="text-center text-neutral-600 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            Competí, divertite y crecé en cada partido
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-900 flex items-center justify-center shadow-2xl border border-neutral-100 group"
            >
              <Image
                src="/torneos.png"
                alt="Torneos de tenis amateurs en JuegoTenis"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-neutral-950/20" />
              {/* Trophy icon overlay */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <Trophy className="h-6 w-6 text-brand-500" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 leading-tight">
                  Viví la <span className="text-brand-500">emoción</span> de
                  competir
                </h3>
                <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-medium">
                  En JuegoTenis organizamos torneos amateurs donde cada pelota
                  cuenta, cada punto suma y cada partido es una oportunidad para
                  superarte.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                  Ya sea que busques medirte con otros jugadores, mejorar tu
                  nivel competitivo o simplemente disfrutar del espíritu
                  deportivo, nuestros torneos están diseñados para todos.
                  Categorías por nivel, partidos emocionantes y una comunidad
                  que celebra cada saque, cada volea y cada victoria.
                </p>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                  Formá parte de una experiencia única donde el tenis se
                  convierte en pasión, los rivales en compañeros y cada torneo
                  en un recuerdo inolvidable. 🏆
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
