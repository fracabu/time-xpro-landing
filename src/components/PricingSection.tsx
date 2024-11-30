import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Standard',
    price: 199,
    features: [
      'Heart Rate Monitoring',
      'Sleep Tracking',
      'Basic Notifications',
      '5-day Battery Life',
    ],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: 299,
    features: [
      'Advanced Health Metrics',
      'ECG Monitoring',
      'Smart Notifications',
      '7-day Battery Life',
      'Premium Support',
    ],
    isPopular: true,
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Choose Your TimeX
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Select the perfect TimeX Pro model that fits your lifestyle. Special launch offer - Save 20% today!
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.isPopular
                  ? 'bg-blue-600 text-white ring-4 ring-blue-600 ring-opacity-50'
                  : 'bg-white'
              }`}
            >
              {plan.isPopular && (
                <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-white text-blue-600 mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={plan.isPopular ? 'text-blue-100' : 'text-gray-500'}>
                  {' '}
                  USD
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-500'
                }`}
              >
                Buy Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};