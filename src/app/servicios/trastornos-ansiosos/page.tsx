import Link from "next/link";
import { ArrowLeft, Brain, Clock, CheckCircle, Heart, Target, Shield } from "lucide-react";

export default function TrastornosAnsiosos() {
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
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Tratamiento de Trastornos de Ansiedad</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Terapia especializada para superar la ansiedad y recuperar el control de tu vida. Utilizando técnicas cognitivo-conductuales y DBT basadas en evidencia científica.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tipos de Trastornos de Ansiedad</h2>
            <div className="space-y-4 mb-6">
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Trastorno de Ansiedad Generalizada</h4>
                <p className="text-gray-600 text-sm">Preocupación excesiva y persistente sobre múltiples aspectos de la vida</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Trastorno de Pánico</h4>
                <p className="text-gray-600 text-sm">Ataques de pánico recurrentes e inesperados con síntomas físicos intensos</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Fobias Específicas</h4>
                <p className="text-gray-600 text-sm">Miedo intenso e irracional hacia objetos o situaciones específicas</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Ansiedad Social</h4>
                <p className="text-gray-600 text-sm">Miedo intenso a situaciones sociales y al juicio de otros</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Síntomas Comunes</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Síntomas Físicos</h4>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-700">Palpitaciones o taquicardia</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-700">Sudoración excesiva</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-700">Dificultad para respirar</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-700">Tensión muscular</span>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Síntomas Psicológicos</h4>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-700">Preocupación constante</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-700">Pensamientos catastróficos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-700">Evitación de situaciones</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-700">Dificultad de concentración</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Técnicas Terapéuticas</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Brain className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Reestructuración Cognitiva</h4>
                    <p className="text-gray-600 text-sm">
                      Identificación y modificación de pensamientos ansiosos irracionales, desarrollo de pensamientos más realistas y adaptativos.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Exposición Gradual</h4>
                    <p className="text-gray-600 text-sm">
                      Enfrentamiento progresivo y controlado a las situaciones temidas para reducir la ansiedad y aumentar la confianza.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Técnicas de Relajación</h4>
                    <p className="text-gray-600 text-sm">
                      Respiración diafragmática, relajación muscular progresiva y mindfulness para manejar la activación fisiológica.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Habilidades DBT</h4>
                    <p className="text-gray-600 text-sm">
                      Tolerancia al malestar, regulación emocional y mindfulness para manejar crisis de ansiedad de manera efectiva.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Información del Tratamiento</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">Duración sesión:</span>
                  <span className="text-gray-700 ml-2">50-60 minutos</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Frecuencia:</span>
                  <span className="text-gray-700 ml-2">Semanal inicialmente</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Modalidad:</span>
                  <span className="text-gray-700 ml-2">Presencial</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Enfoque:</span>
                  <span className="text-gray-700 ml-2">Cognitivo Conductual + DBT</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿La ansiedad está limitando tu vida?</h3>
            <p className="text-gray-600 mb-6">
              Puedes aprender a manejar la ansiedad y recuperar tu libertad. Estoy aquí para ayudarte.
            </p>
            <a href="https://calendar.app.google/GKpccK9obnPtLCnH8" 
               className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              Agendar Consulta
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

