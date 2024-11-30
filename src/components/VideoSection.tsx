import React from 'react';
import { Play } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          See TimeX Pro in Action
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="TimeX Pro Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors">
              <Play className="w-5 h-5" />
              Watch Full Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};