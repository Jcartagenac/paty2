
import Link from "next/link";
import { ArrowLeft, Brain, Clock, CheckCircle } from "lucide-react";

export default function EvaluacionNeuropsicologica() {
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
            <Brain className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Evaluación Neuropsicológica
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Evaluación integral de funciones cognitivas, memoria, atención, funciones ejecutivas y habilidades neuropsicológicas para un diagnóstico preciso y recomendaciones personalizadas.
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Qué es la Evaluación Neuropsicológica?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              La evaluación neuropsicológica es un proceso diagnóstico especializado que examina las funciones cognitivas superiores como la memoria, atención, lenguaje, funciones ejecutivas, habilidades visuoespaciales y velocidad de procesamiento. Esta evaluación permite identificar fortalezas y debilidades cognitivas, establecer diagnósticos precisos y desarrollar planes de intervención personalizados.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Cuándo se recomienda?</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-700">Dificultades de aprendizaje</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-700">Problemas de memoria</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-700">Déficit de atención</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-700">Traumatismo craneoencefálico</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-700">Deterioro cognitivo</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-700">Evaluación pre-quirúrgica</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Proceso de Evaluación</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Entrevista Inicial</h4>
                  <p className="text-gray-600">Recopilación de historia clínica y motivo de consulta</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Aplicación de Tests</h4>
                  <p className="text-gray-600">Batería de pruebas neuropsicológicas especializadas</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Análisis e Interpretación</h4>
                  <p className="text-gray-600">Evaluación detallada de resultados y patrones cognitivos</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Informe y Recomendaciones</h4>
                  <p className="text-gray-600">Entrega de informe detallado con plan de intervención</p>
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
                  <span className="font-semibold text-gray-900">Duración:</span>
                  <span className="text-gray-700 ml-2">2-3 sesiones de 2 horas cada una</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Informe:</span>
                  <span className="text-gray-700 ml-2">Entrega en 7-10 días hábiles</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Seguimiento:</span>
                  <span className="text-gray-700 ml-2">Sesión de devolución incluida</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Modalidad:</span>
                  <span className="text-gray-700 ml-2">Presencial en consulta</span>
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
              <span>Agendar Evaluación</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

