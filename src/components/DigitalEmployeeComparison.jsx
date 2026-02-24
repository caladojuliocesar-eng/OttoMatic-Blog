"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Clock, Zap, DollarSign, Calendar, User, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DigitalEmployeeComparison = () => {
  const handleDeployClick = () => {
    window.open('https://wa.me/5511999731501?text=Falei%20com%20o%20Otto,%20quero%20meu%20funcionário%20digital.', '_blank');
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Por que contratar um Funcionário Digital?
          </h2>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Compare e veja como a automação inteligente pode revolucionar seus resultados e reduzir custos operacionais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Block 1: Otto Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-lg shadow-cyan-500/10 flex flex-col"
          >
            <div className="flex items-center gap-6 mb-8 border-b border-slate-800 pb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0">
                <span className="text-white font-bold text-5xl">O</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Otto</h3>
                <p className="text-cyan-400 font-medium text-lg">SDR Digital & Especialista em Vendas</p>
                <div className="flex items-center gap-2 mt-2 text-slate-400 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Online Agora
                </div>
              </div>
            </div>

            <div className="space-y-6 flex-grow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <UserCheck size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Candidato Ideal</h4>
                  <p className="text-slate-400 text-sm">Pronto para começar imediatamente. Sem onboarding demorado.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Disponibilidade Total</h4>
                  <p className="text-slate-400 text-sm">24h/dia, 7 dias/semana. Incluindo feriados, finais de semana e madrugadas.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Habilidade Suprema</h4>
                  <p className="text-slate-400 text-sm">Atendimento imediato. 0 segundos de espera para o seu lead.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <DollarSign size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Custo Reduzido</h4>
                  <p className="text-slate-400 text-sm">Uma fração do custo de um humano. ROI mensurável desde o primeiro dia.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Benefícios Incomparáveis</h4>
                  <p className="text-slate-400 text-sm">Não pede férias, não adoece e não tem encargos trabalhistas.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <Button
                onClick={handleDeployClick}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300"
              >
                Entrevistar o Otto
              </Button>
            </div>
          </motion.div>

          {/* Block 2: Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="bg-slate-800/50 p-6 border-b border-slate-800">
              <h3 className="text-xl font-bold text-white text-center">Comparativo de Custos & Eficiência</h3>
            </div>

            <div className="p-6 flex-grow flex flex-col justify-center">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-800">
                      <th className="py-4 text-left text-slate-400 font-normal w-1/3">Critério</th>
                      <th className="py-4 text-center text-slate-300 font-semibold w-1/3">SDR Humano 👤</th>
                      <th className="py-4 text-center text-cyan-400 font-bold w-1/3">Otto (Digital) 🤖</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm md:text-base">
                    <tr className="border-b border-slate-800/50">
                      <td className="py-4 text-slate-300 font-medium">Salário Médio</td>
                      <td className="py-4 text-center text-red-400">R$ 2.500 - R$ 4.000</td>
                      <td className="py-4 text-center text-green-400 font-bold">A partir de R$ 360</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-4 text-slate-300 font-medium">Encargos (CLT/Impostos)</td>
                      <td className="py-4 text-center text-red-400">+ ~70% do salário</td>
                      <td className="py-4 text-center text-green-400 font-bold">R$ 0 (Zero)</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-4 text-slate-300 font-medium">Tempo de Resposta</td>
                      <td className="py-4 text-center text-slate-400">5 min - 2 horas</td>
                      <td className="py-4 text-center text-cyan-400 font-bold">Instantâneo (&lt; 5s)</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-4 text-slate-300 font-medium">Disponibilidade</td>
                      <td className="py-4 text-center text-slate-400">8h/dia (Seg-Sex)</td>
                      <td className="py-4 text-center text-cyan-400 font-bold">24h/dia (Todos os dias)</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-4 text-slate-300 font-medium">Consistência</td>
                      <td className="py-4 text-center text-slate-400">Variável (Humor/Cansaço)</td>
                      <td className="py-4 text-center text-cyan-400 font-bold">100% Constante</td>
                    </tr>
                    <tr>
                      <td className="py-4 text-slate-300 font-medium">Escalabilidade</td>
                      <td className="py-4 text-center text-red-400">Limitada (1 por vez)</td>
                      <td className="py-4 text-center text-green-400 font-bold">Infinita (Simultâneo)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-6 bg-slate-800/30 border-t border-slate-800">
              <p className="text-center text-slate-400 text-sm">
                * Estimativas baseadas na média de mercado para contratação CLT no Brasil.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalEmployeeComparison;

