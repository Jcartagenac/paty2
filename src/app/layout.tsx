import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psicología La Serena | Test Psicológicos La Serena | Patricia Cartagena Chel",
  description: "Psicología La Serena Chile - Test psicológicos especializados: ADOS-2, WISC V, WAIS IV, evaluación neuropsicológica. Patricia Cartagena Chel, psicóloga clínica licencia 873113. Terapia ansiedad, depresión, autismo La Serena.",
  keywords: [
    "psicología la serena",
    "test psicológicos",
    "evaluación neuropsicológica",
    "test ados-2",
    "wisc v",
    "wais iv",
    "terapia ansiedad",
    "tratamiento depresión",
    "patricia cartagena chel",
    "psicóloga clínica",
    "región coquimbo",
    "salud mental",
    "diagnóstico autismo",
    "terapia individual",
    "consulta psicológica",
    "bienestar emocional"
  ].join(", "),
  authors: [{ name: "Patricia Cartagena Chel", url: "https://psicologialaserena.cl" }],
  creator: "Patricia Cartagena Chel - Psicóloga Clínica La Serena",
  publisher: "Chrysalis - Psicología La Serena",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://psicologialaserena.cl",
  },
  openGraph: {
    type: "website",
    url: "https://psicologialaserena.cl/",
    title: "Psicología La Serena | Test Psicológicos | Patricia Cartagena Chel",
    description: "Psicología La Serena Chile - Test psicológicos especializados: ADOS-2, WISC V, WAIS IV, evaluación neuropsicológica. Terapia ansiedad, depresión, autismo. Patricia Cartagena Chel, licencia 873113.",
    images: [
      {
        url: "https://psicologialaserena.cl/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "Psicología La Serena - Patricia Cartagena Chel - Test Psicológicos",
        type: "image/jpeg"
      },
      {
        url: "https://psicologialaserena.cl/patricia-professional.jpg", 
        width: 800,
        height: 600,
        alt: "Patricia Cartagena Chel - Psicóloga Clínica La Serena - Licencia 873113",
        type: "image/jpeg"
      }
    ],
    siteName: "Chrysalis - Psicología La Serena",
    locale: "es_CL"
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicología La Serena | Test Psicológicos | Patricia Cartagena Chel",
    description: "Psicología La Serena Chile - Test psicológicos especializados: ADOS-2, WISC V, WAIS IV, evaluación neuropsicológica. Terapia ansiedad, depresión.",
    images: ["https://psicologialaserena.cl/hero-main.jpg"],
    creator: "@PsicologiaLaSerena"
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  category: "Healthcare",
  classification: "Psychology Services La Serena",
  other: {
    "geo.region": "CL-CO",
    "geo.placename": "La Serena, Región de Coquimbo",
    "geo.position": "-29.9027;-71.2519",
    "ICBM": "-29.9027, -71.2519",
    "DC.title": "Psicología La Serena - Test Psicológicos - Patricia Cartagena Chel",
    "DC.creator": "Patricia Cartagena Chel",
    "DC.subject": "Psicología La Serena, Test Psicológicos, Evaluación Neuropsicológica, ADOS-2, WISC V, WAIS IV, Terapia",
    "DC.description": "Servicios de psicología clínica y test psicológicos especializados en La Serena, Región de Coquimbo, Chile",
    "DC.publisher": "Chrysalis Psicología La Serena",
    "DC.contributor": "Patricia Cartagena Chel - Psicóloga Clínica",
    "DC.date": "2025-01-08",
    "DC.type": "Psychology Service",
    "DC.format": "text/html",
    "DC.identifier": "https://psicologialaserena.cl",
    "DC.language": "es-CL",
    "DC.coverage": "La Serena, Región de Coquimbo, Chile",
    "DC.rights": "Copyright 2025 Chrysalis Psicología La Serena",
    "business.contact_data:locality": "La Serena",
    "business.contact_data:region": "Región de Coquimbo", 
    "business.contact_data:country_name": "Chile",
    "business.contact_data:phone_number": "+56946359143",
    "business.contact_data:email": "contacto@psicologialaserena.cl"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R9P4SXE27J"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R9P4SXE27J');
            `
          }}
        />
        
        <link rel="canonical" href="https://psicologialaserena.cl/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="preconnect" href="https://calendar.google.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Chrysalis - Psicología La Serena",
              "description": "Servicios de psicología clínica, evaluación neuropsicológica y terapia individual en La Serena, Chile",
              "url": "https://psicologialaserena.cl",
              "telephone": "+56946359143",
              "email": "contacto@psicologialaserena.cl",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "La Serena",
                "addressRegion": "Coquimbo",
                "addressCountry": "Chile"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -29.9027,
                "longitude": -71.2519
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",
              "paymentAccepted": ["Fonasa", "Isapre", "Particular"],
              "serviceType": [
                "Evaluación Neuropsicológica",
                "Test ADOS-2",
                "Test ADI-R",
                "WISC V",
                "WAIS IV",
                "Tratamientos Depresivos",
                "Trastornos Ansiosos",
                "Depresión Post Parto",
                "Terapia Individual",
                "Terapia de Pareja"
              ],
              "provider": {
                "@type": "Person",
                "name": "Patricia Cartagena Chel",
                "jobTitle": "Psicóloga Clínica",
                "hasCredential": {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Licencia Profesional",
                  "identifier": "873113"
                }
              },
              "areaServed": {
                "@type": "City",
                "name": "La Serena",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "Región de Coquimbo"
                }
              },
              "sameAs": [
                "https://wa.me/56946359143"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

