import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
            <h2 className="text-4xl font-black text-slate-900 mb-4">
            Vouched by <span className="text-studysics-crimson">GPA 4.0</span> Students
            </h2>
            <p className="text-slate-500 text-lg">Don't just take our word for it.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div 
              key={t.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring" }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 relative group"
            >
              <div className="absolute -top-4 -right-4 bg-studysics-blue text-white p-3 rounded-full shadow-lg group-hover:bg-studysics-crimson transition-colors">
                 <Quote className="h-5 w-5 fill-current" />
              </div>
              
              <div className="flex items-center mb-6">
                <div className="relative">
                    <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="h-14 w-14 rounded-2xl object-cover mr-4 ring-4 ring-slate-50"
                    />
                    <div className="absolute -bottom-1 -right-0 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-studysics-crimson font-bold uppercase tracking-wide bg-rose-50 px-2 py-0.5 rounded-full inline-block mt-1">{t.role}</p>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed font-medium">"{t.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;