import React from 'react';
import { Heart, Battery, Droplet, Smartphone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: Heart,
    title: '24/7 Health Monitoring',
    description: 'Continuous heart rate and health tracking for optimal wellness',
  },
  {
    icon: Battery,
    title: '7-Day Battery Life',
    description: 'Long-lasting performance for uninterrupted usage',
  },
  {
    icon: Droplet,
    title: 'Water-Resistant',
    description: 'Protected up to 50 meters underwater',
  },
  {
    icon: Smartphone,
    title: 'Smart Notifications',
    description: 'Stay connected with instant alerts and messages',
  },
];

export const FeaturesSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Advanced Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 bg-white rounded-xl shadow-lg transition-all duration-500 transform
                         ${
                           inView
                             ? 'opacity-100 translate-y-0'
                             : 'opacity-0 translate-y-10'
                         }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};