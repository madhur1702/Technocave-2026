import ScrollReveal from "@/components/ScrollReveal";
import chaicodeLogo from "@/assets/chaicode-white.png";
import sumagoLogo from "@/assets/sumago-logo.jpeg";

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-12 sm:py-16 md:py-24 relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[300px] bg-neon-purple/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
              Sponsors
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="glass-card gradient-border p-6 sm:p-8 md:p-10 max-w-2xl mx-auto glow-border-pulse transition-shadow duration-500 hover:shadow-[0_0_40px_hsl(var(--neon-blue)/0.2),0_0_80px_hsl(var(--neon-purple)/0.1)] overflow-hidden">
            <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-14">
              <img
                src={chaicodeLogo}
                alt="ChaiCode"
                className="h-10 sm:h-14 md:h-16 w-auto max-w-[40%] object-contain shrink-0"
              />
              <img
                src={sumagoLogo}
                alt="Sumago Infotech Pvt. Ltd."
                className="h-10 sm:h-14 md:h-16 w-auto max-w-[40%] object-contain shrink-0 rounded"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Sponsors;
