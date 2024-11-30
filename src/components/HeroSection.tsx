import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Future on Your Wrist
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            TimeX Pro combines cutting-edge technology with premium design.
          </p>
          <Link to="/pricing">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold 
                               transition-all duration-300 hover:bg-blue-500 hover:shadow-lg 
                               hover:shadow-blue-500/50 flex items-center gap-2">
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=1200"
            alt="TimeX Pro Smartwatch"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
