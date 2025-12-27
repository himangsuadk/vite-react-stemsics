import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Bot, Zap, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from './ui/Button';

// Data grouped into "Stories" for the Zig-Zag layout
const STORIES = [
    {
        id: 'convert',
        title: "Ditch the boring textbooks.",
        description: "Just drag and drop your messy notes, slides, or PDFs. We turn them into interactive study materials in seconds.",
        color: "bg-yellow-400",
        accent: "text-yellow-600",
        illustration: (
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Visual Representation of "Conversion" */}
                <motion.div 
                    animate={{ x: [0, 20, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-10 top-1/2 -translate-y-1/2 bg-white p-6 rounded-3xl border-4 border-slate-100 rotate-[-6deg] z-0"
                >
                    <div className="space-y-2 opacity-50">
                        <div className="h-2 w-20 bg-slate-300 rounded-full"></div>
                        <div className="h-2 w-16 bg-slate-300 rounded-full"></div>
                        <div className="h-2 w-24 bg-slate-300 rounded-full"></div>
                    </div>
                </motion.div>
                
                <div className="relative z-10 bg-white p-4 rounded-2xl shadow-lg border-2 border-slate-100 mx-4">
                     <ArrowRight className="w-8 h-8 text-slate-400" />
                </div>

                <motion.div 
                    animate={{ scale: [1, 1.1, 1], rotate: [6, 8, 6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-10 top-1/2 -translate-y-1/2 bg-studysics-blue p-6 rounded-3xl border-b-8 border-slate-800 rotate-6 shadow-xl z-20 text-white"
                >
                    <CheckCircle2 className="w-12 h-12 mb-2" />
                    <span className="font-bold">Quiz Ready!</span>
                </motion.div>
            </div>
        )
    },
    {
        id: 'tutor',
        title: "A tutor that doesn't sleep.",
        description: "Stuck on a concept at 2 AM? Your personal AI tutor knows your exact class material and explains it until you get it.",
        color: "bg-green-400",
        accent: "text-green-600",
        illustration: (
            <div className="relative w-full h-full flex items-center justify-center">
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white w-64 rounded-t-3xl rounded-br-3xl rounded-bl-none p-6 border-4 border-slate-100 shadow-xl relative"
                 >
                    <p className="text-slate-600 font-medium">Why is the mitochondria the powerhouse?</p>
                 </motion.div>
                 <div className="absolute top-[60%] -right-4 md:right-10">
                    <motion.div 
                        animate={{ scale: [0.95, 1.05, 0.95] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-studysics-crimson text-white p-4 rounded-3xl rounded-tl-none shadow-lg border-b-4 border-rose-800 flex items-center gap-3"
                    >
                         <Bot className="w-8 h-8" />
                         <span className="font-bold">I got you! It generates ATP...</span>
                    </motion.div>
                 </div>
            </div>
        )
    },
    {
        id: 'gamify',
        title: "Addicted to learning.",
        description: "Earn XP, keep your streak alive, and climb the leaderboard. We use psychology to trick your brain into loving study.",
        color: "bg-rose-400",
        accent: "text-rose-600",
        illustration: (
            <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
                 <div className="flex gap-4">
                     <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="bg-white p-4 rounded-2xl border-b-4 border-slate-200 shadow-sm flex flex-col items-center"
                     >
                         <Zap className="w-8 h-8 text-yellow-500 fill-current mb-1" />
                         <span className="font-black text-slate-700">12 Days</span>
                     </motion.div>
                     <motion.div 
                         whileHover={{ scale: 1.1 }}
                         className="bg-white p-4 rounded-2xl border-b-4 border-slate-200 shadow-sm flex flex-col items-center"
                     >
                         <span className="text-2xl mb-1">🏆</span>
                         <span className="font-black text-slate-700">#1 Rank</span>
                     </motion.div>
                 </div>
                 <div className="w-64 bg-slate-200 rounded-full h-6 overflow-hidden border-2 border-slate-300">
                     <motion.div 
                        initial={{ width: "0%" }}
                        whileInView={{ width: "80%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-studysics-blue"
                     ></motion.div>
                 </div>
                 <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">Level 5 Scholar</span>
            </div>
        )
    },
    {
        id: 'mobile',
        title: "Study on the bus. Or the toilet.",
        description: "Our mobile-first design and voice mode mean you can crush your flashcards literally anywhere. No excuses.",
        color: "bg-purple-400",
        accent: "text-purple-600",
        illustration: (
            <div className="relative w-full h-full flex items-center justify-center">
                 <motion.div 
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-40 h-72 bg-slate-900 rounded-[2.5rem] border-4 border-slate-800 p-2 shadow-2xl"
                 >
                     <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                         <div className="absolute inset-0 bg-studysics-blue flex items-center justify-center">
                             <div className="text-center">
                                 <Smartphone className="w-12 h-12 text-white/50 mx-auto mb-2" />
                                 <div className="bg-white/20 h-2 w-16 mx-auto rounded-full animate-pulse"></div>
                             </div>
                         </div>
                     </div>
                 </motion.div>
                 
                 {/* Sound waves visual */}
                 <div className="absolute -right-2 md:right-20 top-1/2 flex gap-1 items-end h-16">
                     {[1,2,3,4,5].map((i) => (
                         <motion.div
                            key={i}
                            animate={{ height: ["20%", "100%", "20%"] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                            className="w-3 bg-purple-500 rounded-full"
                         ></motion.div>
                     ))}
                 </div>
            </div>
        )
    }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {STORIES.map((story, index) => (
          <div key={story.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Visual Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex-1 w-full aspect-[4/3] rounded-[3rem] ${story.color} relative overflow-hidden shadow-lg border-b-8 border-black/10`}
            >
                {story.illustration}
            </motion.div>

            {/* Text Side */}
            <motion.div 
               initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="flex-1 text-center lg:text-left"
            >
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                   {story.title}
               </h2>
               <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">
                   {story.description}
               </p>
               <Button variant="ghost" className="text-studysics-crimson text-lg pl-0 hover:bg-transparent hover:text-rose-700">
                   Learn more <ArrowRight className="ml-2 w-5 h-5" />
               </Button>
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;