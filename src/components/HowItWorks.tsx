import React from 'react';
import { motion } from 'framer-motion';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            How it works
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-4 bg-slate-200 -translate-y-1/2 rounded-full -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                {/* Step Circle */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-32 h-32 rounded-[2rem] bg-white border-4 border-slate-100 shadow-xl flex items-center justify-center text-5xl font-black text-studysics-crimson mb-8 relative z-10 transform rotate-3"
                >
                   {step.id}
                </motion.div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-500 font-medium max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;