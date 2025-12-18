import React from 'react';
import { Users, Filter, Bot, CalendarClock, Workflow, Briefcase } from 'lucide-react';
import { Feature } from '../types';
import AiImage from './AiImage';

const features: Feature[] = [
  {
    title: "CRM & Customer Management",
    description: "Store contacts, track interactions, manage pipelines, and view customer history in real time.",
    icon: Users
  },
  {
    title: "Lead Management System",
    description: "Capture leads from forms, chats, calls, and messages. Automatically categorize and score every lead.",
    icon: Filter
  },
  {
    title: "AI Assistant",
    description: "Responds instantly to inquiries, qualifies leads, answers questions, and books appointments.",
    icon: Bot
  },
  {
    title: "Virtual Assistant",
    description: "Handles reminders, follow ups, summaries, task updates, and administrative workflows.",
    icon: CalendarClock
  },
  {
    title: "Automation Engine",
    description: "Create smart workflows that run your business without manual effort.",
    icon: Workflow
  },
  {
    title: "For Agencies & Pros",
    description: "Perfect for marketing agencies, real estate, healthcare, and consultants.",
    icon: Briefcase
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <AiImage 
            prompt="modern office environment blurred background, high tech, clean lines, professional atmosphere"
            className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Core Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Everything you need to scale</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Powerful tools integrated into one seamless ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-100 hover:border-brand-100 hover:shadow-xl hover:shadow-brand-50 transition-all duration-300">
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;