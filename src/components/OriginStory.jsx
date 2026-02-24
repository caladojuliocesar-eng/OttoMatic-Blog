"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const OriginStory = () => {
  return (
    <section className="relative py-20 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <Target size={32} className="text-cyan-400" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Criado por quem conhece a dor de perder vendas
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A OttoMatic não nasceu em um laboratório de código, mas no chão de loja.
            Nossa liderança vem de operações de alto volume, onde vimos centenas de leads serem gerados e desperdiçados diariamente. Nós conhecemos o motivo: sobrecarga humana. Já fomos os vendedores que, mesmo com esforço, não conseguiam responder a todos com qualidade e rapidez.
            Criamos Ottomação para resolver o problema que vivemos na pele: garantir que, enquanto sua equipe dorme ou foca em fechar contratos, nenhum lead fique sem resposta. Tecnologia com 'Skin in the Game'.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OriginStory;

