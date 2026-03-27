import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-gold-gradient font-display text-xl font-bold">BALA CINEMAS</span>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              Kerala's premium cinematic destination with Dolby Atmos, Laser Triple Beam 3D projection.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold mb-3 text-sm">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['/', '/about', '/experience', '/gallery', '/contact'].map((p) => (
                <Link key={p} to={p} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {p === '/' ? 'Home' : p.slice(1).charAt(0).toUpperCase() + p.slice(2)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold mb-3 text-sm">Contact</h4>
            <div className="flex items-start gap-2 text-muted-foreground text-sm mb-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>Palakkad Highway, Kalladikode, Near Kalladikode Police Station, Kerala 678596</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span>Contact Theatre</span>
            </div>
          </div>
        </div>
        <div className="border-t border-border/20 mt-8 pt-6 text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} Bala Cinemas. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
