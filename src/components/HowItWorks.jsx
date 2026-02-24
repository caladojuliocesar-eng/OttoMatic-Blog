"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const HowItWorks = () => {
  const handleDiagnosticClick = () => {
    toast({
      title: "🚧 Diagnóstico em desenvolvimento",
      description: "Esta funcionalidade estará disponível em breve. Entre em contato conosco para agendar!",
    });
  };

  const steps = [
    {
      number: 1,
      title: "Você conecta seus canais de atendimento",
      description: "WhatsApp, Instagram, site… o Otto fica onde seus leads já falam com você."
    },
    {
      number: 2,
      title: "O Otto atende na hora e filtra curiosos",
      description: "Ele responde em segundos, faz as perguntas certas e separa quem só está 'orçando' de quem está pronto pra avançar."
    },
    {
      number: 3,
      title: "Ele agenda e entrega o lead mastigado",
      description: "Sua equipe recebe o contato com contexto: o que a pessoa quer, urgência e próximos passos. Menos conversa inútil, mais reunião que presta."
    },
    {
      number: 4,
      title: "Você melhora sem aumentar a equipe",
      description: "Você vê o que está funcionando, ajusta as mensagens e escala o atendimento sem virar refém de contratação."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4 block">
            Como Funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              4 Passos Para Transformar
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Seu Atendimento
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/20 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 inline-block transition-transform duration-300">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xl text-slate-300 mb-6">
            Quer ver funcionando no seu caso?
          </p>
          <Button
            onClick={handleDiagnosticClick}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50"
          >
            Peça um diagnóstico rápido do seu atendimento
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

