"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Sparkles, Zap, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import Link from 'next/link';
import ServiceCard from './ServiceCard';

const ConsultingSolutions = () => {
  const handleConsultationClick = () => {
    toast({
      title: "Solicitação Recebida!",
      description: "Um de nossos consultores entrará em contato em breve.",
    });
  };

  const services = [
    {
      icon: DollarSign,
      title: "Organização Financeira & Lucro Real",
      description: "Transforme números em estratégia. Organizamos seu fluxo de caixa, DRE e indicadores para que você veja onde está o dinheiro e como multiplicar o lucro real do negócio.",
      action: (
        <Link href="/financial-management">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="w-full bg-[#1e3a5f] hover:bg-[#162a45] text-white font-semibold transition-colors flex items-center justify-center gap-2">
              <User size={18} />
              Conheça a Especialista
            </Button>
          </motion.div>
        </Link>
      )
    },
    {
      icon: Sparkles,
      title: "Marketing & Criação com IA",
      description: "Conteúdo infinito, esforço mínimo. Implementamos processos de criação assistida por IA que garantem presença digital constante e copywritting persuasivo sem exaurir sua equipe."
    },
    {
      icon: Zap,
      title: "Consultoria em Processos & IA",
      description: "Automação além do chat. Desenhamos e automatizamos fluxos operacionais inteiros, eliminando gargalos manuais e integrando suas ferramentas para funcionarem como uma só."
    }
  ];

  return (
    <>


      <div className="min-h-screen bg-slate-950">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1678995635432-d9e89c7a8fc5"
              alt="AI Technology Background"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="text-white">Inteligência Humana</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Potencializada por IA
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Além do Otto, oferecemos a estratégia financeira, de marketing e de processos que seu negócio precisa para crescer de forma saudável.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                onClick={handleConsultationClick}
                className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Agendar Diagnóstico
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-slate-950 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 0.2}
                  action={service.action}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/40" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-12 md:p-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Tecnologia é o meio. <span className="text-cyan-400">O lucro é o fim.</span>
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Unimos experiência real de gestão financeira com a tecnologia mais avançada do mercado. Não entregamos apenas software, entregamos resultado.
              </p>
              <Button
                onClick={handleConsultationClick}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-10 py-6 rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                Falar com um Consultor <ArrowRight size={20} />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultingSolutions;
