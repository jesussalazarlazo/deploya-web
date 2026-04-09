import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Deploya',
  description: 'Landing page profesional para Deploya',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}