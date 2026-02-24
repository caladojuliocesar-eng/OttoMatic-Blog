"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Briefcase, Store, Rocket, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Features = () => {
  const audiences = [{
    icon: Store,
    title: "Pequenas Empresas",
    description: "Compete de igual para igual com grandes players através de automação acessível",
    benefits: ["Baixo investimento inicial", "ROI rápido", "Fácil implementação"]
  }, {
    icon: Briefcase,
    title: "Médias Empresas",
    description: "Escale operações sem aumentar proporcionalmente custos com equipe",
    benefits: ["Otimização de processos", "Redução de custos", "Aumento de eficiência"]
  }, {
    icon: Building2,
    title: "Grandes Empresas",
    description: "Padronize atendimento em múltiplos canais e filiais simultaneamente",
    benefits: ["Consistência em escala", "Integração completa", "Analytics avançado"]
  }, {
    icon: Rocket,
    title: "Startups & Scale-ups",
    description: "Cresça exponencialmente mantendo qualidade no atendimento",
    benefits: ["Escalabilidade rápida", "Flexibilidade", "Inovação contínua"]
  }];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999731501?text=Falei%20com%20o%20Otto,%20quero%20meu%20funcionário%20digital.', '_blank');
  };

  return <section className="py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
        <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4 block">
          Para Todos os Tamanhos
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Soluções Personalizadas Para
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Cada Tipo de Negócio
          </span>
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Da startup ao enterprise, nossa tecnologia se adapta às suas necessidades específicas
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
        {audiences.map((audience, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <audience.icon className="text-white" size={28} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
              {audience.title}
            </h3>

            <p className="text-slate-400 leading-relaxed mb-6">
              {audience.description}
            </p>

            <div className="space-y-2">
              {audience.benefits.map((benefit, idx) => <div key={idx} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                <span className="text-slate-300 text-sm">{benefit}</span>
              </div>)}
            </div>
          </div>
        </motion.div>)}
      </div>

      <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-3xl p-12 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
            Pronto Para Transformar
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Seu Processo de Vendas?
          </span>
        </h3>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Inicie uma conversa agora mesmo e veja como uma Ottomação pode ajudar sua empresa.
        </p>
        <Button onClick={handleWhatsAppClick} className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-6 text-lg rounded-full transition-all duration-300 shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-105 flex items-center gap-2 mx-auto">
          <MessageCircle size={24} />
          Conversar com Otto
        </Button>
      </motion.div>
    </div>
  </section>;
};
export default Features;

