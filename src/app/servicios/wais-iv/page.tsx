import Link from "next/link";
import { ArrowLeft, Brain, Clock, CheckCircle, Users, Award } from "lucide-react";

export default function WaisIV() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </header>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Brain className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Test WAIS IV</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Escala de Inteligencia de Wechsler para Adultos - Cuarta Edición. La evaluación más completa y confiable de las capacidades cognitivas en adultos de 16 a 90 años.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Qué es el WAIS IV?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              El WAIS IV es la cuarta edición de la Escala de Inteligencia de Wechsler para Adultos, reconocida mundialmente como el instrumento más prestigioso para evaluar la inteligencia en adultos. Proporciona una medida comprensiva del funcionamiento cognitivo a través de cuatro índices principales y un Coeficiente Intelectual Total.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Índices del WAIS IV</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Comprensión Verbal (ICV)</h4>
                <p className="text-gray-600 text-sm">Evalúa el razonamiento verbal, comprensión y conocimiento adquirido</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Razonamiento Perceptual (IRP)</h4>
                <p className="text-gray-600 text-sm">Mide la capacidad de razonamiento fluido y procesamiento visual</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Memoria de Trabajo (IMT)</h4>
                <p className="text-gray-600 text-sm">Evalúa la capacidad de mantener y manipular información en la memoria</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Velocidad de Procesamiento (IVP)</h4>
                <p className="text-gray-600 text-sm">Mide la rapidez y precisión en tareas cognitivas simples</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Cuándo se Recomienda?</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                  <span className="text-gray-700">Evaluación neuropsicológica</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                  <span className="text-gray-700">Orientación vocacional</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                  <span className="text-gray-700">Evaluación de discapacidad</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                  <span className="text-gray-700">Deterioro cognitivo</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                  <span className="text-gray-700">Altas capacidades</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                  <span className="text-gray-700">Evaluación forense</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Información Práctica</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">Edad:</span>
                  <span className="text-gray-700 ml-2">16 años 0 meses a 90 años 11 meses</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Duración:</span>
                  <span className="text-gray-700 ml-2">90-120 minutos</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Modalidad:</span>
                  <span className="text-gray-700 ml-2">Individual y presencial</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Informe:</span>
                  <span className="text-gray-700 ml-2">Entrega en 7-10 días hábiles</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="https://calendar.app.google/GKpccK9obnPtLCnH8" 
               className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              Agendar Evaluación WAIS IV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

