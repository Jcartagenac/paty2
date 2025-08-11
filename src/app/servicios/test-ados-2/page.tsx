
import Link from "next/link";
import { ArrowLeft, Users, Clock, CheckCircle } from "lucide-react";

export default function TestAdos2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Test ADOS-2
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Escala de Observación para el Diagnóstico del Autismo - Segunda Edición. El estándar de oro internacional para la evaluación y diagnóstico de Trastornos del Espectro Autista (TEA).
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Qué es el ADOS-2?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              El ADOS-2 es una evaluación estandarizada y semi-estructurada de la comunicación, interacción social, juego e imaginación, y comportamientos restringidos y repetitivos en personas con sospecha de TEA. Es considerado el estándar de oro mundial para el diagnóstico de autismo y es utilizado por profesionales especializados en todo el mundo.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Características del ADOS-2</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-700">Evaluación observacional directa</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-700">Protocolo estandarizado internacional</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-700">Aplicable desde 12 meses hasta adultos</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-700">Múltiples módulos según nivel de desarrollo</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-700">Evaluación de comunicación social</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-700">Análisis de comportamientos repetitivos</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Cuándo se recomienda el ADOS-2?</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                <span className="text-gray-700">Sospecha de Trastorno del Espectro Autista</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                <span className="text-gray-700">Dificultades en comunicación social</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                <span className="text-gray-700">Comportamientos repetitivos o estereotipados</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                <span className="text-gray-700">Dificultades en interacción social</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                <span className="text-gray-700">Evaluación diagnóstica diferencial</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Módulos ADOS-2</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Módulo Toddler</h4>
                <p className="text-gray-600 text-sm">Para niños de 12-30 meses con palabras simples o sin lenguaje verbal</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Módulo 1</h4>
                <p className="text-gray-600 text-sm">Para niños sin lenguaje verbal o con palabras simples</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Módulo 2</h4>
                <p className="text-gray-600 text-sm">Para niños con lenguaje de frases pero no fluido</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Módulo 3</h4>
                <p className="text-gray-600 text-sm">Para niños y adolescentes con lenguaje fluido</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Módulo 4</h4>
                <p className="text-gray-600 text-sm">Para adolescentes y adultos con lenguaje fluido</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Información Práctica</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">Duración:</span>
                  <span className="text-gray-700 ml-2">45-90 minutos por sesión</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Sesiones:</span>
                  <span className="text-gray-700 ml-2">1-2 sesiones según módulo</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Informe:</span>
                  <span className="text-gray-700 ml-2">Entrega en 7-10 días hábiles</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Modalidad:</span>
                  <span className="text-gray-700 ml-2">Presencial con observación directa</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://calendar.app.google/GKpccK9obnPtLCnH8"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <span>Agendar Evaluación ADOS-2</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

