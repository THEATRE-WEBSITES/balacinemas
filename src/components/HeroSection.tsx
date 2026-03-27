import { motion } from 'framer-motion';

const BOOK_URL = 'https://in.bookmyshow.com/cinemas/kalladikode/bala-cinemas-dolby-atmos-laser-tripple-beam-3d/buytickets/BLCK/20260327';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Lighter dark overlay to keep text readable but show more video */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/80 relative z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-tech text-primary text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
          >
            Dolby Atmos · Laser · Triple Beam 3D
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Experience Cinema
            <br />
            <span className="text-gold-gradient">Beyond Reality</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl"
          >
            Kerala's premier cinematic destination — where cutting-edge technology 
            meets unparalleled comfort for an unforgettable movie experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-start"
          >
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-gold-bright transition-all hover:scale-105 active:scale-95 glow-gold-strong"
            >
              🎬 Book Your Tickets
            </a>
            <a
              href="#now-showing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg glass-card text-foreground font-semibold text-base hover:border-primary/40 transition-all hover:scale-105"
            >
              Now Showing
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 rounded-full bg-primary/60" />
        </div>
      </motion.div>
    </section>
  );
}
