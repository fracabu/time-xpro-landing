import express from 'express';

const router = express.Router();

// Modulo di contatto
router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  console.log(`New message from ${name} (${email}): ${message}`);
  res.status(200).json({ success: 'Message received successfully!' });
});

export default router;
