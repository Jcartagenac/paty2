import Link from "next/link";
import { ArrowLeft, Heart, Clock, CheckCircle, Baby, Users, Shield } from "lucide-react";

export default function DepresionPostParto() {
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
            <Baby className="w-16 h-16 text-pink-600 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Depresión Post-Parto</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Apoyo especializado y comprensivo para madres que experimentan depresión después del parto. Un espacio seguro para sanar y conectar con tu maternidad.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Qué es la Depresión Post-Parto?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              La depresión post-parto es una condición seria que afecta a muchas madres después del nacimiento de su bebé. Va más allá de la tristeza normal del post-parto y puede interferir significativamente con la capacidad de cuidar al bebé y a sí misma. Es importante saber que no es tu culpa y que tiene tratamiento efectivo.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Síntomas de la Depresión Post-Parto</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Síntomas Emocionales</h4>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-1" />
                  <span className="text-gray-700">Tristeza profunda y persistente</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-1" />
                  <span className="text-gray-700">Sentimientos de culpa o inadecuación</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-1" />
                  <span className="text-gray-700">Ansiedad intensa sobre el bebé</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-1" />
                  <span className="text-gray-700">Pérdida de interés en actividades</span>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Síntomas Físicos y Conductuales</h4>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-1" />
                  <span className="text-gray-700">Fatiga extrema</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-1" />
                  <span className="text-gray-700">Problemas para dormir</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-1" />
                  <span className="text-gray-700">Dificultad para concentrarse</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-1" />
                  <span className="text-gray-700">Cambios en el apetito</span>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Heart className="w-5 h-5 text-pink-600 mr-2" />
                Mensaje Importante
              </h3>
              <p className="text-gray-700 text-sm">
                Si estás experimentando estos síntomas, recuerda que no estás sola y que buscar ayuda es un acto de amor hacia ti y tu bebé. La depresión post-parto es tratable y puedes sentirte mejor.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Enfoque Terapéutico Especializado</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Terapia Cognitivo Conductual Perinatal</h4>
                    <p className="text-gray-600 text-sm">
                      Adaptada específicamente para las necesidades de las madres, abordando pensamientos sobre la maternidad, autoestima y vínculos.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Fortalecimiento del Vínculo Madre-Bebé</h4>
                    <p className="text-gray-600 text-sm">
                      Técnicas para mejorar la conexión emocional con tu bebé y desarrollar confianza en tus habilidades maternales.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Habilidades de Autocuidado</h4>
                    <p className="text-gray-600 text-sm">
                      Estrategias prácticas para cuidar tu bienestar emocional y físico mientras cuidas a tu bebé.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Factores de Riesgo</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                  <span className="text-gray-700">Historia previa de depresión</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                  <span className="text-gray-700">Cambios hormonales significativos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                  <span className="text-gray-700">Falta de apoyo social</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                  <span className="text-gray-700">Estrés financiero o de pareja</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                  <span className="text-gray-700">Complicaciones en el parto</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                  <span className="text-gray-700">Bebé con necesidades especiales</span>
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
                  <span className="font-semibold text-gray-900">Flexibilidad:</span>
                  <span className="text-gray-700 ml-2">Horarios adaptados a la maternidad</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Modalidad:</span>
                  <span className="text-gray-700 ml-2">Presencial (puedes traer a tu bebé)</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Enfoque:</span>
                  <span className="text-gray-700 ml-2">Especializado en maternidad</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No estás sola en este camino</h3>
            <p className="text-gray-600 mb-6">
              La maternidad puede ser desafiante. Buscar ayuda es un acto de amor hacia ti y tu bebé.
            </p>
            <a href="https://calendar.app.google/GKpccK9obnPtLCnH8" 
               className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              Agendar Consulta Especializada
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

