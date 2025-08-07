import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psicólogos en La Serena Chile | Patricia Cartagena Chel | Chrysalis Psicología",
  description: "Psicólogos especializados en La Serena Chile. Patricia Cartagena Chel, Licencia 873113. Evaluación neuropsicológica, test ADOS-2, WISC V, WAIS IV, terapia ansiedad y depresión. Agenda tu consulta.",
  keywords: [
    "psicólogos La Serena",
    "psicóloga La Serena Chile", 
    "Patricia Cartagena Chel",
    "evaluación neuropsicológica La Serena",
    "test ADOS-2 La Serena",
    "test WISC V La Serena",
    "test WAIS IV La Serena",
    "terapia ansiedad La Serena",
    "tratamiento depresión La Serena",
    "psicólogo clínico La Serena",
    "consulta psicológica La Serena",
    "salud mental La Serena",
    "terapia individual La Serena",
    "psicología infantil La Serena",
    "diagnóstico autismo La Serena",
    "test ADI-R La Serena",
    "depresión post parto La Serena",
    "psicólogos región Coquimbo",
    "Chrysalis psicología",
    "licencia 873113"
  ].join(", "),
  authors: [{ name: "Patricia Cartagena Chel", url: "https://psicologialaserena.cl" }],
  creator: "Patricia Cartagena Chel",
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
    title: "Psicólogos en La Serena Chile | Patricia Cartagena Chel | Chrysalis",
    description: "Psicólogos especializados en La Serena Chile. Evaluación neuropsicológica, test ADOS-2, WISC V, WAIS IV, terapia para ansiedad y depresión. Patricia Cartagena Chel, Licencia 873113.",
    images: [
      {
        url: "https://psicologialaserena.cl/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "Patricia Cartagena Chel - Psicóloga en La Serena Chile",
        type: "image/jpeg"
      },
      {
        url: "https://psicologialaserena.cl/patricia-professional.jpg", 
        width: 800,
        height: 600,
        alt: "Patricia Cartagena Chel - Psicóloga Clínica Licencia 873113",
        type: "image/jpeg"
      }
    ],
    siteName: "Chrysalis - Psicología La Serena",
    locale: "es_CL"
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogos en La Serena Chile | Patricia Cartagena Chel",
    description: "Psicólogos especializados en La Serena Chile. Evaluación neuropsicológica, test ADOS-2, WISC V, WAIS IV, terapia ansiedad y depresión.",
    images: ["https://psicologialaserena.cl/hero-main.jpg"],
    creator: "@PatriciaCartagenaChel"
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  category: "Healthcare",
  classification: "Psychology Services",
  other: {
    "geo.region": "CL-CO",
    "geo.placename": "La Serena",
    "geo.position": "-29.9027;-71.2519",
    "ICBM": "-29.9027, -71.2519",
    "DC.title": "Psicólogos en La Serena Chile - Patricia Cartagena Chel",
    "DC.creator": "Patricia Cartagena Chel",
    "DC.subject": "Psicología, Evaluación Neuropsicológica, Test ADOS-2, WISC V, WAIS IV, Terapia",
    "DC.description": "Servicios de psicología clínica especializados en La Serena, Chile",
    "DC.publisher": "Chrysalis Psicología",
    "DC.contributor": "Patricia Cartagena Chel",
    "DC.date": "2025-01-08",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://psicologialaserena.cl",
    "DC.language": "es-CL",
    "DC.coverage": "La Serena, Región de Coquimbo, Chile",
    "DC.rights": "Copyright 2025 Chrysalis Psicología"
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
              "email": "ps.patriciacartagenachel@gmail.com",
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

