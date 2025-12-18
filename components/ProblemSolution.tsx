import React from 'react';
import { AlertCircle, Check, Activity, Layers, Zap, Users, Sparkles } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <div className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Problem */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Running a business today is broken</h2>
            <p className="text-lg text-slate-600">
              Most businesses lose revenue not because they lack demand, but because they lack systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Tool Overload", text: "Juggling multiple logins, subscriptions, and disconnected data silos.", icon: Layers },
              { title: "Missed Leads", text: "Slow follow-ups mean lost customers. 5 minutes delay decreases conversion by 400%.", icon: Activity },
              { title: "Hiring Headaches", text: "Virtual assistants are hard to train, manage, and scale effectively.", icon: Users },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 text-red-600">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-24">
           <div className="h-px bg-slate-200 w-full max-w-xs"></div>
           <span className="px-4 text-sm font-semibold text-slate-400 uppercase tracking-widest">The Solution</span>
           <div className="h-px bg-slate-200 w-full max-w-xs"></div>
        </div>

        {/* Solution */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold mb-6">
              Total Control
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              One Platform. <br/>Infinite Possibilities.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our proprietary SaaS platform centralizes everything your business needs into a single dashboard. No technical setup or complex onboarding required.
            </p>
            
            <ul className="space-y-4">
              {[
                "Manage customers and pipelines centrally",
                "Capture leads instantly from any source",
                "Automate conversations with AI",
                "Assist your team with Virtual Assistant workflows",
                "Eliminate manual data entry entirely"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl bg-neutral-900 p-2 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-500 rounded-full blur-3xl opacity-20"></div>
               
               {/* Wireframe Dashboard Preview */}
               <div className="rounded-xl overflow-hidden aspect-video relative group border border-neutral-800 bg-neutral-950 p-6 flex flex-col gap-6">
                  
                  {/* Top Row */}
                  <div className="flex gap-4 h-24">
                    <div className="flex-1 border border-indigo-500/40 bg-neutral-900/50 rounded-lg box-border"></div>
                    <div className="flex-1 border border-indigo-500/40 bg-neutral-900/50 rounded-lg box-border"></div>
                  </div>

                  {/* Middle Rows */}
                  <div className="flex flex-col gap-3">
                    <div className="h-4 w-full border border-indigo-500/40 bg-neutral-900/50 rounded box-border"></div>
                    <div className="h-4 w-full border border-indigo-500/40 bg-neutral-900/50 rounded box-border relative flex items-center justify-center">
                         <span className="text-[10px] text-neutral-800 font-mono select-none">Dashboard Preview</span>
                    </div>
                    <div className="h-4 w-2/3 border border-indigo-500/40 bg-neutral-900/50 rounded box-border"></div>
                  </div>

                  {/* Bottom Row */}
                  <div className="flex-1 border border-indigo-500/40 bg-neutral-900/50 rounded-lg w-full box-border"></div>

                  {/* Floating Action Button */}
                  <div className="absolute bottom-6 right-6 z-10">
                       <button className="bg-brand-600 hover:bg-brand-500 text-white px-5 py-2.5 rounded-full shadow-lg shadow-brand-900/40 text-sm font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
                          <Sparkles size={18} className="fill-brand-200 text-brand-100" /> 
                          New Lead Capture
                       </button>
                       {/* Notification Dot */}
                       <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border border-neutral-900"></span>
                      </span>
                  </div>

               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProblemSolution;