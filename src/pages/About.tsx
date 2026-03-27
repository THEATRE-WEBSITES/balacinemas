import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  const milestones = [
    { year: '2018', title: 'Foundation', desc: 'Bala Cinemas was established with a vision to bring premium cinema to Kalladikode.' },
    { year: '2020', title: 'Dolby Atmos Upgrade', desc: 'Introduced Dolby Atmos surround sound for an immersive audio experience.' },
    { year: '2022', title: 'Laser Projection', desc: 'Upgraded to Laser Triple Beam 3D projection — a first in the region.' },
    { year: '2024', title: 'Premium Remodel', desc: 'Complete renovation with recliner seating and a modern food court.' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="font-tech text-primary text-xs tracking-[0.3em] uppercase mb-2">Our Story</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">About <span className="text-gold-gradient">Bala Cinemas</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Born from a passion for cinema, Bala Cinemas has grown into Kerala's most sought-after
              movie destination — blending cutting-edge technology with warm hospitality.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex gap-6 mb-10"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center font-tech text-primary text-xs font-bold">
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-border/30 mt-2" />}
                </div>
                <div className="pb-6">
                  <h3 className="font-display text-lg font-bold mb-1">{m.title}</h3>
                  <p className="text-muted-foreground text-sm">{m.desc}</p>
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
