import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Importa le rotte
import plansRoutes from './routes/plans.js';
import testimonialsRoutes from './routes/testimonials.js';
import faqRoutes from './routes/faq.js';
import contactRoutes from './routes/contact.js';

// Configurazione
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rotte
app.use('/api/plans', plansRoutes); // Piani
app.use('/api/testimonials', testimonialsRoutes); // Testimonianze
app.use('/api/faq', faqRoutes); // FAQ
app.use('/api/contact', contactRoutes); // Modulo di contatto

// Avvio del server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
