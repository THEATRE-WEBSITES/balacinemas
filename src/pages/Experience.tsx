import { motion } from 'framer-motion';
import { Volume2, Projector, Armchair, UtensilsCrossed, Car } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sections = [
  { icon: Volume2, title: 'Dolby Atmos Sound', description: 'Experience sound that moves around and above you with Dolby Atmos. Every whisper, explosion, and musical note is placed with precision in a three-dimensional space.' },
  { icon: Projector, title: 'Laser Triple Beam 3D', description: 'Our state-of-the-art laser projection delivers extraordinary brightness, contrast, and color accuracy — making every frame a masterpiece.' },
  { icon: Armchair, title: 'Premium Seating', description: 'Sink into luxurious recliner seats with adjustable headrests and ample legroom. Every seat is designed for the best viewing angle.' },
  { icon: UtensilsCrossed, title: 'Food Court', description: 'From gourmet popcorn to full meals, our food court offers a diverse menu to complement your cinema experience.' },
  { icon: Car, title: 'Parking', description: 'Arrive stress-free with our spacious, well-lit parking area accommodating hundreds of vehicles with easy theatre access.' },
];

export default function Experience() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="font-tech text-primary text-xs tracking-[0.3em] uppercase mb-2">Discover</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold">The <span className="text-gold-gradient">Experience</span></h1>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card rounded-xl p-8 flex flex-col md:flex-row items-start gap-6 hover:glow-gold transition-all"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
