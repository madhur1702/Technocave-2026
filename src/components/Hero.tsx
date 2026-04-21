import { Button } from "@/components/ui/button";
import svkmNewLogo from "@/assets/svkm-new-logo.png";
import acmLogo from "@/assets/acm-logo.png";
import acesLogo from "@/assets/aces-logo.png";
import svkmOldLogo from "@/assets/svkm-old-logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 sm:py-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />

      {/* Cyberpunk animated grid */}
      <div className="absolute inset-0 cyber-grid opacity-40" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-neon-blue/20 rounded-full blur-[80px] md:blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-neon-purple/20 rounded-full blur-[80px] md:blur-[120px] animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-accent/15 rounded-full blur-[60px] md:blur-[100px] animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 container mx-auto text-center">
        <div
          className="flex items-center justify-center gap-3 sm:gap-6 md:gap-10 mb-4 sm:mb-6 animate-fade-in flex-wrap"
        >
          <img src={svkmNewLogo} alt="SVKM Logo" className="h-14 sm:h-16 md:h-20 lg:h-28 object-contain animate-float-subtle" />
          <img src={acmLogo} alt="ACM Logo" className="h-14 sm:h-16 md:h-20 lg:h-28 object-contain animate-float-subtle" style={{ animationDelay: "0.5s" }} />
          <img src={acesLogo} alt="ACES Logo" className="h-14 sm:h-16 md:h-20 lg:h-28 object-contain animate-float-subtle" style={{ animationDelay: "1s" }} />
          <img src={svkmOldLogo} alt="SVKM Old Logo" className="h-14 sm:h-16 md:h-20 lg:h-28 object-contain animate-float-subtle" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
          <p className="text-sm sm:text-sm md:text-lg font-medium tracking-[0.15em] sm:tracking-[0.3em] uppercase text-neon-blue mb-3 md:mb-4">
            National Level Mega Computing Event
          </p>
        </div>

        {/* Title with animated neon glow */}
        <h1
          className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 animate-fade-in animate-title-glow gradient-text"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          TECHNOCAVE 2026
        </h1>

        <p
          className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-8 md:mb-12 animate-fade-in px-2"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          Organized by SVKM's Institute of Technology Dhule, ACM Student Chapter in
          Collaboration with Association of Computer Engineering Students (ACES)
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.6s", animationFillMode: "both" }}
        >
          <Button
            variant="neon"
            size="lg"
            className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-xl shimmer-hover"
            onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Events
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
