import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text">
              About Technocave
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-neon-blue to-accent mx-auto mb-6 sm:mb-8 rounded-full" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Technocave is the flagship national-level computing event organized by the ACM Student
              Chapter of SVKM's Institute of Technology, Dhule. It brings together innovative
              thinkers, coders, designers, and developers from across the country to compete in
              exciting technical competitions and showcase their creativity and technical skills.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
