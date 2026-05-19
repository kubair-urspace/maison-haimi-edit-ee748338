import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, ChevronDown } from "lucide-react";
import haimiNavLogo from "@/assets/haimi-logo-nav.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Meet Us", path: "/meet-us" },
  { name: "Services", path: "/services" },
  { name: "The Practice", path: "/practice" },
  { name: "Before & After", path: "/before-after" },
  { name: "Contact Us", path: "/concierge" },
];

const desktopPrimaryLinks: { name: string; path: string; isServices?: boolean }[] = [
  { name: "Services", path: "/services", isServices: true },
  { name: "The Practice", path: "/practice" },
  { name: "Before & After", path: "/before-after" },
];

const serviceDropdown = [
  { name: "Oral Health and Longevity", path: "/services/preventative" },
  { name: "Porcelain Veneers & Smile Design", path: "/services/veneers" },
  { name: "Aesthetic and Restorative Dentistry", path: "/services/aesthetic-restorative" },
  { name: "Implant and Surgical Care", path: "/services/implant-surgical" },
  { name: "Full Mouth Rehabilitation & Smile Makeover", path: "/services/fullmouth" },
  { name: "Invisalign®", path: "/services/invisalign" },
  { name: "Sleep Apnea & Snoring", path: "/services/sleep" },
  { name: "Facial Aesthetics & Therapeutic Botox", path: "/services/botox" },
  { name: "Sedation & Comfort-Focused Dentistry", path: "/services/sedation" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gold">
        <nav className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo with Monogram */}
            <Link
              to="/"
              className="flex items-center hover:opacity-80 transition-opacity duration-300"
            >
              <img src={haimiNavLogo} alt="Haimi Dental Aesthetics" className="h-10 md:h-12" />
            </Link>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              {/* Primary nav links */}
              <div className="hidden lg:flex items-center gap-6 mr-4">
                {desktopPrimaryLinks.map((link) => {
                  if (link.isServices) {
                    return (
                      <div key={link.path} className="relative group">
                        <Link
                          to={link.path}
                          className={cn(
                            "flex items-center gap-1 font-body text-sm tracking-[0.15em] uppercase transition-colors duration-300 py-4",
                            location.pathname.startsWith("/services")
                              ? "text-white"
                              : "text-white/90 hover:text-white"
                          )}
                        >
                          {link.name}
                          <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
                        </Link>
                        {/* Dropdown */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                          <div className="w-[320px] bg-background border border-gold/30 shadow-2xl py-3">
                            {serviceDropdown.map((s) => (
                              <Link
                                key={s.path}
                                to={s.path}
                                className="block px-5 py-2.5 font-body text-sm text-foreground hover:text-gold hover:bg-sand/60 transition-colors duration-200"
                              >
                                {s.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={cn(
                        "font-body text-sm tracking-[0.15em] uppercase transition-colors duration-300",
                        location.pathname === link.path
                          ? "text-white"
                          : "text-white/90 hover:text-white"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 hover:text-white text-xs tracking-[0.15em] uppercase rounded-full px-4 gap-2"
                asChild
              >
                <a href="tel:+15164664464">
                  <Phone className="h-3.5 w-3.5" />
                  Call Us
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-white text-gold hover:bg-white/90 border-0 text-xs tracking-[0.15em] uppercase rounded-full px-5"
                asChild
              >
                <Link to="/concierge">Schedule Appointment</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-background overflow-y-auto">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate to different sections of the website
                </SheetDescription>
                <div className="flex flex-col h-full pt-12">
                  <div className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <div key={link.path}>
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "font-display text-2xl transition-colors duration-300 block",
                            location.pathname === link.path
                              ? "text-gold"
                              : "text-foreground hover:text-gold"
                          )}
                        >
                          {link.name}
                        </Link>
                        {link.name === "Services" && (
                          <div className="mt-3 ml-2 flex flex-col gap-2 border-l border-gold/30 pl-4">
                            {serviceDropdown.map((s) => (
                              <Link
                                key={s.path}
                                to={s.path}
                                onClick={() => setIsOpen(false)}
                                className="font-body text-sm text-foreground/80 hover:text-gold transition-colors"
                              >
                                {s.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pb-8 space-y-4">
                    <Button variant="luxury-gold-filled" size="lg" className="w-full gap-2" asChild>
                      <a href="tel:+15164664464">
                        <Phone className="h-4 w-4" />
                        Call Us
                      </a>
                    </Button>
                    <Button variant="luxury" size="lg" className="w-full" asChild>
                      <Link to="/concierge" onClick={() => setIsOpen(false)}>
                        Schedule Appointment
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      {/* Mobile Fixed Phone Button */}
      <a
        href="tel:+15164664464"
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-gold text-cream rounded-full flex items-center justify-center shadow-lg hover:bg-gold-dark transition-colors duration-300"
        aria-label="Call us"
      >
        <Phone className="h-5 w-5" />
      </a>
    </>
  );
};

export default Navigation;
