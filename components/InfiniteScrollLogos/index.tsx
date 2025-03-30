"use client"
import React from "react"
import { motion } from "motion/react"
import { companies } from "@/src/data/companies"

function InfinityScrollLogos(): React.ReactElement {
  
  return (
    <section className="py-16 bg-gray-800/50 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10" />
      <div className="container mx-auto mb-8 relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center gradient-text mb-12"
        >
          Empresas que Confían en Konstruva
        </motion.h2>
      </div>
      <div className="relative">
        <motion.div
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex space-x-12 whitespace-nowrap"
        >
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-700/30 rounded-lg backdrop-blur-sm"
            >
              <span className="text-xl font-semibold text-gray-300">{company}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default InfinityScrollLogos