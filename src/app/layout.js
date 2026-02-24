import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  metadataBase: new URL('https://ottomatic.com.br'),
  title: "Ottomatic - Vendas no Piloto Automático | Automação e IA para Empresas",
  description: "Transforme suas vendas com IA e automação. Atendimento 24/7, escalabilidade sem contratações e economia de tempo. Agende uma demonstração gratuita.",
  keywords: ["IA para Vendas", "Automação de WhatsApp", "Funcionário Digital", "SDR de Inteligência Artificial", "Ottomatic"],
  openGraph: {
    title: "Ottomatic - Vendas no Piloto Automático",
    description: "Transforme suas vendas com IA e automação. Atendimento 24/7.",
    url: 'https://ottomatic.com.br',
    siteName: 'Ottomatic',
    locale: 'pt_BR',
    type: 'website',
  },
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased font-sans">
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <Header />
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
