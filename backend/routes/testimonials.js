import express from 'express';

const router = express.Router();

// Recupera testimonianze
router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Liam Johnson',
      role: 'Gadget Enthusiast',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=150',
      content: 'The most innovative smartwatch I have ever owned.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Emma Watson',
      role: 'Fitness Coach',
      image: 'https://images.unsplash.com/photo-1528763380143-65b3c19e6b67?auto=format&fit=crop&w=150',
      content: 'Amazing battery life and tracking features.',
      rating: 5,
    },
    {
      id: 3,
      name: 'James Rodriguez',
      role: 'Software Developer',
      image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=150',
      content: 'Perfect companion for my daily coding sessions.',
      rating: 4,
    },
    {
      id: 4,
      name: 'Sophia Lee',
      role: 'Travel Blogger',
      image: 'https://images.unsplash.com/photo-1531256379411-06c6d3a96d3c?auto=format&fit=crop&w=150',
      content: 'Great for tracking adventures around the world.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Oliver Brown',
      role: 'Photographer',
      image: 'https://images.unsplash.com/photo-1482849297070-9d62bc5b122c?auto=format&fit=crop&w=150',
      content: 'Stylish design and very practical.',
      rating: 4,
    },
    {
      id: 6,
      name: 'Isabella Green',
      role: 'Student',
      image: 'https://images.unsplash.com/photo-1603415526960-f3f62168ce27?auto=format&fit=crop&w=150',
      content: 'Helps me stay organized and active.',
      rating: 5,
    },
    {
      id: 7,
      name: 'Mason Clark',
      role: 'Tech Enthusiast',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150',
      content: 'A must-have for any tech lover.',
      rating: 5,
    },
    {
      id: 8,
      name: 'Emily Davis',
      role: 'Yoga Trainer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150',
      content: 'Great for monitoring my yoga sessions.',
      rating: 5,
    },
    {
      id: 9,
      name: 'Lucas Adams',
      role: 'Engineer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150',
      content: 'Excellent tracking features and sturdy design.',
      rating: 5,
    },
  ]);
});

export default router;
