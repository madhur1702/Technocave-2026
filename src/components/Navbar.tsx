import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import acmLogo from "@/assets/acm-logo.png";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Events", href: "/#events" },
  { label: "Sponsors", href: "/#sponsors" },
  { label: "Contact", href: "/#footer" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    if (location.pathname !== "/") return; // will navigate via Link
    const id = href.replace("/#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b border-glass-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <img src={acmLogo} alt="ACM Logo" className="h-7 sm:h-8 md:h-10 object-contain flex-shrink-0" />
          <span className="font-heading text-sm sm:text-base md:text-lg font-bold text-foreground truncate">SVKM IOT Dhule</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    handleClick(l.href);
                  }
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-neon-blue after:to-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-card border-t border-glass-border animate-fade-in">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      handleClick(l.href);
                    } else {
                      setOpen(false);
                    }
                  }}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
