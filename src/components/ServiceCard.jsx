"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, delay, action }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group flex flex-col h-full"
    >
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition-colors">
        <Icon className="text-cyan-400 group-hover:text-white transition-colors" size={28} />
      </div>
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      {action && (
        <div className="mt-auto pt-4">
          {action}
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;

