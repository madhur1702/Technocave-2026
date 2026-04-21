import { Link } from "react-router-dom";
import { Calendar, Users, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { events } from "@/data/events";
import TiltCard from "@/components/TiltCard";
import ScrollReveal from "@/components/ScrollReveal";

const EventCard = ({ event, index }: { event: typeof events[0]; index: number }) => (
  <ScrollReveal delay={index * 0.1}>
    <TiltCard
      className="glass-card gradient-border p-6 group hover:neon-glow-box transition-all duration-500"
      style={{ boxShadow: "0 4px 20px hsl(var(--neon-blue) / 0.05)" }}
    >
      <h3 className="font-heading text-xl font-bold text-foreground mb-1 group-hover:text-neon-blue transition-colors">
        {event.name}
      </h3>
      <p className="text-sm text-accent italic mb-4">{event.tagline}</p>

      <div className="space-y-2 mb-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <IndianRupee size={14} className="text-neon-blue" />
          <span>{event.fee}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={14} className="text-neon-blue" />
          <span>{event.teamSize}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={14} className="text-neon-blue" />
          <span>{event.date}</span>
        </div>
      </div>

      <Link to={`/event/${event.id}`}>
        <Button variant="neon" size="sm" className="w-full rounded-lg shimmer-hover">
          More Info
        </Button>
      </Link>
    </TiltCard>
  </ScrollReveal>
);

const Events = () => {
  return (
    <section id="events" className="py-12 sm:py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4">
              Events
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-neon-blue to-accent mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
