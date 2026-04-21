import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Globe } from "lucide-react";
import acmLogo from "@/assets/acm-logo.png";

const Footer = () => {
  return (
    <footer id="footer" className="relative py-10 sm:py-16 border-t border-primary/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={acmLogo} 
                alt="SVKMIOT DHULE ACM Student Chapter" 
                className="h-12"
              />
              <h3 className="text-xl font-bold text-foreground">ACM Student Chapter</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Empowering students through competitive programming, workshops, and tech events.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">Mumbai-Agra Highway, Dhule – 424001, Maharashtra</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Rules & Guidelines", "Contact"].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-4 text-foreground">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              {[
               { Icon: Instagram, href: "https://www.instagram.com/acm_svkmiot/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/acm-student-chapter-svkm-s-iot/" },
                { Icon: Globe, href: "https://svkmiot.acm.org/" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary/30 bg-glass/30 backdrop-blur-sm flex items-center justify-center text-primary hover:text-neon-blue hover:neon-glow-box transition-all duration-300"                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <a 
              href="mailto:acm.svkmiot@svkm.ac.in" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">acm.svkmiot@svkm.ac.in</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary/20 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 SVKM IOT ACM Student Chapter. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Developed by <a href="https://www.linkedin.com/in/madhur-bhandarkar-9bb342288/" style={{color: "yellow"}}>Madhur Bhandarkar</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
