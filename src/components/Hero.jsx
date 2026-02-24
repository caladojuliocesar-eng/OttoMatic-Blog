"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999731501?text=Falei%20com%20o%20Otto,%20quero%20meu%20funcionário%20digital.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-cyan-950/10 to-transparent"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Sparkles className="text-cyan-400" size={24} />
            <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
              Inteligência Artificial & Automação
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Vendas no Piloto
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Automático
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Contrate um Funcionário Digital que trabalha 24/7. O Otto qualifica leads, agenda reuniões e nunca pede férias.
            <span className="text-cyan-400 font-semibold"> Mais vendas, menos trabalho manual</span>,
            escalabilidade sem limites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              onClick={handleWhatsAppClick}
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105"
            >
              <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" size={24} />
              Ottomatizar Agora
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
              <div className="text-cyan-400 mb-2 flex items-center gap-2">
                <Zap size={24} />
                <span className="text-3xl font-bold">3x</span>
              </div>
              <p className="text-slate-300 text-sm">Mais conversões em vendas</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
              <div className="text-cyan-400 mb-2 flex items-center gap-2">
                <Zap size={24} />
                <span className="text-3xl font-bold">24/7</span>
              </div>
              <p className="text-slate-300 text-sm">Atendimento ininterrupto</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
              <div className="text-cyan-400 mb-2 flex items-center gap-2">
                <Zap size={24} />
                <span className="text-3xl font-bold">80%</span>
              </div>
              <p className="text-slate-300 text-sm">Redução de tempo operacional</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
};

export default Hero;

