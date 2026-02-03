import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-3xl tracking-widest text-gold">
              HAIMI
            </Link>
            <p className="mt-2 font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Dental Studio
            </p>
            <p className="mt-4 text-muted-foreground font-body text-sm leading-relaxed">
              Comprehensive family and cosmetic dentistry in Great Neck, NY.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6 text-foreground">Explore</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/practice" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                The Practice
              </Link>
              <Link to="/atelier" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Services
              </Link>
              <Link to="/concierge" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Book an Appointment
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-6 text-foreground">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+15164664464" className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors text-sm">
                <Phone className="h-4 w-4" />
                (516) 466-4464
              </a>
              <a href="mailto:info@maisonhaimi.com" className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors text-sm">
                <Mail className="h-4 w-4" />
                info@maisonhaimi.com
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>7 Bond St #1D<br />Great Neck, NY 11021</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg mb-6 text-foreground">Hours</h4>
            <div className="flex flex-col gap-2 text-muted-foreground text-sm">
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Monday & Tuesday: 8:00 AM – 5:00 PM</p>
                  <p>Wednesday: 8:00 AM – 1:00 PM</p>
                  <p>Thursday: 8:00 AM – 4:30 PM</p>
                  <p>Friday – Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} Eliza Haimi DDS. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs">
              Designed with care in Great Neck, NY
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
