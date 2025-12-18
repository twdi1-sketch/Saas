import React from 'react';
import { Share2, Zap, UserCheck, BarChart3 } from 'lucide-react';
import AiImage from './AiImage';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Connect",
      description: "Connect your website, landing pages, ads, or communication channels in one click.",
      icon: Share2
    },
    {
      step: "02",
      title: "Capture",
      description: "Leads are automatically captured, organized, categorized and responded to instantly.",
      icon: Zap
    },
    {
      step: "03",
      title: "Automate",
      description: "Your AI and virtual assistant handle follow ups, scheduling, updates, and daily tasks.",
      icon: UserCheck
    },
    {
      step: "04",
      title: "Grow",
      description: "You track performance, conversations, and revenue growth from one clean dashboard.",
      icon: BarChart3
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
         <AiImage 
            prompt="abstract connecting lines and nodes, business workflow automation schematic, rust orange and grey, technical drawing style"
            className="w-full h-full object-cover"
         />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Get up and running in minutes. No complex configuration or coding required.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 z-0"></div>

          {steps.map((item, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center mb-6 relative group transition-transform hover:-translate-y-2 duration-300">
                <div className="absolute top-0 right-0 -mr-2 -mt-2 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                  {item.step}
                </div>
                <item.icon className="w-10 h-10 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed px-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;