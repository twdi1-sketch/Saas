import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import AiDemo from './components/AiDemo';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <Pricing />
      </main>
      <Footer />
      {/* The AI Demo widget floats on top of the UI */}
      <AiDemo />
    </div>
  );
}

export default App;