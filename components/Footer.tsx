import React from 'react';
import { Layout, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Section */}
        <div className="bg-brand-600 rounded-3xl p-8 md:p-16 text-center text-white mb-16 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-black opacity-20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
           
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop managing tools. Start running your business smarter.</h2>
             <p className="text-brand-100 mb-8 text-lg">
               Join thousands of growth-focused businesses automating their success today.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button variant="secondary" size="lg" className="bg-white text-brand-700 hover:bg-brand-50">Start Free Trial</Button>
               <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white">Book a Demo</Button>
             </div>
           </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
               <div className="bg-brand-600 p-1.5 rounded-lg text-white">
                 <Layout size={20} strokeWidth={2.5} />
               </div>
               <span className="text-lg font-bold text-white">Web Design Inc</span>
             </div>
             <p className="text-neutral-500 text-sm leading-relaxed">
               All-in-one CRM, lead management, AI assistant, and virtual assistant for forward-thinking businesses.
             </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-brand-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-500 hover:text-brand-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-neutral-500 hover:text-brand-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-neutral-500 hover:text-brand-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-neutral-500 hover:text-brand-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Web Design Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;