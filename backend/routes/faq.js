import express from 'express';

const router = express.Router();

// Recupera FAQ
router.get('/', (req, res) => {
  res.json([
    { question: 'Is TimeX Pro water-resistant?', answer: 'Yes, it is water-resistant up to 50 meters.' },
    { question: 'What is the battery life?', answer: 'It lasts up to 7 days on a single charge.' },
    { question: 'Does TimeX Pro support heart rate monitoring?', answer: 'Yes, it features 24/7 heart rate monitoring.' },
    { question: 'Can I connect TimeX Pro to my smartphone?', answer: 'Yes, it is compatible with both iOS and Android devices.' },
    { question: 'Does it track sleep?', answer: 'Yes, it provides detailed sleep tracking analysis.' },
    { question: 'What notifications does it support?', answer: 'You can receive call, SMS, and app notifications.' },
    { question: 'Does TimeX Pro have a GPS?', answer: 'Yes, it has a built-in GPS for accurate location tracking.' },
    { question: 'Is there a warranty for TimeX Pro?', answer: 'Yes, it comes with a 1-year warranty.' },
    { question: 'Can I use it while swimming?', answer: 'Yes, it is designed for swimming and other water activities.' },
    { question: 'How do I update the software?', answer: 'You can update the software via the TimeX Pro companion app.' },
  ]);
});

export default router;
