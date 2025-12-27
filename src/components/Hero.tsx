
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Sparkles, FileText } from 'lucide-react';
import Button from './ui/Button';

interface HeroProps {
  onNavigate: (view: 'home' | 'login' | 'signup') => void;
}

interface FloatingItemProps {
  children: React.ReactNode;
  delay: number;
  x: number;
  y: number;
  rotate: number;
}

const FloatingItem: React.FC<FloatingItemProps> = ({ children, delay, x, y, rotate }) => (
  <motion.div
    animate={{ 
      y: [0, -20, 0],
      rotate: [rotate, rotate + 5, rotate - 5, rotate]
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      delay: delay,
      ease: "easeInOut" 
    }}
    className="absolute z-20"
    style={{ top: `${y}%`, left: `${x}%` }}
  >
    {children}
  </motion.div>
);

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Playful Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[10%] left-[30%] w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
                <span className="bg-studysics-blue text-white px-4 py-2 rounded-xl font-bold text-sm uppercase tracking-wider transform -rotate-2 inline-block border-b-4 border-slate-900">
                    🚀 The #1 AI Study App
                </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.95]">
              Turn your notes into <br />
              <span className="text-studysics-crimson inline-block transform rotate-2 decoration-4 underline-offset-4">Superpowers.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 font-medium mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Upload anything. We'll turn it into quizzes, flashcards, and a personal tutor instantly. It's like magic, but for your GPA.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full sm:w-auto text-xl"
                onClick={() => window.location.href = 'https://app.stemsics.app'}
              >
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-xl" onClick={() => window.location.href='#how-it-works'}>
                See How It Works
              </Button>
            </div>
          </motion.div>

          {/* Hero Visual Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg aspect-square"
          >
             {/* Central "Phone" Mockup */}
             <div className="relative w-64 md:w-80 mx-auto bg-slate-900 rounded-[3rem] p-4 shadow-2xl border-4 border-slate-900 transform rotate-[-6deg] z-10">
                <div className="bg-white rounded-[2.5rem] overflow-hidden h-full aspect-[9/18] relative">
                    {/* Mock App UI */}
                    <div className="bg-studysics-crimson p-6 pt-12 pb-8">
                        <div className="w-12 h-12 bg-white/20 rounded-full mb-4"></div>
                        <div className="h-6 w-32 bg-white/20 rounded-full mb-2"></div>
                        <div className="h-4 w-20 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="bg-slate-100 p-4 rounded-2xl border-l-4 border-green-500">
                            <div className="h-4 w-3/4 bg-slate-200 rounded-full mb-2"></div>
                            <div className="h-3 w-1/2 bg-slate-200 rounded-full"></div>
                        </div>
                        <div className="bg-slate-100 p-4 rounded-2xl border-l-4 border-purple-500">
                            <div className="h-4 w-full bg-slate-200 rounded-full mb-2"></div>
                            <div className="h-3 w-2/3 bg-slate-200 rounded-full"></div>
                        </div>
                         <div className="bg-blue-50 p-4 rounded-2xl flex items-center justify-between">
                            <span className="font-bold text-blue-900">Streak 🔥</span>
                            <span className="font-black text-2xl text-blue-600">12</span>
                        </div>
                    </div>
                    {/* Floating 'Chat' bubble inside phone */}
                    <div className="absolute bottom-6 right-6 bg-studysics-blue text-white px-4 py-2 rounded-2xl rounded-tr-none text-sm font-bold shadow-lg">
                        Keep going! 🚀
                    </div>
                </div>
             </div>

             {/* Floating 3D Elements around the phone */}
             <FloatingItem delay={0} x={10} y={10} rotate={-15}>
                <div className="bg-white p-4 rounded-3xl shadow-xl border-b-8 border-r-8 border-slate-100">
                    <FileText className="w-12 h-12 text-blue-500" />
                </div>
             </FloatingItem>

             <FloatingItem delay={1.5} x={80} y={20} rotate={15}>
                <div className="bg-white p-4 rounded-3xl shadow-xl border-b-8 border-r-8 border-slate-100">
                    <Brain className="w-12 h-12 text-pink-500" />
                </div>
             </FloatingItem>

             <FloatingItem delay={0.8} x={5} y={60} rotate={10}>
                <div className="bg-green-400 p-4 rounded-3xl shadow-xl border-b-8 border-green-600">
                    <span className="text-3xl font-black text-white">A+</span>
                </div>
             </FloatingItem>

             <FloatingItem delay={2.2} x={85} y={65} rotate={-10}>
                 <div className="bg-yellow-400 p-4 rounded-full shadow-xl border-b-8 border-yellow-600">
                    <Zap className="w-10 h-10 text-white fill-current" />
                </div>
             </FloatingItem>

             <FloatingItem delay={1} x={45} y={-5} rotate={5}>
                <div className="bg-white px-6 py-3 rounded-full shadow-xl border-2 border-slate-100 text-slate-800 font-bold flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    <span>AI Powered</span>
                </div>
             </FloatingItem>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
