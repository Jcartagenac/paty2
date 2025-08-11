import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, MapPin, Calendar, MessageCircle, Clock } from "lucide-react";

export default function Contacto() {
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
              Contacto
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Estoy aquí para ayudarte. Contáctame para agendar tu cita o resolver cualquier consulta sobre los servicios de psicología clínica.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">+56 9 4635 9143</p>
                    <a href="tel:+56946359143" className="text-blue-600 hover:text-blue-700 text-sm">
                      Llamar ahora
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contacto@psicologialaserena.cl</p>
                    <a href="mailto:contacto@psicologialaserena.cl" className="text-blue-600 hover:text-blue-700 text-sm">
                      Enviar email
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Dirección</h3>
                    <p className="text-gray-600">Amunátegui 785, oficina 204</p>
                    <p className="text-gray-600">La Serena, Región de Coquimbo</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">+56 9 4635 9143</p>
                    <a 
                      href="https://wa.me/56946359143" 
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors inline-flex items-center space-x-2 mt-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Escribir por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Horarios de Atención</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-4">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Lunes a Viernes</h3>
                    <p className="text-gray-600">09:00 - 18:00 hrs</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Sábados</h3>
                    <p className="text-gray-600">09:00 - 13:00 hrs</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Domingos</h3>
                    <p className="text-gray-600">Cerrado</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Modalidades de Atención</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Atención presencial en consulta</li>
                  <li>• Evaluaciones neuropsicológicas</li>
                  <li>• Tests especializados (ADOS-2, WISC V, WAIS IV)</li>
                  <li>• Terapia individual</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Calendar Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Agenda tu Cita</h2>
            <p className="text-gray-600 text-center mb-6">
              Utiliza el calendario a continuación para agendar tu cita de manera rápida y sencilla.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3wuL23eO3Yp7WB9DaWWaJLGnzOI_aDomoMS9W0j6OYGbg9QCr8teKYIneTlncp9aaf7HaPlq4X?gv=true" 
                style={{border: 0}} 
                width="100%" 
                height="600" 
                frameBorder="0"
                className="rounded-lg"
              ></iframe>
            </div>

            <div className="text-center">
              <a
                href="https://calendar.app.google/GKpccK9obnPtLCnH8"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar en Google Calendar</span>
              </a>
            </div>
          </div>

          {/* Professional Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ps. Patricia Cartagena Chel</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Información Profesional</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Licencia:</strong> N° 873113</li>
                  <li><strong>Especialidad:</strong> Psicología Clínica</li>
                  <li><strong>Enfoque:</strong> Modelo Cognitivo Conductual y Terapia DBT</li>
                  <li><strong>Experiencia:</strong> Evaluación neuropsicológica y test especializados</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Servicios Principales</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Evaluación Neuropsicológica</li>
                  <li>• Test ADOS-2 y ADI-R</li>
                  <li>• WISC V y WAIS IV</li>
                  <li>• Terapia para ansiedad y depresión</li>
                  <li>• Trastornos del espectro autista</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

