"use client"
import React from "react"
import { motion } from "motion/react"
import { Card } from "@/components/ui/card"
import { features } from "@/src/data/features"

function Features(): React.ReactElement {

  return (
    <section id="caracteristicas" className="py-20 px-6 bg-gray-800/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent" />
      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center gradient-text mb-16"
        >
          Características Clave
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="gradient-border rounded-lg animate-border"
            >
              <Card className="p-6 bg-gray-800/80 border-0 h-full backdrop-blur-sm relative z-10">
                <div className="mb-4 text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-200">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </Card>
              <span />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features