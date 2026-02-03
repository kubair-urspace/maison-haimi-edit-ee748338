import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "The Practice", path: "/practice" },
  { name: "Services", path: "/atelier" },
  { name: "Contact", path: "/concierge" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-cream/98 backdrop-blur-md border-b border-border/50 shadow-sm py-2"
            : "bg-transparent py-4"
        )}
      >
        <nav className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Hidden on homepage when not scrolled */}
            <Link
              to="/"
              className={cn(
                "font-display text-xl md:text-2xl tracking-widest text-charcoal hover:text-gold transition-all duration-300",
                location.pathname === "/" && !isScrolled ? "opacity-0" : "opacity-100"
              )}
            >
              HAIMI
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "font-body text-xs tracking-[0.2em] uppercase transition-colors duration-300",
                    location.pathname === link.path
                      ? "text-gold"
                      : isScrolled 
                        ? "text-charcoal hover:text-gold"
                        : "text-charcoal/80 hover:text-gold"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <Button 
                variant="luxury-gold-filled" 
                size="sm" 
                className="text-xs tracking-wider"
                asChild
              >
                <a href="tel:+15164664464">Call Now</a>
              </Button>
              <Button 
                variant="luxury" 
                size="sm" 
                className="text-xs tracking-wider"
                asChild
              >
                <Link to="/concierge">Schedule Appointment</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Open menu">
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
