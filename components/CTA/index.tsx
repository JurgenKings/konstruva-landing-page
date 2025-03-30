"use client"
import React from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"

function CTA(): React.ReactElement {

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            ¿Listo para llevar tus proyectos al siguiente nivel?
          </h2>
          <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 relative overflow-hidden group shine-effect">
            <span className="relative z-10">Comienza tu Prueba Gratis</span>
            <div className="absolute inset-0 bg-blue-500 transform translate-y-full transition-transform group-hover:translate-y-0"></div>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA