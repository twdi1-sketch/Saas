import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import Button from './Button';
import AiImage from './AiImage';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate position relative to the center of the screen
      const x = (e.clientX - window.innerWidth / 2) / 25;
      const y = (e.clientY - window.innerHeight / 2) / 25;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-neutral-950">
      {/* AI Generated Background */}
      <div className="absolute inset-0 z-0">
        <AiImage 
          prompt="abstract futuristic data stream network, dark black background with glowing rust orange data nodes, depth of field, cinematic lighting, 8k, minimalistic" 
          className="w-full h-full opacity-30"
          overlay
        />
      </div>

      {/* Animated Background Decor Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none mix-blend-screen">
        {/* Rust Blob 1 */}
        <div 
          className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-600 rounded-full blur-[120px] opacity-20 transition-transform duration-100 ease-out"
          style={{ transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)` }}
        ></div>
        
        {/* Secondary Blob 2 */}
        <div 
          className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-brand-800 rounded-full blur-[100px] opacity-10 transition-transform duration-100 ease-out"
          style={{ transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 backdrop-blur-sm border border-brand-900/50 text-brand-400 text-xs font-semibold mb-8 uppercase tracking-wide transition-transform duration-700 ease-out"
            style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
          New: AI Assistant v2.0 Live
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1] drop-shadow-2xl">
          Run Your Entire Business on <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600">
            One Intelligent Platform
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed drop-shadow-md">
          Replace your CRM, lead management tools, AI chat, and virtual assistant with one simple system that works for you 24 hours a day for just $99/mo.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="w-full sm:w-auto gap-2 shadow-xl shadow-brand-900/40 border border-brand-600 bg-brand-600 hover:bg-brand-500">
            Start Your Free Trial <ArrowRight size={18} />
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2 bg-black/50 backdrop-blur-md text-white border border-neutral-700 hover:bg-neutral-900/80">
            See How It Works <Play size={18} className="fill-white" />
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-neutral-400">
           <div className="flex items-center gap-2">
             <CheckCircle size={16} className="text-brand-500" /> No credit card required
           </div>
           <div className="flex items-center gap-2">
             <CheckCircle size={16} className="text-brand-500" /> 14-day free trial
           </div>
           <div className="flex items-center gap-2">
             <CheckCircle size={16} className="text-brand-500" /> Cancel anytime
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;