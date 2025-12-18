import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';
import AiImage from './AiImage';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <AiImage 
            prompt="abstract geometric black and rust orange shapes, dark architectural details, dramatic lighting, 8k wallpaper"
            className="w-full h-full object-cover"
        />
      </div>
      
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-900 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-800 rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple Pricing.<br/>No Surprises.</h2>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed max-w-lg">
              Stop paying for 5 different software subscriptions. Get everything you need to run your business in one place for a fraction of the cost.
            </p>
            
            <div className="space-y-6">
               <h4 className="font-semibold text-white">Why Businesses Switch to Us:</h4>
               <ul className="space-y-3">
                 {[
                   "Replace multiple tools with one platform",
                   "Lower costs compared to software stacks",
                   "Faster response times & better conversion",
                   "Easy to use with minimal setup"
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-start gap-3 text-neutral-300">
                     <div className="w-5 h-5 rounded-full bg-brand-900/50 flex items-center justify-center mt-0.5 border border-brand-800">
                        <Check size={12} className="text-brand-400" />
                     </div>
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          <div className="lg:w-1/2 w-full max-w-md">
            <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">MOST POPULAR</div>
               
               <div className="text-center mb-8">
                 <p className="text-brand-400 font-medium mb-2">All-in-One Plan</p>
                 <div className="flex items-baseline justify-center gap-1">
                   <span className="text-5xl font-extrabold text-white">$99</span>
                   <span className="text-neutral-500">/month</span>
                 </div>
               </div>

               <div className="space-y-4 mb-8">
                 {[
                   "Unlimited contacts",
                   "Unlimited leads",
                   "AI Assistant Included",
                   "Virtual Assistant Included",
                   "No per user fees",
                   "No long term contracts",
                   "Advanced Analytics"
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center gap-3">
                     <Check size={20} className="text-brand-500 shrink-0" />
                     <span className="text-neutral-300 font-medium">{item}</span>
                   </div>
                 ))}
               </div>

               <Button fullWidth size="lg" className="bg-brand-600 hover:bg-brand-500 text-white border-none shadow-lg shadow-brand-900/20">
                 Start Your Free Trial
               </Button>
               <p className="text-center text-xs text-neutral-500 mt-4">No credit card required for 14-day trial. Cancel anytime.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;