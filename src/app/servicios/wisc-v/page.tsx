import Link from "next/link";
import { ArrowLeft, Brain, Clock, CheckCircle, Target, BookOpen, Award } from "lucide-react";

export default function WiscV() {
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Test WISC V</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Escala de Inteligencia de Wechsler para Niños - Quinta Edición. La herramienta más avanzada para evaluar las capacidades cognitivas en niños y adolescentes de 6 a 16 años.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Qué es el WISC V?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              El WISC V es la quinta edición de la Escala de Inteligencia de Wechsler para Niños, considerada el estándar de oro mundial para la evaluación de la inteligencia en niños y adolescentes. Esta prueba proporciona una medida integral de las capacidades cognitivas, incluyendo el Coeficiente Intelectual Total (CIT) y cinco índices principales.
            </p>

            <div className="bg-green-50 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Información Práctica</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">Edad:</span>
                  <span className="text-gray-700 ml-2">6 años 0 meses a 16 años 11 meses</span>
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
              Agendar Evaluación WISC V
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

