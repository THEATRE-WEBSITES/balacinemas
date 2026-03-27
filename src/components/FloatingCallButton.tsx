import { PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCallButton() {
  return (
    <AnimatePresence>
      <motion.a
        href="tel:+"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-elevation-2 hover:bg-gold-bright transition-all glow-gold hover:scale-110 active:scale-95"
        aria-label="Call Us"
        title="Call Theatre"
      >
        <PhoneCall className="w-6 h-6" />
      </motion.a>
    </AnimatePresence>
  );
}
