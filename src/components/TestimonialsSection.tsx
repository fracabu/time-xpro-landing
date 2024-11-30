import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const TestimonialsSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Stato per memorizzare le testimonianze
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Recupera le testimonianze dall'API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/testimonials');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        console.log('Fetched Testimonials:', data); // Log per debug
        setTestimonials(data); // Aggiorna lo stato con i dati ricevuti
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('Failed to load testimonials.');
      } finally {
        setLoading(false); // Disabilita lo stato di caricamento
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          What Our Users Say
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading testimonials...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial: any, index: number) => (
              <div
                key={testimonial.id}
                className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-500 transform ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image || 'https://via.placeholder.com/150'}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/150';
                    }} // Usa un'immagine segnaposto in caso di errore
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
