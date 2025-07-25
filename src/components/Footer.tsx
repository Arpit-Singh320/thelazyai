import { Bot, Mail, Twitter, Github, MessageCircle, Zap, TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-card to-card/80 border-t border-border/50 py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-3 h-3 bg-accent/30 rounded-full animate-float delay-1000"></div>
        <Zap className="absolute top-1/3 right-1/4 w-4 h-4 text-accent/20 animate-float delay-500" />
        <TrendingUp className="absolute bottom-1/3 left-1/4 w-4 h-4 text-primary/20 animate-float delay-1500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6 group">
              <div className="relative">
                <Bot className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-3xl font-bold text-foreground font-orbitron">
                Lazygraph<span className="text-accent">AI</span>
              </span>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed font-space">
              The ultimate AI-powered meme coin trading ecosystem. Never miss another 
              life-changing opportunity like BLOB's <span className="text-accent font-mono font-bold">21,320x</span> return.
            </p>
            
            <div className="flex gap-6">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: MessageCircle, href: "#", label: "Discord" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-12 h-12 bg-muted/50 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-foreground mb-6 font-space text-lg">
              Product
            </h3>
            <ul className="space-y-4">
              {[
                "Features",
                "Pricing", 
                "Enterprise",
                "API Docs"
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-space hover:translate-x-1 transform inline-block relative group"
                  >
                    {item}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-6 font-space text-lg">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 bg-muted/50 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-mono text-sm">hello@lazygraphai.com</span>
              </li>
              {[
                "Support",
                "Partnership", 
                "Press Kit"
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-space hover:translate-x-1 transform inline-block relative group"
                  >
                    {item}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-border/30 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <p className="text-muted-foreground text-sm font-space">
                © 2024 LazygraphAI. All rights reserved.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-muted/30 border border-accent/20 rounded-full">
                <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs font-mono text-success">
                  NOT FINANCIAL ADVICE
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              {[
                "Privacy Policy",
                "Terms of Service", 
                "Risk Disclosure"
              ].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-space relative group"
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Performance Disclaimer */}
          <div className="mt-8 p-6 bg-gradient-to-br from-muted/30 to-muted/10 border border-border/30 rounded-xl">
            <p className="text-xs text-muted-foreground text-center font-space leading-relaxed">
              <span className="font-bold text-accent">RISK DISCLOSURE:</span> Trading cryptocurrencies involves substantial risk. 
              Past performance does not guarantee future results. The 21,320x BLOB return is a historical example and not typical. 
              Only invest what you can afford to lose. <span className="text-primary font-mono">AI predictions are not guaranteed.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;