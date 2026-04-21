import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, IndianRupee, Phone, User, Lightbulb, Target, Star, Presentation, Clock, BookOpen, Award, Trophy, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { events } from "@/data/events";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [codeError, setCodeError] = useState("");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleCodeSubmit = () => {
    if (!event?.accessCode) return;
    if (codeInput.trim() === event.accessCode) {
      setCodeError("");
      setCodeModalOpen(false);
      setCodeInput("");
      window.open(event.eventLink || "#", "_blank");
    } else {
      setCodeError("Invalid code. Please try again.");
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-4">Event Not Found</h1>
          <Link to="/">
            <Button variant="neon">Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-28 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-blue transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          {/* Header */}
          <div className="glass-card gradient-border p-6 sm:p-8 md:p-12 neon-glow-box mb-8 animate-fade-in">
            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl font-black gradient-text mb-2">
              {event.name}
            </h1>
            <p className="text-accent text-base sm:text-lg italic">{event.tagline}</p>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { icon: IndianRupee, label: "Fee", value: event.fee },
              { icon: Users, label: "Team Size", value: event.teamSize },
              { icon: Calendar, label: "Date", value: event.date },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass-card p-4 text-center animate-fade-in">
                <Icon size={20} className="text-neon-blue mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">{label}</p>
                <p className="text-sm font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="glass-card p-8 mb-8 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Description</h2>
            <p className="text-muted-foreground leading-relaxed">{event.description}</p>
          </div>

          {/* Team Composition */}
          {event.teamComposition && (
            <div className="glass-card p-8 mb-8 animate-fade-in" style={{ animationDelay: "0.25s", animationFillMode: "both" }}>
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">Team Composition</h2>
              <p className="text-muted-foreground leading-relaxed">{event.teamComposition}</p>
            </div>
          )}

          {/* Extra Sections (Theme, Tools, etc.) */}
          {event.extraSections && event.extraSections.map((section, i) => (
            <div key={i} className="glass-card p-8 mb-8 animate-fade-in" style={{ animationDelay: `${0.25 + (i + 1) * 0.05}s`, animationFillMode: "both" }}>
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}

          {/* Judging Criteria */}
          {event.judgingCriteria && event.judgingCriteria.length > 0 && (
            <div className="glass-card p-8 mb-8 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
              <h2 className="font-heading text-xl font-bold text-foreground mb-6">Judging Criteria</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {event.judgingCriteria.map((criterion, i) => {
                  const icons = [Lightbulb, Target, Star, Presentation];
                  const Icon = icons[i % icons.length];
                  return (
                    <div key={i} className="glass-card p-5 border border-border/50 hover:border-neon-blue/30 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={18} className="text-neon-blue flex-shrink-0" />
                        <h3 className="font-heading text-base font-bold text-foreground">{criterion.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{criterion.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Competition Rounds */}
          {event.competitionRounds && event.competitionRounds.length > 0 && (
            <div className="glass-card p-8 mb-8 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
              <h2 className="font-heading text-xl font-bold text-foreground mb-6">Competition Rounds</h2>
              <div className="space-y-6">
                {event.competitionRounds.map((round) => (
                  <div key={round.roundNumber} className="glass-card p-6 border border-border/50 hover:border-neon-blue/30 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-neon-blue font-bold text-sm">R{round.roundNumber}</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-bold text-foreground">Round {round.roundNumber}: {round.title}</h3>
                        <p className="text-muted-foreground text-sm">{round.description}</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <h4 className="font-heading text-sm font-semibold text-foreground mb-2">Structure</h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <BookOpen size={14} className="text-neon-blue flex-shrink-0" />
                          <span className="text-muted-foreground">Type</span>
                        </div>
                        <span className="text-foreground">{round.type}</span>

                        {round.format && (
                          <>
                            <div className="flex items-center gap-2">
                              <Target size={14} className="text-neon-blue flex-shrink-0" />
                              <span className="text-muted-foreground">Format</span>
                            </div>
                            <span className="text-foreground">{round.format}</span>
                          </>
                        )}

                        <div className="flex items-center gap-2">
                          <Star size={14} className="text-neon-blue flex-shrink-0" />
                          <span className="text-muted-foreground">Marks</span>
                        </div>
                        <div className="text-foreground">
                          {round.marks.map((m, i) => (
                            <p key={i}>{m}</p>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <Award size={14} className="text-neon-blue flex-shrink-0" />
                          <span className="text-muted-foreground">Total Marks</span>
                        </div>
                        <span className="text-foreground">{round.totalMarks}</span>

                        <div className="flex items-center gap-2">
                          <Lightbulb size={14} className="text-neon-blue flex-shrink-0" />
                          <span className="text-muted-foreground">Topics</span>
                        </div>
                        <span className="text-foreground">{round.topics}</span>

                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-neon-blue flex-shrink-0" />
                          <span className="text-muted-foreground">Duration</span>
                        </div>
                        <span className="text-foreground">{round.duration}</span>
                      </div>

                      <div className="mt-3 pt-3 border-t border-border/50">
                        <p className="text-sm">
                          <span className="text-muted-foreground">Difficulty: </span>
                          <span className="text-neon-blue font-semibold">{round.difficulty}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rules & Guidelines - always show */}
          {event.rules.length > 0 && (
            <div className="glass-card p-8 mb-8 animate-fade-in" style={{ animationDelay: "0.35s", animationFillMode: "both" }}>
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">Rules & Guidelines</h2>
              <ul className="space-y-3">
                {event.rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1 w-2 h-2 rounded-full bg-neon-blue flex-shrink-0" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Winner Selection */}
          {event.winnerSelection && (
            <div className="glass-card p-8 mb-8 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
              <h2 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Trophy size={20} className="text-neon-blue" /> Winner Selection
              </h2>
              <ul className="space-y-3">
                {event.winnerSelection.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1 w-2 h-2 rounded-full bg-neon-blue flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Student Coordinators */}
         
          {/* Register CTA */}
          <div className="text-center animate-fade-in flex flex-col items-center gap-4" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
            <Button
              variant="neon"
              size="lg"
              className="text-lg px-16 py-7 rounded-xl"
              onClick={() => window.open("#", "_blank")}
            >
              Registration Closed
            </Button>

            {event.id === "code-o-thon" && (
              <Button
                variant="neon-outline"
                size="lg"
                className="text-lg px-12 py-6 rounded-xl"
                onClick={() => setCodeModalOpen(true)}
              >
                <KeyRound size={18} /> Enter Code
              </Button>
            )}
          </div>
        </div>
      </div>

      <Dialog open={codeModalOpen} onOpenChange={(open) => { setCodeModalOpen(open); if (!open) { setCodeError(""); setCodeInput(""); } }}>
        <DialogContent className="glass-card gradient-border">
          <DialogHeader>
            <DialogTitle className="font-heading gradient-text">Enter Access Code</DialogTitle>
            <DialogDescription>
              Enter the access code provided to access the {event.name} event.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Enter your code"
              value={codeInput}
              onChange={(e) => { setCodeInput(e.target.value); setCodeError(""); }}
              onKeyDown={(e) => { if (e.key === "Enter") handleCodeSubmit(); }}
              autoFocus
            />
            {codeError && (
              <p className="text-sm text-destructive">{codeError}</p>
            )}
          </div>
          <DialogFooter>
            <Button variant="neon" onClick={handleCodeSubmit}>
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default EventDetail;

