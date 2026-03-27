import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

const BOOK_URL = 'https://in.bookmyshow.com/cinemas/kalladikode/bala-cinemas-dolby-atmos-laser-tripple-beam-3d/buytickets/BLCK/20260327';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-gold-gradient font-display text-xl font-bold tracking-wide">BALA CINEMAS</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === l.to ? 'text-primary' : 'text-muted-foreground'}`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-gold-bright transition-all hover:scale-105 active:scale-95 glow-gold"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-2" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-border/20 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm py-2 ${location.pathname === l.to ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm text-center glow-gold"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
