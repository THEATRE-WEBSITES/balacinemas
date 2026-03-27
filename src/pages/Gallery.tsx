import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const images = [
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80',
  'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&q=80',
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80',
  'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=600&q=80',
  'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=80',
  'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=600&q=80',
  'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80',
  'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&q=80',
  'https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=600&q=80',
  'https://images.unsplash.com/photo-1460881680858-30d872d5b530?w=600&q=80',
  'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&q=80',
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80',
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <p className="font-tech text-primary text-xs tracking-[0.3em] uppercase mb-2">Explore</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold">Our <span className="text-gold-gradient">Gallery</span></h1>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelected(src)}
                className="aspect-square overflow-hidden rounded-xl cursor-pointer glass-card"
              >
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-foreground" aria-label="Close">
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selected.replace('w=600', 'w=1200')}
              alt="Gallery full"
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
