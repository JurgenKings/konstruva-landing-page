import React from "react"
import { Building2 } from "lucide-react"

function Footer(): React.ReactElement {

  return (
    <footer className="bg-slate-900 py-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold gradient-text">Konstruva</span>
            </div>
            <p className="text-gray-400">
              Transformando la industria de la construcción
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#caracteristicas" className="hover:text-white transition-colors">Características</a></li>
              <li><a href="#precios" className="hover:text-white transition-colors">Precios</a></li>
              <li><a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">
              Legal
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">
              Contacto
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@konstruva.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Konstruva. Todos los derechos reservados.</p>
          <p className="text-center">
            <a
              href="https://jurgenkings.com"
              target="_blank"
              rel="noopener noreferrer"
              className="space-x-2 transition-colors duration-300 text-gray-400 hover:text-white text-sm"
              aria-label="Portafolio de Jurgen Kings"
            >
              <span>
                Página diseñada por Jurgen Kings
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer