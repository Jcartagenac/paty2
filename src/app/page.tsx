"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Calendar, MessageCircle, Star, CheckCircle, Heart, Brain, Users, Award, Target, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Home() {
  // Función para compartir en redes sociales
  const shareUrl = "https://psicologialaserena.cl";
  const shareTitle = "Psicólogos en La Serena Chile - Patricia Cartagena Chel";
  const shareDescription = "Psicóloga clínica especializada en evaluaciones neuropsicológicas, test ADOS-2, WISC V, WAIS IV en La Serena, Chile.";

  const socialShares = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareTitle + " - " + shareDescription)}`,
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle + " - " + shareDescription)}&hashtags=PsicologiaLaSerena,PatriciaCartagena,SaludMental`,
      color: "bg-sky-500 hover:bg-sky-600"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}&summary=${encodeURIComponent(shareDescription)}`,
      color: "bg-blue-700 hover:bg-blue-800"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(shareTitle + " - " + shareDescription + " " + shareUrl)}`,
      color: "bg-green-500 hover:bg-green-600"
    }
  ];

  const services = [
    {
      title: 'Evaluación Neuropsicológica',
      description: 'Evaluación integral de funciones cognitivas, memoria, atención, funciones ejecutivas y habilidades neuropsicológicas.',
      icon: Brain,
      image: "/neuropsicologia.jpg",
      duration: '2-3 sesiones',
      features: [
        'Evaluación de memoria y atención',
        'Análisis de funciones ejecutivas',
        'Informe detallado con recomendaciones',
        'Seguimiento post-evaluación'
      ]
    },
    {
      title: 'Test ADOS-2',
      description: 'Escala de Observación para el Diagnóstico del Autismo, herramienta gold standard para evaluación de TEA.',
      icon: Users,
      image: "/ados-2-test.jpg",
      duration: '1-2 sesiones',
      features: [
        'Evaluación especializada para TEA',
        'Protocolo internacional reconocido',
        'Informe diagnóstico completo',
        'Orientación familiar'
      ]
    },
    {
      title: 'Test ADI-R',
      description: 'Entrevista para el Diagnóstico del Autismo Revisada, evaluación comprehensiva del desarrollo y comportamiento.',
      icon: MessageCircle,
      image: "/professional-support.webp",
      duration: '1 sesión',
      features: [
        'Entrevista estructurada con padres',
        'Evaluación del desarrollo temprano',
        'Análisis de patrones de comportamiento',
        'Complemento ideal para ADOS-2'
      ]
    },
    {
      title: 'WISC V',
      description: 'Escala de Inteligencia de Wechsler para Niños, evaluación completa de capacidades cognitivas en niños y adolescentes.',
      icon: Star,
      image: "/wisc-test.png",
      duration: '2 sesiones',
      features: [
        'Evaluación de CI y capacidades cognitivas',
        'Análisis de fortalezas y debilidades',
        'Recomendaciones educativas',
        'Informe psicoeducativo detallado'
      ]
    },
    {
      title: 'WAIS IV',
      description: 'Escala de Inteligencia de Wechsler para Adultos, evaluación comprehensiva de capacidades intelectuales en adultos.',
      icon: Target,
      image: "/professional-support.webp",
      duration: '2 sesiones',
      features: [
        'Evaluación de inteligencia en adultos',
        'Análisis de capacidades cognitivas',
        'Orientación vocacional y laboral',
        'Informe psicológico completo'
      ]
    },
    {
      title: 'Tratamientos Depresivos',
      description: 'Terapia especializada para el manejo y superación de episodios depresivos y trastornos del estado de ánimo.',
      icon: Heart,
      image: "/terapia-ansiedad.png",
      duration: 'Variable',
      features: [
        'Terapia cognitivo-conductual',
        'Técnicas de activación conductual',
        'Manejo de pensamientos negativos',
        'Plan de prevención de recaídas'
      ]
    },
    {
      title: 'Trastornos Ansiosos',
      description: 'Tratamiento integral para ansiedad generalizada, fobias, ataques de pánico y otros trastornos ansiosos.',
      icon: Users,
      image: "/terapia-ansiedad.png",
      duration: 'Variable',
      features: [
        'Técnicas de relajación y respiración',
        'Terapia de exposición gradual',
        'Reestructuración cognitiva',
        'Herramientas de autocontrol'
      ]
    },
    {
      title: 'Depresión Post Parto',
      description: 'Apoyo especializado para madres que experimentan depresión durante el período perinatal y postparto.',
      icon: Heart,
      image: "/consultorio-ambiente.webp",
      duration: 'Variable',
      features: [
        'Apoyo emocional especializado',
        'Técnicas de vinculación madre-bebé',
        'Manejo del estrés parental',
        'Orientación familiar'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      text: 'Patricia me ayudó a superar mi ansiedad con un enfoque muy profesional y empático. Recomiendo totalmente sus servicios.',
      rating: 5
    },
    {
      name: 'Carlos Mendoza',
      text: 'La evaluación neuropsicológica fue muy completa. Patricia explicó todo el proceso de manera clara y comprensible.',
      rating: 5
    },
    {
      name: 'Ana Rodríguez',
      text: 'Excelente atención para mi hijo. Los test WISC fueron realizados con mucha paciencia y profesionalismo.',
      rating: 5
    }
  ];

  const stats = [
    { number: '★★★★★', label: 'Clientes Satisfechos' },
    { number: '✓', label: 'Experiencia Comprobada en el Área' },
    { number: '15+', label: 'Tipos de Evaluaciones' },
    { number: '98%', label: 'Satisfacción del Cliente' }
  ];

  const additionalServices = [
    'Terapia Individual para Adultos',
    'Terapia de Pareja',
    'Terapia Familiar',
    'Orientación Vocacional',
    'Evaluación de Discapacidad Intelectual',
    'Informes Psicológicos Legales',
    'Consultoría Educacional',
    'Talleres de Bienestar Mental'
  ];

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
              <Link href="#testimonios" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonios</Link>
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
      <section id="inicio" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="block">Psicología La Serena</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Test Psicológicos Especializados
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Patricia Cartagena Chel, psicóloga clínica especializada en evaluación neuropsicológica y test psicológicos en La Serena, Chile. 
                  Ofrecemos servicios de test ADOS-2, WISC V, WAIS IV, ADI-R y terapia especializada para ansiedad, depresión y trastornos del espectro autista.
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
                  href="#servicios"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Ver Servicios</span>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Licencia N° 873113</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Atención Personalizada</span>
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
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Share Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <Share2 className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Comparte nuestros servicios:</span>
            </div>
            <div className="flex items-center space-x-3">
              {socialShares.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-white p-2 rounded-full transition-colors duration-200 hover:scale-105 transform`}
                  aria-label={`Compartir en ${social.name}`}
                  title={`Compartir en ${social.name}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Centro de Psicología Especializada
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
              <p>
                Nuestro centro ofrece servicios integrales de psicología clínica en La Serena, 
                especializándonos en evaluación neuropsicológica y test psicológicos para todas las edades. 
                Con Patricia Cartagena Chel, psicóloga clínica con licencia profesional N° 873113, 
                brindamos atención personalizada en la Región de Coquimbo.
              </p>
              <p>
                Nos especializamos en evaluaciones diagnósticas como test ADOS-2 para trastornos del espectro autista, 
                WISC V y WAIS IV para evaluación de inteligencia, además de ofrecer terapia especializada 
                para ansiedad, depresión y trastornos del estado de ánimo. También proporcionamos 
                apoyo especializado para depresión post parto y terapia familiar.
              </p>
              <p>
                Trabajamos tanto en modalidad presencial como por teleconsulta, adaptándonos a las necesidades 
                de cada paciente. Nuestro enfoque se centra en brindar herramientas efectivas para el bienestar 
                emocional y el desarrollo personal de nuestros pacientes.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Evaluaciones Especializadas</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Test ADOS-2 para diagnóstico de autismo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>WISC V para evaluación infantil</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>WAIS IV para evaluación de adultos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Evaluación neuropsicológica completa</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Terapia Psicológica</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Tratamiento para trastornos de ansiedad</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Terapia para episodios depresivos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Apoyo en depresión post parto</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Terapia individual y familiar</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Modalidades de Atención</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Consulta presencial en La Serena</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Teleconsulta online</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Horarios flexibles</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Atención personalizada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="sobre-mi" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                  Patricia Cartagena Chel
                </h2>
                <p className="text-xl text-blue-600 font-semibold">
                  Psicóloga Clínica Especializada
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Con experiencia comprobada en psicología clínica y evaluación neuropsicológica, 
                  me especializo en brindar atención integral y personalizada. Mi enfoque se centra en 
                  crear un ambiente seguro y acogedor donde cada persona pueda explorar y desarrollar 
                  su potencial.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Licencia Profesional N° 873113</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Especialista en Evaluación Neuropsicológica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Enfoque Humanista y Empático</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Certificada en Test ADOS-2 y ADI-R</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Mi enfoque se centra en brindar un espacio seguro y profesional donde cada persona pueda 
                explorar sus emociones, desarrollar herramientas de afrontamiento y lograr un bienestar 
                psicológico duradero. Trabajo con niños, adolescentes y adultos en La Serena.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/patricia-professional.jpg"
                alt="Patricia Cartagena Chel - Psicóloga Clínica"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
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
            {services.slice(0, 6).map((service, index) => (
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
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1 text-sm text-gray-700">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 2).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
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

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Servicios Adicionales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {service}
                  </h4>
                  <a
                    href="https://wa.me/56946359143"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Consultar
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-xl text-gray-600">
              Testimonios reales de personas que han encontrado bienestar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl p-6 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
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

              <div className="mt-8 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Formas de Pago</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fonasa</li>
                  <li>• Isapre</li>
                  <li>• Particular</li>
                  <li>• Transferencia bancaria</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              ¿Listo para comenzar tu proceso de bienestar?
            </h2>
            <p className="text-xl text-blue-100">
              Agenda tu primera consulta y da el primer paso hacia una vida más plena
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendar.google.com/calendar/appointments/AcZssZ2FER6aZNcJ8QnqQOjz5K8XyQrz"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Cita Online</span>
              </a>
              <a
                href="tel:+56946359143"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Llamar Ahora</span>
              </a>
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

      {/* Social Share Float Button - Mobile */}
      <div className="fixed bottom-6 left-6 z-50 md:hidden">
        <div className="group">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200"
            onClick={() => {
              const shareMenu = document.getElementById('mobile-share-menu');
              shareMenu?.classList.toggle('hidden');
            }}
            aria-label="Compartir en redes sociales"
          >
            <Share2 className="w-5 h-5" />
          </button>
          
          <div id="mobile-share-menu" className="hidden absolute bottom-16 left-0 bg-white rounded-lg shadow-xl p-2 space-y-2 min-w-[200px]">
            <div className="text-sm font-medium text-gray-700 px-3 py-2 border-b">
              Compartir en:
            </div>
            {socialShares.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => {
                  const shareMenu = document.getElementById('mobile-share-menu');
                  shareMenu?.classList.add('hidden');
                }}
              >
                <social.icon className="w-4 h-4" />
                <span className="text-sm">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

