import express from 'express';

const router = express.Router();

// Recupera i piani disponibili
router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Standard', price: 199, features: ['Heart Rate Monitoring', 'Sleep Tracking'] },
    { id: 2, name: 'Pro', price: 299, features: ['Advanced Health Metrics', 'ECG Monitoring'] },
  ]);
});

export default router;
