
import React from 'react';
import { BookOpen, Twitter, Github, Linkedin, Heart } from 'lucide-react';
import Button from './ui/Button';
import { motion } from 'framer-motion';

interface FooterProps {
  onNavigate: (view: 'home' | 'login' | 'signup') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-studysics-blue pt-20 pb-12 mt-40">
      {/* Wavy Top Transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-[99%] leading-none z-0">
         <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[150px] fill-studysics-blue" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Peeking Mascot */}
      <motion.div 
        initial={{ y: 100, rotate: 10 }}
        whileInView={{ y: 0, rotate: 0 }}
        viewport={{ once: true, margin: "100px" }}
        transition={{ type: "spring", bounce: 0.5, duration: 1.5 }}
        className="absolute -top-[140px] md:-top-[220px] left-[10%] md:left-[15%] w-32 h-32 md:w-48 md:h-48 z-10"
      >
          {/* Robot Head */}
          <div className="relative w-full h-full">
               {/* Body/Head */}
               <div className="absolute inset-0 bg-white rounded-[2.5rem] border-4 border-slate-900 shadow-xl flex items-center justify-center overflow-hidden">
                   <div className="absolute top-0 w-full h-full bg-slate-50"></div>
                   
                   {/* Face */}
                   <div className="relative z-10 flex flex-col items-center gap-2 mt-4">
                        {/* Eyes */}
                        <div className="flex gap-4">
                            <motion.div 
                                animate={{ scaleY: [1, 0.1, 1] }}
                                transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.2 }}
                                className="w-8 h-8 md:w-10 md:h-10 bg-slate-900 rounded-full relative"
                            >
                                <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full"></div>
                            </motion.div>
                            <motion.div 
                                animate={{ scaleY: [1, 0.1, 1] }}
                                transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.2 }}
                                className="w-8 h-8 md:w-10 md:h-10 bg-slate-900 rounded-full relative"
                            >
                                <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full"></div>
                            </motion.div>
                        </div>
                        {/* Mouth */}
                        <div className="w-6 h-3 bg-rose-400 rounded-full mt-1"></div>
                   </div>
               </div>
               
               {/* Antenna */}
               <motion.div 
                  animate={{ rotate: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
               >
                   <div className="w-4 h-4 bg-studysics-crimson rounded-full border-4 border-slate-900 relative">
                       <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                   </div>
                   <div className="w-2 h-6 bg-slate-900"></div>
               </motion.div>

               {/* Hands (peeking over) */}
               <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white border-4 border-slate-900 rounded-full z-20"></div>
               <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white border-4 border-slate-900 rounded-full z-20"></div>

               {/* Speech Bubble */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute -right-24 -top-12 bg-white text-slate-900 p-3 rounded-2xl rounded-bl-none border-4 border-slate-900 font-bold whitespace-nowrap shadow-lg hidden md:block"
               >
                   Ready to ace it? 🚀
               </motion.div>
          </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: CTA & Logo */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
             <div className="md:pl-48"> {/* Padding to offset mascot */}
                <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                    <div className="bg-studysics-crimson p-3 rounded-2xl rotate-3 shadow-lg border-b-4 border-rose-900">
                        <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-4xl font-black tracking-tighter text-white">Stemsics</span>
                </div>
                <p className="text-slate-400 font-medium text-lg max-w-md leading-relaxed">
                    The only study tool you need to ace your exams without losing your mind.
                </p>
             </div>
             <div className="flex gap-4">
                 <Button variant="primary" size="lg" className="shadow-xl" onClick={() => onNavigate('signup')}>
                    Get Started Now
                 </Button>
             </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          
          {/* Column 1 */}
          <div>
            <h4 className="text-white font-black text-xl mb-6 uppercase tracking-wider opacity-80">Product</h4>
            <ul className="space-y-4 font-bold text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-4 underline-offset-4 decoration-studysics-crimson">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-4 underline-offset-4 decoration-studysics-crimson">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-4 underline-offset-4 decoration-studysics-crimson">Chrome Extension</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-4 underline-offset-4 decoration-studysics-crimson">Updates</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-black text-xl mb-6 uppercase tracking-wider opacity-80">Company</h4>
            <ul className="space-y-4 font-bold text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-4 underline-offset-4 decoration-yellow-400">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-4 underline-offset-4 decoration-yellow-400">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-4 underline-offset-4 decoration-yellow-400">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-4 underline-offset-4 decoration-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-black text-xl mb-6 uppercase tracking-wider opacity-80">Resources</h4>
            <ul className="space-y-4 font-bold text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-4 underline-offset-4 decoration-green-400">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-4 underline-offset-4 decoration-green-400">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-4 underline-offset-4 decoration-green-400">Status</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-white font-black text-xl mb-6 uppercase tracking-wider opacity-80">Legal</h4>
            <ul className="space-y-4 font-bold text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-4 underline-offset-4 decoration-purple-400">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-4 underline-offset-4 decoration-purple-400">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline decoration-4 underline-offset-4 decoration-purple-400">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-bold flex items-center gap-2">
            © 2024 Stemsics AI. Made with <Heart className="h-5 w-5 text-studysics-crimson fill-current animate-pulse" /> for students.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="bg-slate-800 p-3 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-700 transition-all hover:-translate-y-1 hover:shadow-lg border-b-4 border-slate-900 hover:border-slate-800 active:border-b-0 active:translate-y-1"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="bg-slate-800 p-3 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-700 transition-all hover:-translate-y-1 hover:shadow-lg border-b-4 border-slate-900 hover:border-slate-800 active:border-b-0 active:translate-y-1"><Github className="h-5 w-5" /></a>
            <a href="#" className="bg-slate-800 p-3 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-700 transition-all hover:-translate-y-1 hover:shadow-lg border-b-4 border-slate-900 hover:border-slate-800 active:border-b-0 active:translate-y-1"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
