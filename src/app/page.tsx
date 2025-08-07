import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Calendar, MessageCircle, Star, CheckCircle, Heart, Brain, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Chrysalis</h1>
                <p className="text-sm text-gray-600">Psicología La Serena</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</Link>
              <Link href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</Link>
              <Link href="#sobre-mi" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre Mí</Link>
              <Link href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <a
                href="tel:+56946359143"
                className="hidden sm:flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+56 9 4635 9143</span>
              </a>
              <a
                href="https://wa.me/56946359143"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Psicóloga en{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    La Serena
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Soy <strong>Patricia Cartagena Chel</strong>, psicóloga clínica especializada en evaluaciones neuropsicológicas y terapia individual. Te acompaño en tu proceso de transformación personal.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendar.google.com/calendar/appointments/AcZssZ2FER6aZNcJ8QnqQOjz5K8XyQrz"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Cita</span>
                </a>
                <a
                  href="#contacto"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contactar</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Licencia N° 873113</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>La Serena, Chile</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/hero-main.jpg"
                  alt="Patricia Cartagena Chel - Psicóloga en La Serena"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Servicios Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrezco una amplia gama de servicios psicológicos especializados para niños, adolescentes y adultos en La Serena.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Evaluación Neuropsicológica",
                description: "Evaluación completa de funciones cognitivas y neurológicas",
                icon: Brain,
                image: "/neuropsicologia.jpg"
              },
              {
                title: "Test ADOS-2",
                description: "Diagnóstico especializado del espectro autista",
                icon: Users,
                image: "/wisc-test.png"
              },
              {
                title: "Test ADI-R",
                description: "Entrevista diagnóstica para autismo",
                icon: MessageCircle,
                image: "/professional-support.webp"
              },
              {
                title: "WISC V",
                description: "Escala de inteligencia para niños",
                icon: Star,
                image: "/wisc-test.png"
              },
              {
                title: "WAIS IV",
                description: "Escala de inteligencia para adultos",
                icon: CheckCircle,
                image: "/professional-support.webp"
              },
              {
                title: "Terapia Individual",
                description: "Tratamiento personalizado para ansiedad, depresión y más",
                icon: Heart,
                image: "/terapia-ansiedad.png"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="relative mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="https://wa.me/56946359143"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center space-x-1"
                >
                  <span>Consultar</span>
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/patricia-professional.jpg"
                alt="Patricia Cartagena Chel - Psicóloga Clínica"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                Patricia Cartagena Chel
              </h2>
              <p className="text-xl text-gray-600">
                Psicóloga Clínica especializada en evaluación neuropsicológica y terapia individual.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Licencia Profesional N° 873113</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Especialista en Evaluaciones Neuropsicológicas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Certificada en Test ADOS-2 y ADI-R</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Experiencia en Terapia Individual</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Mi enfoque se centra en brindar un espacio seguro y profesional donde cada persona pueda 
                explorar sus emociones, desarrollar herramientas de afrontamiento y lograr un bienestar 
                psicológico duradero. Trabajo con niños, adolescentes y adultos en La Serena.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Agenda tu Consulta
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estoy aquí para acompañarte en tu proceso de bienestar. Contáctame para agendar una cita.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">+56 9 4635 9143</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">Mensaje directo</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">ps.patriciacartagenachel@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ubicación</h3>
                    <p className="text-gray-600">La Serena, Región de Coquimbo</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="https://wa.me/56946359143"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Contactar por WhatsApp</span>
                </a>
                <a
                  href="https://calendar.google.com/calendar/appointments/AcZssZ2FER6aZNcJ8QnqQOjz5K8XyQrz"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar en Google Calendar</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Horarios de Atención</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Lunes - Viernes</span>
                  <span className="text-gray-600">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Sábados</span>
                  <span className="text-gray-600">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-900">Domingos</span>
                  <span className="text-gray-600">Cerrado</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Modalidades de Atención</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Consulta presencial</li>
                  <li>• Teleconsulta online</li>
                  <li>• Evaluaciones especializadas</li>
                  <li>• Terapia individual</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Chrysalis</h3>
                  <p className="text-gray-400">Psicología La Serena</p>
                </div>
              </div>
              <p className="text-gray-400">
                Transformando vidas a través de la psicología profesional en La Serena, Chile.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Evaluación Neuropsicológica</li>
                <li>Test ADOS-2 y ADI-R</li>
                <li>WISC V y WAIS IV</li>
                <li>Terapia Individual</li>
                <li>Tratamiento de Ansiedad</li>
                <li>Tratamiento de Depresión</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-400">
                <p>Patricia Cartagena Chel</p>
                <p>Licencia N° 873113</p>
                <p>+56 9 4635 9143</p>
                <p>ps.patriciacartagenachel@gmail.com</p>
                <p>La Serena, Chile</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Chrysalis - Psicología La Serena. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/56946359143"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
