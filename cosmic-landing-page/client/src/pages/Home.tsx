import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react";
import { useState, useEffect } from "react";
// @ts-ignore - wouter types are available but IDE cache may not recognize them
import { Link } from "wouter";

/**
 * Cosmic Odyssey Landing Page
 * Design: Ethereal Nebula Mysticism
 * 
 * Core Design Elements:
 * - Deep indigo and midnight blue backgrounds
 * - Vibrant magenta, purple, and cyan accents
 * - Asymmetric, flowing compositions
 * - Layered depth with translucent overlays
 * - Smooth scroll animations and floating effects
 * - Glowing text and cosmic particle effects
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-3xl font-black tracking-tighter">GAPLESS [-]</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/features" 
              className="text-sm hover:text-primary transition cursor-pointer"
            >
              Features
            </Link>
            <a href="#about" className="text-sm hover:text-primary transition">
              About
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition">
              Contact
            </a>
            <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-nebula.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        {/* Floating Orbs - Decorative Elements */}
        <div className="absolute inset-0 z-1 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl float-animation" />
          <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-secondary/10 blur-3xl float-animation" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-20 left-1/2 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl float-animation" style={{ animationDelay: "4s" }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container text-center space-y-8 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight glow-text">
          YOUR NIGHT SHIFT, <span className="gradient-text">ANOTHER</span> CONTINENT'S WORKDAY.
          </h1>
          <p className="text-lg md:text-2xl font-bold text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          When your NIGHT ends, their PRODUCTION begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 pulse-glow">
              Start Exploring <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary">
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/starfield-abstract.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />

        <div className="relative z-10 container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Services</h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Experience the power of cosmic innovation
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Timezone Intelligence",
                description: "Visualize global capacity windows in real-time. See when your machines are idle and when demand peaks on the other side of the world.",
              },
              {
                icon: Zap,
                title: "Automated Compliance & Logging",
                description: "Every cross-border operation is automatically logged for safety, tax, and regulatory compliance. Generate reports with one click.",
              },
              {
                icon: Globe,
                title: "Universal Access",
                description: "Control and monitor your shared industrial assets from any device, anywhere. Your factory floor is now in your pocket.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="cosmic-card p-8 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 fade-in"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cosmic Orbs Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/cosmic-orbs.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        </div>

        <div className="relative z-10 container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Discover <span className="gradient-text">Unused</span> Time
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed">
              Unlock the hidden value in your idle factory hours with our global machine-sharing platform. Connect your industrial equipment to partners across timezones, monetize your downtime, and run a 24/7 operation without staying open.
              </p>
              <ul className="space-y-3">
                {["Global machine matching", "Automated timezone scheduling", "Real-time capacity tracking"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-primary hover:bg-primary/90 gap-2">
                Explore Now <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-0" />

        <div className="relative z-10 container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">About GAPLESS</h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
            GAPLESS is an industrial platform that turns timezone differences into a competitive advantage. We connect factories and machine owners across continents, transforming idle night shifts into productive day shifts elsewhere—maximizing asset utilization without expanding physical footprint.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              {[
                { number: "10K+", label: "Machine Hours Traded" },
                { number: "50+", label: "Global Industrial Partners" },
                { number: "24/7", label: "Cross-Continent Operations" },
              ].map((stat, idx) => (
                <div key={idx} className="cosmic-card p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-nebula.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>

        <div className="relative z-10 container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
            Ready to Turn Downtime into <span className="gradient-text">Revenue?</span>
            </h2>
            <p className="text-foreground/80 text-lg">
            Join industry leaders who are already monetizing their idle capacity across continents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 pulse-glow">
                Start Your Journey <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border/50 py-12 z-10">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-bold">GAPLESS [-]</span>
              </div>
              <p className="text-foreground/60 text-sm">Gladly - shpx lbh, GVH</p>
            </div>
            {[
              { title: "Name", links: ["SRIJIB MONDAL", "SYEDA AFSANA KHATUN", "ADARSH JHA", "ROHIT KUMAR MANDAL", "CHIRAYUSH SHARMA","SOHAM DAS"] },
              { title: "ID", links: ["231001112026", "231001112044", "231001112101", "231001112015", "231001112005","231001112071"] },
              { title: "Role", links: ["Technical Orchestrator & Lead", "Data & Market Analyst", "Business & Monetization Strategist", "Problem Researcher", "Problem Researcher","Developer"] },
              
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, lidx) => (
                    <li key={lidx}>
                      <a href="#" className="text-foreground/60 hover:text-primary transition text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-foreground/60">
               <p className="text-base font-bold">&copy; 2025. Kindly, Accept our L "love"💖.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
