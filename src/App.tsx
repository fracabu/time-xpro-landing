import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { PricingSection } from './components/PricingSection';
import { VideoSection } from './components/VideoSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import '../dist/output.css';


// Componente che contiene tutta la landing page
const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <VideoSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactForm />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Rotta principale che mostra tutta la landing page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Rotte individuali per la navigazione diretta */}
          <Route path="/features" element={<FeaturesSection />} />
          <Route path="/pricing" element={<PricingSection />} />
          <Route path="/video" element={<VideoSection />} />
          <Route path="/testimonials" element={<TestimonialsSection />} />
          <Route path="/faq" element={<FAQSection />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;