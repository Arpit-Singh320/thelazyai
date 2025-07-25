import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronRight, Zap, TrendingUp, Bot, Sparkles, ArrowRight } from "lucide-react";
import Typewriter from "@/components/Typewriter";
import MatrixRain from "@/components/MatrixRain";
import AnimatedGrid from "@/components/AnimatedGrid";
import InteractiveFloatingElements from "@/components/InteractiveFloatingElements";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle email submission
    console.log("Email submitted:", email);
  };

  const typewriterTexts = [
    "BLOB: 21,320x Returns",
    "FRIC: 943x Profits",
    "FATHA: 2,227x Gains",
    "Next 10,000x Winner"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Animated Grid */}
      <AnimatedGrid />

      {/* Interactive Floating Elements */}
      <InteractiveFloatingElements />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo with Hologram Effect */}
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            <img
              src="/lovable-uploads/60352080-835e-449f-87ac-2764711a13a4.png"
              alt="LazygraphAI"
              className="mx-auto h-44 w-auto animate-hologram"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-full blur-xl animate-pulse-glow"></div>
          </div>
        </div>

        {/* Main Headline with Enhanced Typography */}
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-primary bg-clip-text text-transparent block mb-2">
            The Future of
          </span>
          <span className="text-foreground font-space">AI Crypto Trading</span>
        </h1>

        {/* Typewriter Subheadline */}
        <div className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-slide-up delay-200">
          <span className="text-foreground">AI detects: </span>
          <Typewriter
            texts={typewriterTexts}
            speed={100}
            deleteSpeed={50}
            delayBetweenTexts={2000}
            className="text-accent font-bold font-mono"
          />
        </div>

        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up delay-300">
          Never miss another opportunity. Our AI scans 500+ tokens daily to find the next life-changing trade.
        </p>

        {/* Enhanced Key Stats with Grid Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {[
            { icon: Zap, value: "21,320x", label: "Max Return (BLOB)", color: "text-accent", delay: "delay-400" },
            { icon: TrendingUp, value: "$6.8M", label: "Bot Profits (30 days)", color: "text-primary", delay: "delay-500" },
            { icon: Bot, value: "500+", label: "Tokens Scanned Daily", color: "text-secondary", delay: "delay-700" }
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-card border border-border rounded-xl p-6 shadow-card hover:shadow-glow-primary transition-all duration-500 hover:transform hover:scale-105 animate-grid-in ${stat.delay} group cursor-pointer`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-muted transition-colors">
                  <stat.icon className={`w-6 h-6 ${stat.color} group-hover:scale-110 transition-transform`} />
                </div>
              </div>
              <div className={`text-3xl font-bold text-foreground mb-1 font-orbitron ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground font-space text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Email Signup */}
        <div className="max-w-lg mx-auto mb-8 animate-slide-up delay-700">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-glow-primary">
            <h3 className="text-xl font-bold text-foreground mb-4 font-space">
              Get Early Access
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email for early access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-input/80 backdrop-blur-sm border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-space"
                required
              />
              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="px-6 font-space font-semibold"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>

        {/* Enhanced Coming Soon Badge */}
        <div className="inline-flex items-center px-8 py-4 bg-gradient-accent/20 border border-accent/30 rounded-full text-accent font-semibold animate-pulse-glow font-mono text-lg backdrop-blur-sm">
          <div className="w-3 h-3 bg-accent rounded-full mr-4 animate-ping"></div>
          <span className="animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-accent">
            AI LAUNCH IMMINENT
          </span>
        </div>

        {/* Social Proof with Enhanced Typography */}
        <p className="text-sm text-muted-foreground mt-8 animate-fade-in delay-1000 font-space">
          <span className="font-mono text-primary">50,000+</span> traders preparing for the AI revolution
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-muted-foreground rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default Hero;