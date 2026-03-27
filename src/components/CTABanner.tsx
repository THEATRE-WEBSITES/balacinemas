import { motion } from 'framer-motion';

const BOOK_URL = 'https://in.bookmyshow.com/cinemas/kalladikode/bala-cinemas-dolby-atmos-laser-tripple-beam-3d/buytickets/BLCK/20260327';

export default function CTABanner() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.1)_0%,_transparent_70%)]" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Ready for the <span className="text-gold-gradient">Ultimate Experience?</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8">
              Book your tickets now and immerse yourself in cinema like never before.
            </p>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:bg-gold-bright transition-all hover:scale-105 active:scale-95 glow-gold-strong"
            >
              🎟 Book on BookMyShow
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
