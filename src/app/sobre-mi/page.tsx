import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, Brain, Heart, Users, BookOpen, Target } from "lucide-react";

export default function SobreMi() {
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sobre Mí
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Conoce mi trayectoria profesional, formación y enfoque terapéutico especializado en psicología clínica y evaluación neuropsicológica.
            </p>
          </div>

          {/* Professional Profile */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
              <div className="md:col-span-1">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto flex items-center justify-center">
                  <Heart className="w-24 h-24 text-blue-600" />
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ps. Patricia Cartagena Chel</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Psicóloga Clínica especializada en evaluación neuropsicológica y test psicológicos especializados. 
                  Con amplia experiencia en el diagnóstico y tratamiento de trastornos del neurodesarrollo, 
                  especialmente en el espectro autista.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Licencia N° 873113</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">La Serena, Chile</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Mi Enfoque Terapéutico</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Trabajo desde el <strong>modelo cognitivo conductual</strong> y la <strong>terapia DBT (Terapia Dialéctica Conductual)</strong>, 
              enfoques basados en evidencia científica que han demostrado alta efectividad en el tratamiento de diversos 
              trastornos psicológicos. Mi práctica se centra en proporcionar herramientas prácticas y estrategias 
              personalizadas que permitan a mis pacientes desarrollar habilidades para manejar sus emociones, 
              pensamientos y comportamientos de manera más efectiva.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <Brain className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Modelo Cognitivo Conductual</h4>
                <p className="text-gray-600 text-sm">
                  Enfoque que examina la relación entre pensamientos, emociones y comportamientos, 
                  proporcionando estrategias prácticas para el cambio positivo.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <Heart className="w-8 h-8 text-green-600 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Terapia DBT</h4>
                <p className="text-gray-600 text-sm">
                  Terapia Dialéctica Conductual que integra técnicas de mindfulness, 
                  regulación emocional y habilidades interpersonales.
                </p>
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Especializaciones</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Brain className="w-5 h-5 text-blue-600 mr-2" />
                  Evaluación Neuropsicológica
                </h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Evaluación integral de funciones cognitivas</li>
                  <li>• Análisis de memoria, atención y funciones ejecutivas</li>
                  <li>• Diagnóstico diferencial de trastornos neurológicos</li>
                  <li>• Informes detallados con recomendaciones</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 text-green-600 mr-2" />
                  Tests Especializados
                </h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• <strong>ADOS-2:</strong> Diagnóstico de espectro autista</li>
                  <li>• <strong>ADI-R:</strong> Entrevista diagnóstica para autismo</li>
                  <li>• <strong>WISC V:</strong> Evaluación de inteligencia en niños</li>
                  <li>• <strong>WAIS IV:</strong> Evaluación de inteligencia en adultos</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="w-5 h-5 text-purple-600 mr-2" />
                Áreas de Tratamiento
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Trastornos del Estado de Ánimo</h5>
                  <ul className="space-y-1">
                    <li>• Depresión</li>
                    <li>• Trastornos bipolares</li>
                    <li>• Depresión post-parto</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Trastornos de Ansiedad</h5>
                  <ul className="space-y-1">
                    <li>• Ansiedad generalizada</li>
                    <li>• Trastorno de pánico</li>
                    <li>• Fobias específicas</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Neurodesarrollo</h5>
                  <ul className="space-y-1">
                    <li>• Trastornos del espectro autista</li>
                    <li>• TDAH</li>
                    <li>• Dificultades de aprendizaje</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Values */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Mi Compromiso Profesional</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Excelencia Profesional</h4>
                <p className="text-gray-600 text-sm">
                  Formación continua y actualización constante en las mejores prácticas 
                  de la psicología clínica y neuropsicología.
                </p>
              </div>
              
              <div className="text-center">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Atención Personalizada</h4>
                <p className="text-gray-600 text-sm">
                  Cada paciente recibe un plan de tratamiento individualizado, 
                  adaptado a sus necesidades específicas y objetivos terapéuticos.
                </p>
              </div>
              
              <div className="text-center">
                <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Práctica Basada en Evidencia</h4>
                <p className="text-gray-600 text-sm">
                  Utilizo únicamente técnicas y tratamientos respaldados por 
                  investigación científica rigurosa y evidencia empírica.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para comenzar tu proceso terapéutico?</h3>
            <p className="text-gray-600 mb-6">
              Estoy aquí para acompañarte en tu camino hacia el bienestar emocional y mental.
            </p>
            <a
              href="https://calendar.app.google/GKpccK9obnPtLCnH8"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <span>Agendar Primera Cita</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

