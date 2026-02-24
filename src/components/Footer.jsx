"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Linkedin, Mail } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const handleSocialClick = (platform) => {
    toast({
      title: `🔗 ${platform}`,
      description: "Link será disponibilizado em breve",
    });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999731501?text=Falei%20com%20o%20Otto,%20quero%20meu%20funcionário%20digital.', '_blank');
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ottomatic
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Transformando negócios através de Inteligência Artificial e Automação.
              Vendas no piloto automático para empresas que querem escalar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <div className="space-y-3">
              <button
                onClick={() => handleSocialClick('Soluções')}
                className="block text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                Soluções
              </button>
              <button
                onClick={() => handleSocialClick('Casos de Sucesso')}
                className="block text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                Casos de Sucesso
              </button>
              <button
                onClick={() => handleSocialClick('Sobre Nós')}
                className="block text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => handleSocialClick('Blog')}
                className="block text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                Blog
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Fale Conosco</h3>
            <div className="space-y-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-green-500 group-hover:to-emerald-600 flex items-center justify-center transition-all duration-300">
                  <MessageCircle size={20} />
                </div>
                <span>WhatsApp</span>
              </button>
              <button
                onClick={() => handleSocialClick('E-mail')}
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 flex items-center justify-center transition-all duration-300">
                  <Mail size={20} />
                </div>
                <span>contato@ottomatic.com.br</span>
              </button>
            </div>

            <div className="mt-6">
              <p className="text-slate-400 text-sm mb-3">Redes Sociais</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleSocialClick('Instagram')}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 flex items-center justify-center transition-all duration-300 group"
                >
                  <Instagram className="text-slate-400 group-hover:text-white" size={20} />
                </button>
                <button
                  onClick={() => handleSocialClick('LinkedIn')}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 flex items-center justify-center transition-all duration-300 group"
                >
                  <Linkedin className="text-slate-400 group-hover:text-white" size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-slate-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2025 Ottomatic. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => handleSocialClick('Política de Privacidade')}
                className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200"
              >
                Política de Privacidade
              </button>
              <button
                onClick={() => handleSocialClick('Termos de Uso')}
                className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200"
              >
                Termos de Uso
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

