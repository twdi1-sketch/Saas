import React from 'react';
import { Layout } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-8">
      <div className="max-w-7xl mx-auto px-4 flex justify-center">
        <div className="flex items-center gap-2 select-none group">
          <div className="bg-brand-600 p-2 rounded-lg text-white shadow-lg shadow-brand-900/20 group-hover:bg-brand-500 transition-colors duration-300">
            <Layout size={24} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-100 transition-colors duration-300">
            Web Design Inc
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;