import { motion } from 'framer-motion';
import { Volume2, Armchair, UtensilsCrossed, Car, Zap } from 'lucide-react';

const features = [
  {
    icon: Volume2,
    title: 'Dolby Atmos',
    subtitle: 'Laser Triple Beam 3D',
    description: 'Immersive 360° surround sound with crystal-clear laser 3D projection.',
    img: '/cinema_laser.png',
  },
  {
    icon: Armchair,
    title: 'Premium Seating',
    subtitle: 'Recliner Comfort',
    description: 'Plush recliners with ample legroom designed for maximum comfort.',
    img: '/cinema_seating.png',
  },
  {
    icon: UtensilsCrossed,
    title: 'Modern Food Court',
    subtitle: 'Gourmet Snacks',
    description: 'Fresh beverages and a wide selection of cuisines to enhance your visit.',
    img: '/cinema_food.png',
  },
  {
    icon: Car,
    title: 'Spacious Parking',
    subtitle: 'Hassle-Free Access',
    description: 'Ample parking for cars and two-wheelers with easy theatre access.',
    img: '/cinema_parking.png',
  },
];

// All images doubled for seamless infinite loop
const marqueeImages = [
  { src: '/cinema_seating.png', label: 'Premium Seating' },
  { src: '/cinema_laser.png', label: 'Laser 3D Projection' },
  { src: '/cinema_food.png', label: 'Food Court' },
  { src: '/cinema_parking.png', label: 'Parking' },
  { src: '/cinema_sound.png', label: 'Dolby Atmos' },
  // duplicated for loop
  { src: '/cinema_seating.png', label: 'Premium Seating' },
  { src: '/cinema_laser.png', label: 'Laser 3D Projection' },
  { src: '/cinema_food.png', label: 'Food Court' },
  { src: '/cinema_parking.png', label: 'Parking' },
  { src: '/cinema_sound.png', label: 'Dolby Atmos' },
];

export default function Highlights() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,175,55,0.07)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p className="font-tech text-primary text-xs tracking-[0.3em] uppercase mb-2">Why Choose Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">The Bala Experience</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
            Step inside Kerala's most advanced cinema — where every frame feels alive.
          </p>
        </motion.div>
      </div>

      {/* ── Infinite Marquee Strip ── */}
      <div className="relative w-full overflow-hidden mt-8 mb-16">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <motion.div 
          className="flex gap-4 w-max"
          animate={{ x: [0, -1000] }} // We'll use a percentage based translation below 
          style={{ width: 'max-content' }}
        >
          {/* Framer motion marquee implementation */}
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60, // 60 seconds - very slow and cinematic
                ease: "linear",
              },
            }}
          >
            {marqueeImages.map((img, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-72 h-44 rounded-xl overflow-hidden group"
                style={{ border: '1px solid rgba(212,175,55,0.2)' }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-4 font-tech text-xs tracking-widest text-primary uppercase">
                  {img.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Feature Cards ── */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{ border: '1px solid rgba(212,175,55,0.18)' }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-45"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(216,40%,8%)] via-[hsl(216,40%,10%)]/80 to-[hsl(216,40%,12%)]/60" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col gap-3 min-h-[200px] justify-end">
                <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center mb-1 group-hover:bg-primary/30 transition-colors border border-primary/20">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold leading-tight">{f.title}</h3>
                  <p className="font-tech text-[10px] text-primary tracking-widest uppercase mb-2">{f.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>

              {/* Gold glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 30px rgba(212,175,55,0.08)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
