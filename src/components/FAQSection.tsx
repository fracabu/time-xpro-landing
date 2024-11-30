import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([]); // Stato per memorizzare le FAQ
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Stato per gestire le FAQ aperte
  const [loading, setLoading] = useState(true); // Stato di caricamento
  const [error, setError] = useState(''); // Stato per eventuali errori

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/faq'); // Endpoint API per le FAQ
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        const data = await response.json();
        setFaqs(data); // Aggiorna lo stato con i dati ricevuti
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        setError('Failed to load FAQs.');
      } finally {
        setLoading(false); // Disabilita lo stato di caricamento
      }
    };

    fetchFAQs();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Frequently Asked Questions
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading FAQs...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : (
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'py-4' : 'py-0 h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
