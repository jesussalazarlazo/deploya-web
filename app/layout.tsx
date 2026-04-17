import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Deploya | Tecnología de Vanguardia para tu Negocio',
  description: 'Desarrollo web, backend, APIs, integración en la nube y consultoría tecnológica. Impulsamos tu negocio con soluciones innovadoras en Lima, Perú.',
  keywords: 'desarrollo web, backend, APIs, cloud, consultoría tecnológica, Lima, Perú',
  openGraph: {
    title: 'Deploya | Tecnología de Vanguardia para tu Negocio',
    description: 'Desarrollo web, backend, APIs, integración en la nube y consultoría tecnológica.',
    type: 'website',
    locale: 'es_PE',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F172A" />
      </head>
      <body className="font-sans antialiased bg-white text-slate-700">
        {children}
      </body>
    </html>
  );
}
