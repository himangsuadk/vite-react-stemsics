import React from 'react';
import { Check } from 'lucide-react';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            Choose your loadout
          </motion.h2>
          <p className="mt-4 text-xl text-slate-500 font-medium">Free forever for casuals. Superpowers for pros.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col p-8 rounded-[2rem] transition-all duration-300 border-4 ${plan.isPopular
                  ? 'bg-studysics-blue text-white border-slate-900 shadow-2xl scale-110 z-10'
                  : 'bg-white text-slate-900 border-slate-200'
                }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-studysics-crimson text-white px-6 py-2 rounded-xl text-sm font-black uppercase tracking-wide border-2 border-white shadow-lg rotate-2">
                  Best Value
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-black">{plan.name}</h3>
                <div className="flex items-baseline mt-2">
                  <span className="text-5xl font-black tracking-tight">{plan.price}</span>
                  <span className={`ml-2 text-lg font-bold opacity-60`}>/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className={`mt-0.5 mr-3 p-1 rounded-full ${plan.isPopular ? 'bg-slate-700 text-green-400' : 'bg-slate-100 text-slate-600'}`}>
                      <Check className="h-3 w-3 stroke-[4]" />
                    </div>
                    <span className="text-sm font-bold opacity-80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.isPopular ? 'primary' : 'outline'}
                className={`w-full text-lg ${plan.isPopular ? 'bg-white text-slate-900 border-slate-300 hover:bg-slate-100' : 'border-slate-200'}`}
                onClick={() => window.location.href = 'https://app.stemsics.app'}
              >
                Select {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;