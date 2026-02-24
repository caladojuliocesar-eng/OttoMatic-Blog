"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Briefcase, Calculator, CheckCircle, ArrowRight, TrendingUp, Package, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
const FinancialManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleScheduleClick = () => {
    toast({
      title: "Agendamento Solicitado",
      description: "Você será redirecionado para o WhatsApp da Gracielly."
    });
    window.open('https://wa.me/5511954489073?text=Olá%20Gracielly,%20quero%20falar%20sobre%20a%20consultoria.', '_blank');
  };
  const methodologyItems = [{
    icon: DollarSign,
    title: "Blindagem do Caixa",
    description: "Rastreio cada centavo para descobrir vazamentos e desperdícios."
  }, {
    icon: Briefcase,
    title: "Fim da Mistura PJ/PF",
    description: "Ajudo a separar as contas da empresa das de casa e definir seu pró-labore."
  }, {
    icon: Calculator,
    title: "Precificação Certa",
    description: "Chega de chutar preço. Calculamos custos exatos para lucrar de verdade."
  }, {
    icon: CheckCircle,
    title: "Processos que Funcionam",
    description: "Implemento rotinas simples para contas a pagar/receber sem dor de cabeça."
  }];
  return <>


    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#1e3a5f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] to-[#162a45]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div initial={{
              opacity: 0,
              x: -50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-lg transform rotate-3"></div>
                <img src="https://horizons-cdn.hostinger.com/8ffd0864-e718-42f0-97cd-9793b452cb7f/gra-meio-corpo-gP9hE.jpeg" alt="Gracielly - Especialista Financeira" className="relative w-80 md:w-96 h-[480px] object-cover rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500" />
              </div>
            </motion.div>

            <motion.div initial={{
              opacity: 0,
              x: 50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} className="w-full md:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                A disciplina de multinacional aplicada à <span className="text-cyan-400">realidade do seu negócio.</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Sua empresa fatura, mas você não vê a cor do dinheiro? Eu organizo sua casa para o lucro aparecer.
              </p>
              <Button onClick={handleScheduleClick} className="bg-white text-[#1e3a5f] hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Agendar Conversa Gratuita
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
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
          }}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-8">
              Muito prazer, sou a Gracielly
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">Minha missão é simples: tirar o peso da desorganização financeira das suas costas. Tenho mais de 15 anos de experiência controlando os números de grandes indústrias.</p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Aprendi na prática que o segredo do lucro não é só vender mais, é controlar melhor. Agora, trago essa inteligência de grandes empresas para organizar o seu negócio, seja ele do tamanho que for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-3xl md:text-4xl font-bold text-[#1e3a5f] text-center mb-16">
            Como eu organizo seu negócio
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologyItems.map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1,
              duration: 0.5
            }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl border-t-4 border-[#1e3a5f] transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-full flex items-center justify-center mb-4">
                <item.icon className="text-[#1e3a5f]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>)}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-3xl md:text-4xl font-bold text-[#1e3a5f] text-center mb-16">
            Bagagem de quem conhece o jogo
          </motion.h2>

          <div className="space-y-8">
            <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} className="flex flex-col md:flex-row gap-6 p-8 bg-gray-50 rounded-2xl border-l-4 border-[#1e3a5f] hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#1e3a5f] rounded-xl flex items-center justify-center text-white">
                  <TrendingUp size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Precisão de Laboratório (Exp. Stago)</h3>
                <p className="text-gray-600 text-lg">Gerencio orçamentos complexos em multinacional de diagnósticos, onde a precisão é vital. Sei planejar o futuro financeiro para você não ter surpresas.</p>
              </div>
            </motion.div>

            <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} className="flex flex-col md:flex-row gap-6 p-8 bg-gray-50 rounded-2xl border-l-4 border-[#1e3a5f] hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#1e3a5f] rounded-xl flex items-center justify-center text-white">
                  <Package size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Controle de Estoque Crítico (Exp. Lactalis)</h3>
                <p className="text-gray-600 text-lg">Cuidei de estoques perecíveis em gigante de laticínios. Erro significava prejuízo. Trago esse rigor para o seu estoque.</p>
              </div>
            </motion.div>

            <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} className="flex flex-col md:flex-row gap-6 p-8 bg-gray-50 rounded-2xl border-l-4 border-[#1e3a5f] hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#1e3a5f] rounded-xl flex items-center justify-center text-white">
                  <Building2 size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Construção do Zero (Exp. Construmix)</h3>
                <p className="text-gray-600 text-lg">Estruturei todo o setor de custos do nada. Sei transformar o caos em processos organizados.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-gradient-to-br from-[#1e3a5f] to-slate-800 text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Não espere o caixa quebrar para organizar a empresa.
            </h2>
            <Button onClick={handleScheduleClick} className="bg-white text-[#1e3a5f] hover:bg-gray-100 text-xl px-10 py-8 rounded-full font-bold shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto">
              Quero organizar meu financeiro agora <ArrowRight size={24} />
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  </>;
};
export default FinancialManagement;
