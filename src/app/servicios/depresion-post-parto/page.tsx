import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ServicePage() {
  const pageTitle = "Servicio Especializado";
  const pageDescription = "Descripción detallada del servicio de psicología clínica.";
  
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{pageTitle}</h1>
            <p className="text-xl text-gray-600">{pageDescription}</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-gray-700 mb-6">Contenido detallado del servicio próximamente.</p>
            <div className="text-center">
              <a href="https://calendar.app.google/GKpccK9obnPtLCnH8" 
                 className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
                Agendar Cita
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
