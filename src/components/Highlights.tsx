import { motion } from 'framer-motion';
import { Volume2, Armchair, UtensilsCrossed, Car } from 'lucide-react';

const features = [
  {
    icon: Volume2,
    title: 'Dolby Atmos Laser Triple Beam 3D',
    description: 'Immersive surround sound with crystal-clear laser projection for the ultimate 3D experience.',
  },
  {
    icon: Armchair,
    title: 'Premium Seating',
    description: 'Plush recliner seats with ample legroom designed for maximum comfort.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Modern Food Court',
    description: 'Gourmet snacks, fresh beverages, and a wide selection of cuisines to enhance your visit.',
  },
  {
    icon: Car,
    title: 'Spacious Parking',
    description: 'Ample parking space for cars and two-wheelers with easy access to the theatre.',
  },
];

export default function Highlights() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,175,55,0.05)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-tech text-primary text-xs tracking-[0.3em] uppercase mb-2">Why Choose Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">The Bala Experience</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-xl p-6 text-center group hover:glass-card-hover transition-all hover:glow-gold cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-base font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
