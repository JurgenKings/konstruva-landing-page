"use client"
import React from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

function Hero(): React.ReactElement {

  return (
    <section id="inicio" className="pt-32 pb-20 px-6 hero-gradient relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)",
        }}
      />
      <div className="container mx-auto text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gradient-text py-6 text-center text-5xl font-medium font-heading leading-none tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-7xl translate-y-[-1rem] caret-foreground"
        >
          Transforma la Gestión de tus Proyectos de Construcción
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Colabora, planifica y ejecuta con Konstruva, la solución integral para la industria de la construcción.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 relative overflow-hidden group shine-effect">
            <span className="relative z-10">Comienza Ahora</span>
            <div className="absolute inset-0 bg-blue-500 transform translate-y-full transition-transform group-hover:translate-y-0"></div>
          </Button>
          <Button variant="outline" className="text-lg px-8 py-6 border-blue-400 hover:bg-blue-500 hover:text-white bg-transparent">
            Ver Demostración
          </Button>
        </motion.div>

      </div>
      <div className="mx-auto max-w-screen-xl px-4 pt-8 text-center lg:px-12 lg:pt-16">
        <Image
          className="z-1 mx-auto mb-5 rounded-lg border border-blue-400 shadow-xl dark:block dark:border-gray-600 lg:mb-8"
          src="/images/hero-image.png"
          alt="dashboard overview dark"
          priority={true}
          width={1200}
          height={630}
        />
      </div>
    </section>
  )
}

export default Hero