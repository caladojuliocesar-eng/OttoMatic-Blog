"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, TrendingDown, Users } from 'lucide-react';

const Problems = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Vendas Perdidas",
      description: "Leads não atendidos fora do horário comercial se tornam oportunidades perdidas para a concorrência.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Equipe Sobrecarregada",
      description: "Time gasta horas em tarefas repetitivas que poderiam ser automatizadas, perdendo foco em estratégia.",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Clock,
      title: "Processos Lentos",
      description: "Respostas demoradas e processos manuais fazem você perder negócios para quem responde mais rápido.",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: AlertCircle,
      title: "Escalabilidade Limitada",
      description: "Crescer significa contratar mais pessoas, aumentando custos e complexidade operacional.",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4 block">
            O Problema
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Seu Negócio Está Perdendo
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Dinheiro Todos os Dias
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Enquanto você dorme ou sua equipe está ocupada, oportunidades de vendas escapam pelas suas mãos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl"
                style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
              ></div>
              
              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {problem.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 border border-red-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-xl text-slate-300 font-semibold">
              <span className="text-red-400">Cada minuto sem automação</span> representa vendas perdidas e custos operacionais desnecessários
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;

