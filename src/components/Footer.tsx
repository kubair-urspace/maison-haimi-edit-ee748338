import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import haimiWordmark from "@/assets/haimi-wordmark.png";
import abdsmSeal from "@/assets/abdsm-diplomate-seal.png";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-secondary">
      {/* Map Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] bg-secondary">
        {/* Top fade overlay */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-secondary to-transparent z-10 pointer-events-none" />
        {/* Bottom fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-secondary to-transparent z-10 pointer-events-none" />
        {/* Sepia/warm tint overlay */}
        <div className="absolute inset-0 bg-accent/10 mix-blend-multiply z-[5] pointer-events-none" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.8!2d-73.728!3d40.789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s233%20East%20Shore%20Rd%2C%20Great%20Neck%2C%20NY%2011023!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "saturate(0.3) sepia(0.2) brightness(1.05)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Haimi Dental Aesthetics - 233 East Shore Rd, Great Neck, NY"
          className="w-full h-full"
        />
        {/* Get Directions Button */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=233+East+Shore+Rd+Suite+111+Great+Neck+NY+11023"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gold hover:bg-gold-dark text-white font-body text-xs tracking-[0.2em] uppercase px-8 py-3 shadow-lg transition-colors duration-300 flex items-center gap-2"
        >
          <MapPin className="h-4 w-4" />
          Get Directions
        </a>
      </div>

      {/* Footer Content */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/">
                <img src={haimiWordmark} alt="Haimi Dental Aesthetics" className="h-14" />
              </Link>
              <p className="mt-4 text-muted-foreground font-body text-sm leading-relaxed">
                Premium cosmetic and aesthetic dentistry in Great Neck, NY.
              </p>
              {/* ABDSM Diplomate Seal */}
              <div className="mt-5">
                <img
                  src={abdsmSeal}
                  alt="Diplomate, American Board of Dental Sleep Medicine"
                  className="h-16 w-16"
                />
              </div>
              {/* Social Media */}
              <div className="mt-5 flex gap-3">
                <a href="https://instagram.com/drelizahaimi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border hover:border-gold rounded-full flex items-center justify-center text-muted-foreground hover:text-gold transition-all duration-300">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://facebook.com/ElizaHaimiDDS" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border hover:border-gold rounded-full flex items-center justify-center text-muted-foreground hover:text-gold transition-all duration-300">
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg mb-6 text-foreground">Explore</h4>
              <nav className="flex flex-col gap-3">
                <Link to="/practice" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  The Practice
                </Link>
                <Link to="/services" className="text-muted-foreground hover:text-gold transition-colors text-sm">
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
                <a href="mailto:info@haimidental.com" className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors text-sm">
                  <Mail className="h-4 w-4" />
                  info@haimidental.com
                </a>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>233 East Shore Rd, Suite 111<br />Great Neck, NY 11023</span>
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
                    <p>Thursday: 8:00 AM – 3:00 PM</p>
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
      </div>
    </footer>
  );
};

export default Footer;
