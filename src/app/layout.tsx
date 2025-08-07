import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psicóloga en La Serena Chile | Patricia Cartagena Chel | Chrysalis",
  description: "Psicóloga clínica especializada en La Serena, Chile. Evaluaciones neuropsicológicas, test ADOS-2, WISC V, WAIS IV, terapia para ansiedad y depresión. Licencia N° 873113. Agenda tu consulta.",
  keywords: "psicólogo La Serena, psicóloga La Serena Chile, evaluación neuropsicológica La Serena, test ADOS-2, WISC V, WAIS IV, terapia ansiedad La Serena, depresión La Serena, Patricia Cartagena Chel",
  authors: [{ name: "Patricia Cartagena Chel" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://psicologialaserena.cl/",
    title: "Psicóloga en La Serena Chile | Patricia Cartagena Chel | Chrysalis",
    description: "Psicóloga clínica especializada en La Serena, Chile. Evaluaciones neuropsicológicas, test ADOS-2, WISC V, WAIS IV, terapia para ansiedad y depresión. Licencia N° 873113.",
    images: [
      {
        url: "https://psicologialaserena.cl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chrysalis - Psicología La Serena"
      }
    ],
    siteName: "Chrysalis - Psicología La Serena",
    locale: "es_CL"
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicóloga en La Serena Chile | Patricia Cartagena Chel | Chrysalis",
    description: "Psicóloga clínica especializada en La Serena, Chile. Evaluaciones neuropsicológicas, test ADOS-2, WISC V, WAIS IV, terapia para ansiedad y depresión.",
    images: ["https://psicologialaserena.cl/og-image.jpg"]
  },
  other: {
    "geo.region": "CL-CO",
    "geo.placename": "La Serena",
    "geo.position": "-29.9027;-71.2519",
    "ICBM": "-29.9027, -71.2519"
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

