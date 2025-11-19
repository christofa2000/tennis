// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { siteConfig } from "@/lib/config/site";
import { motion } from "framer-motion";
import { Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";

export function Contact() {
  const horarios = "Lunes a Viernes: 9:00 - 21:00 | Sábados: 9:00 - 18:00";

  return (
    <section
      id="contacto"
      className="py-24 sm:py-28 md:py-32 lg:py-36 bg-neutral-950 text-white relative overflow-hidden"
    >
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-20 text-center"
        >
          <SectionTitle className="text-white mb-6">
            Hablemos de tu <span className="text-brand-500">próxima clase</span>
          </SectionTitle>
        </motion.div>

        {/* Main Card Container */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-neutral-900/80 backdrop-blur-xl rounded-[2rem] border border-neutral-800/60 shadow-2xl shadow-neutral-950/50 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
              {/* Left: Image - Balanced size */}
              <div className="hidden lg:block relative aspect-[4/5] lg:aspect-auto lg:h-[600px] overflow-hidden">
                <Image
                  src="/contacto-tenis.png"
                  alt="Jugadora de tenis en acción - JuegoTenis"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 0vw, 45vw"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/8 via-transparent to-neutral-950/30" />
                {/* Edge accent */}
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-500/30 to-transparent" />
              </div>

              {/* Right: Contact Information */}
              <div className="p-10 sm:p-12 lg:p-14 flex flex-col justify-center space-y-8">
                {/* Description Text */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <p className="text-neutral-200 text-base sm:text-lg leading-[1.75] font-normal">
                    El tenis arranca con un mensaje. Escribinos por{" "}
                    <a
                      href={siteConfig.links.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 font-semibold transition-colors duration-200"
                    >
                      WhatsApp
                    </a>{" "}
                    para empezar tus clases y unite a nuestra comunidad en
                    redes. Tu mejor versión te está esperando en la cancha.
                  </p>
                </motion.div>

                {/* Horarios */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-start gap-4 p-5 bg-neutral-800/40 rounded-2xl border border-neutral-700/30 backdrop-blur-sm"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center border border-brand-500/20">
                    <Clock className="h-5 w-5 text-brand-500" />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-medium">
                      {horarios}
                    </p>
                  </div>
                </motion.div>

                {/* WhatsApp - Primary CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="pt-2"
                >
                  <a
                    href={siteConfig.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-3 p-5 bg-gradient-to-br from-green-500 via-green-500 to-green-600 hover:from-green-600 hover:via-green-600 hover:to-green-700 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5 shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 border border-green-400/20"
                  >
                    <MessageCircle className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-white font-semibold text-lg tracking-tight">
                      Escribinos por WhatsApp
                    </span>
                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full" />
                  </a>
                </motion.div>

                {/* Social Media */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="pt-4"
                >
                  <div className="flex items-center justify-around">
                    {/* Instagram */}
                    <a
                      href={siteConfig.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-800/60 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-neutral-700/50 hover:border-transparent shadow-md hover:shadow-lg hover:shadow-purple-500/20"
                      aria-label="Seguinos en Instagram"
                    >
                      <Instagram className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
                    </a>

                    {/* TikTok */}
                    <a
                      href={siteConfig.links.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-800/60 hover:bg-neutral-950 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-neutral-700/50 hover:border-neutral-600 shadow-md hover:shadow-lg hover:shadow-neutral-950/30"
                      aria-label="Seguinos en TikTok"
                    >
                      <svg
                        className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a
                      href={siteConfig.links.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-800/60 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-neutral-700/50 hover:border-blue-500/30 shadow-md hover:shadow-lg hover:shadow-blue-600/20"
                      aria-label="Seguinos en Facebook"
                    >
                      <Facebook className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Image for mobile (shown after content) */}
              <div className="lg:hidden relative aspect-[16/10] mt-10 -mx-10 sm:-mx-12">
                <Image
                  src="/contacto-tenis.png"
                  alt="Jugadora de tenis en acción - JuegoTenis"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
