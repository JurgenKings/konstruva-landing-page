"use client"
import React from "react"
import { motion } from "motion/react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { testimonials } from "@/src/data/testimonials"

function Testimonials(): React.ReactElement {

  return (
    <section id="testimonios" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 testimonial-gradient opacity-50" />
      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center gradient-text mb-16"
        >
          Lo Que Dicen Nuestros Clientes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="gradient-border rounded-lg"
            >
              <Card className="p-8 bg-gray-800/80 backdrop-blur-sm border-0">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16 ring-2 ring-blue-400">
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-xl font-semibold gradient-text">{testimonial.name}</h4>
                    <p className="text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-200">{testimonial.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials