import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <section id="register" className="py-24 relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon-blue/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card gradient-border max-w-2xl mx-auto p-12 text-center neon-glow-box">
          <h2 className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-4">
            Ready to Compete?
          </h2>
          <p className="text-muted-foreground mb-8 text-base">
            Join hundreds of students from across the nation. Register now and showcase your skills!
          </p>
          <Button
            variant="neon"
            size="lg"
            className="text-lg px-12 py-6 rounded-xl"
            onClick={() => window.open("#", "_blank")}
          >
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Register;
