import { Star, Quote, TrendingUp, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.testimonial-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-grid-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Crypto Trader",
      quote: "The bot caught BLOB at $5K market cap. Turned my $500 into $10.6M. Life changed forever.",
      profit: "+2,120,000%",
      verified: true,
      avatar: "AC",
      bgGradient: "from-accent/20 to-accent/5"
    },
    {
      name: "Sarah Rodriguez",
      role: "DeFi Investor", 
      quote: "Missed every major pump until LazygraphAI. Now I'm catching 100x opportunities weekly.",
      profit: "+45,000%",
      verified: true,
      avatar: "SR",
      bgGradient: "from-primary/20 to-primary/5"
    },
    {
      name: "Marcus Thompson",
      role: "Portfolio Manager",
      quote: "Our fund deployed $2M through their system. Best performing strategy in our 15-year history.",
      profit: "+890%",
      verified: true,
      avatar: "MT",
      bgGradient: "from-secondary/20 to-secondary/5"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-data-flow"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-accent/30 to-transparent animate-data-flow delay-1000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/3 left-1/6 w-3 h-3 bg-accent/40 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-2 h-2 bg-primary/40 rounded-full animate-float delay-1000"></div>
        <TrendingUp className="absolute top-1/5 right-1/5 w-4 h-4 text-success/30 animate-float delay-500" />
        <Zap className="absolute bottom-1/5 left-1/5 w-5 h-5 text-accent/30 animate-float delay-1500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="text-foreground">Early Users Are Making</span>
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Life-Changing Money
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-space">
            Real results from beta testers who got early access
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card bg-gradient-to-br ${testimonial.bgGradient} backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-card hover:shadow-glow-accent transition-all duration-500 relative overflow-hidden group cursor-pointer opacity-0`}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm"></div>
              
              {/* Quote Icon with Enhanced Styling */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-10 h-10 text-accent/60 group-hover:text-accent transition-colors" />
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center font-orbitron font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                </div>
                
                <p className="text-foreground mb-8 text-lg leading-relaxed font-space group-hover:text-primary/90 transition-colors">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="font-bold text-foreground flex items-center gap-3 font-space">
                      {testimonial.name}
                      {testimonial.verified && (
                        <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="w-2 h-2 bg-background rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground font-space">
                      {testimonial.role}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-success font-orbitron group-hover:scale-110 transition-transform">
                      {testimonial.profit}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                      PROFIT
                    </div>
                  </div>
                </div>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 text-accent fill-current group-hover:scale-110 transition-transform"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
              </div>

              {/* Hover Particles */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity delay-100"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Beta Results Summary */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-10 max-w-4xl mx-auto shadow-glow-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `conic-gradient(from 0deg at 50% 50%, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)), hsl(var(--primary)))`,
                backgroundSize: '100px 100px'
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-foreground mb-8 font-orbitron">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Beta Testing Results
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-8 border border-primary/20 hover:scale-105 transition-transform duration-300">
                    <div className="text-5xl font-bold text-primary mb-4 font-orbitron group-hover:scale-110 transition-transform">
                      87%
                    </div>
                    <div className="text-foreground font-space text-lg font-semibold mb-2">
                      Win Rate
                    </div>
                    <div className="text-sm text-muted-foreground font-mono">
                      vs 15% market average
                    </div>
                    <div className="mt-4 h-2 bg-muted/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-primary rounded-full" style={{ width: '87%', animation: 'slide-in-right 2s ease-out' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl p-8 border border-accent/20 hover:scale-105 transition-transform duration-300">
                    <div className="text-5xl font-bold text-accent mb-4 font-orbitron group-hover:scale-110 transition-transform">
                      2,847x
                    </div>
                    <div className="text-foreground font-space text-lg font-semibold mb-2">
                      Average Winner
                    </div>
                    <div className="text-sm text-muted-foreground font-mono">
                      Based on 100+ successful trades
                    </div>
                    <div className="mt-4 flex justify-center">
                      <TrendingUp className="w-8 h-8 text-accent animate-bounce" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Counter Effect */}
              <div className="mt-8 inline-flex items-center px-8 py-4 bg-muted/50 border border-success/30 rounded-full">
                <div className="w-3 h-3 bg-success rounded-full mr-4 animate-pulse"></div>
                <span className="text-sm font-mono text-success font-bold">
                  LIVE: 127 USERS CURRENTLY PROFITABLE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;