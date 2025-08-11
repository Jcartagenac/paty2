import Link from "next/link";
import { ArrowLeft, Heart, Clock, CheckCircle, Brain, Target, Users } from "lucide-react";

export default function TratamientosDepresivos() {
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
            <Heart className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Tratamiento para la Depresión</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Terapia especializada basada en evidencia científica para superar la depresión y recuperar el bienestar emocional. Utilizando enfoques cognitivo-conductuales y terapia DBT.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Enfoque Terapéutico</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Trabajo desde el modelo cognitivo conductual y la terapia DBT (Terapia Dialéctica Conductual), enfoques que han demostrado alta efectividad en el tratamiento de la depresión. Mi objetivo es ayudarte a identificar y modificar patrones de pensamiento negativos, desarrollar habilidades de regulación emocional y construir una vida más plena y significativa.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Síntomas de la Depresión</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-700">Estado de ánimo deprimido persistente</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-700">Pérdida de interés en actividades</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-700">Fatiga y falta de energía</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-700">Problemas de concentración</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-700">Alteraciones del sueño</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-700">Cambios en el apetito</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-700">Sentimientos de culpa o inutilidad</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-700">Pensamientos de muerte o suicidio</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Técnicas Terapéuticas</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Brain className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Terapia Cognitivo Conductual</h4>
                    <p className="text-gray-600 text-sm">
                      Identificación y modificación de pensamientos negativos automáticos, reestructuración cognitiva y desarrollo de estrategias de afrontamiento efectivas.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Terapia DBT</h4>
                    <p className="text-gray-600 text-sm">
                      Habilidades de mindfulness, regulación emocional, tolerancia al malestar y efectividad interpersonal para manejar emociones intensas.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Activación Conductual</h4>
                    <p className="text-gray-600 text-sm">
                      Programación de actividades placenteras y significativas para romper el ciclo de inactividad y mejorar el estado de ánimo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="w-6 h-6 text-green-600" />
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

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Proceso Terapéutico</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Evaluación Inicial</h4>
                  <p className="text-gray-600">Comprensión profunda de tu situación, síntomas y objetivos terapéuticos</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Plan de Tratamiento</h4>
                  <p className="text-gray-600">Diseño de estrategias personalizadas según tus necesidades específicas</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Intervención Activa</h4>
                  <p className="text-gray-600">Aplicación de técnicas terapéuticas y desarrollo de habilidades</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Consolidación</h4>
                  <p className="text-gray-600">Fortalecimiento de logros y prevención de recaídas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para comenzar tu recuperación?</h3>
            <p className="text-gray-600 mb-6">
              La depresión tiene tratamiento efectivo. No tienes que enfrentarla solo/a.
            </p>
            <a href="https://calendar.app.google/GKpccK9obnPtLCnH8" 
               className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              Agendar Primera Sesión
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

