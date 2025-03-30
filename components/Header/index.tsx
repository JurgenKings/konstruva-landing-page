"use client"
import React from "react"
import { motion } from "motion/react"
import { Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

function Header(): React.ReactElement {

  return (
    <header className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="container mx-auto px-6 py-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold gradient-text">Konstruva</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="hover:text-blue-400 transition-colors">Inicio</a>
            <a href="#caracteristicas" className="hover:text-blue-400 transition-colors">Características</a>
            <a href="#precios" className="hover:text-blue-400 transition-colors">Precios</a>
            <a href="#testimonios" className="hover:text-blue-400 transition-colors">Testimonios</a>
          </nav>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 relative overflow-hidden group shine-effect">
            <span className="relative z-10">Prueba Gratis</span>
            <div className="absolute inset-0 bg-blue-500 transform translate-y-full transition-transform group-hover:translate-y-0"></div>
          </Button>
        </div>
      </motion.div>
    </header>
  )
}

export default Header