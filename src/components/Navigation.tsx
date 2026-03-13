import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import haimiNavLogo from "@/assets/haimi-logo-nav.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "The Practice", path: "/practice" },
  { name: "Services", path: "/atelier" },
  { name: "Before & After", path: "/before-after" },
  { name: "Contact", path: "/concierge" },
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
              <Button 
                variant="secondary"
                size="sm" 
                className="bg-white/20 hover:bg-white/30 text-white border-0 text-xs tracking-wider rounded-full px-5"
                asChild
              >
                <a href="tel:+15164664464">Call Now</a>
              </Button>
              <Button 
                variant="outline"
                size="sm" 
                className="bg-transparent hover:bg-white/10 text-white border-white/60 hover:border-white text-xs tracking-wider rounded-full px-5"
                asChild
              >
                <Link to="/concierge">Schedule Appointment</Link>
              </Button>
              
              {/* Desktop Menu Button */}
              <button 
                className="ml-2 p-2 text-white hover:opacity-80 transition-opacity"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-background">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate to different sections of the website
                </SheetDescription>
                <div className="flex flex-col h-full pt-12">
                  <div className="flex flex-col gap-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "font-display text-2xl transition-colors duration-300",
                          location.pathname === link.path
                            ? "text-gold"
                            : "text-foreground hover:text-gold"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-auto pb-8 space-y-4">
                    <Button variant="luxury-gold-filled" size="lg" className="w-full" asChild>
                      <a href="tel:+15164664464">Call Now</a>
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
