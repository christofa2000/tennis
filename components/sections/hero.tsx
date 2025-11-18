// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="JuegoTenis Hero"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/20 via-neutral-900/10 to-neutral-950/20" />
        {/* Subtle brand gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-500/5 via-transparent to-transparent" />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/20 to-neutral-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              Somos{" "}
              <span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
                JuegoTenis
              </span>{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-neutral-100 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              Clases de tenis dinámicas y divertidas en Buenos Aires.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center items-center"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto min-w-[220px] group shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40"
              asChild
            >
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Anotate acá
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
