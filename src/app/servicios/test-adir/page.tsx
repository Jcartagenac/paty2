import Link from "next/link";
import { ArrowLeft, Users, Clock, CheckCircle, MessageCircle, Brain, Heart } from "lucide-react";

export default function TestAdir() {
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
            <MessageCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Test ADI-R
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Entrevista para el Diagnóstico del Autismo Revisada. Una entrevista clínica estructurada que proporciona información detallada sobre el desarrollo y comportamiento en personas con sospecha de TEA.
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Qué es el ADI-R?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              El ADI-R (Autism Diagnostic Interview-Revised) es una entrevista clínica semi-estructurada que se realiza con los padres o cuidadores principales de personas con sospecha de Trastorno del Espectro Autista. Esta herramienta diagnóstica se centra en obtener información detallada sobre el desarrollo temprano y los comportamientos actuales, siendo complementaria al ADOS-2 para un diagnóstico integral.
            </p>

            <div className="bg-amber-50 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="w-6 h-6 text-amber-600" />
                <h3 className="text-lg font-semibold text-gray-900">Información Práctica</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">Duración:</span>
                  <span className="text-gray-700 ml-2">2-3 horas</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Participantes:</span>
                  <span className="text-gray-700 ml-2">Padres/cuidadores principales</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Modalidad:</span>
                  <span className="text-gray-700 ml-2">Presencial o virtual</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Informe:</span>
                  <span className="text-gray-700 ml-2">Integrado con evaluación completa</span>
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
              <span>Agendar Evaluación ADI-R</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
