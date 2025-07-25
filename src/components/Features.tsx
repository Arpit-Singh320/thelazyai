import { Brain, Zap, Shield, TrendingUp, Target, Clock } from "lucide-react";
import { useEffect, useRef } from "react";

const Features = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-grid-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (grid) {
      observer.observe(grid);
    }

    return () => {
      if (grid) {
        observer.unobserve(grid);
      }
    };
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI Pattern Recognition",
      description: "Advanced machine learning identifies BLOB-level opportunities before they explode",
      color: "text-primary",
      bgGradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Zap,
      title: "Lightning Execution",
      description: "Sub-second analysis and trade execution to catch opportunities at $5K, not $500K",
      color: "text-accent",
      bgGradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Shield,
      title: "Rug Protection",
      description: "Multi-layer security analysis prevents scams and protects your capital",
      color: "text-secondary",
      bgGradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Real-time profit tracking with detailed analytics and optimization insights",
      color: "text-success",
      bgGradient: "from-success/20 to-success/5"
    },
    {
      icon: Target,
      title: "Smart Position Sizing",
      description: "AI-optimized allocation based on confidence levels and risk management",
      color: "text-primary",
      bgGradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Never sleep, never miss. Continuous scanning of all new token launches",
      color: "text-accent",
      bgGradient: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-accent/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI-Powered Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-space">
            Built on the proven <span className="text-accent font-mono font-bold">$6.8M</span> bot strategies, enhanced with cutting-edge AI
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-card hover:shadow-glow-primary transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 group cursor-pointer relative overflow-hidden opacity-0`}
            >
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-muted/80 to-muted/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color} group-hover:rotate-12 transition-transform duration-300`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 font-space group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-space text-sm group-hover:text-foreground transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Proof Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-accent/20 rounded-2xl p-10 max-w-5xl mx-auto shadow-glow-accent relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px),
                                  radial-gradient(circle at 75% 75%, hsl(var(--accent)) 2px, transparent 2px)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-foreground mb-2 font-orbitron">
                Proven Track Record
              </h3>
              <p className="text-muted-foreground mb-8 font-space">
                Real verified returns from documented trades
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { value: "943x", label: "FRIC Token Return", color: "text-accent", bg: "from-accent/20" },
                  { value: "2,227x", label: "FATHA Token Return", color: "text-primary", bg: "from-primary/20" },
                  { value: "21,320x", label: "BLOB Token Return", color: "text-success", bg: "from-success/20" }
                ].map((stat, index) => (
                  <div key={index} className={`bg-gradient-to-br ${stat.bg} to-transparent rounded-xl p-6 border border-border/30 hover:scale-105 transition-transform duration-300`}>
                    <div className={`text-4xl font-bold ${stat.color} mb-2 font-orbitron`}>
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-space text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 inline-flex items-center px-6 py-3 bg-muted/50 border border-primary/30 rounded-full">
                <div className="w-2 h-2 bg-success rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-mono text-success">VERIFIED BY CRYPTOPOLITAN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;