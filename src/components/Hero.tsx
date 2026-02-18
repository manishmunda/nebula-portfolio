import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-neon-purple/10 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-blue/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-neon-cyan/5 blur-[80px] animate-pulse-glow" style={{ animationDelay: "3s" }} />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <div className="space-y-6">
          <p className="text-muted-foreground text-lg">Hello, I'm</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
            Manish
          </h1>
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            <span className="gradient-text">Full-Stack Developer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
            I craft modern, performant web applications with clean code and cutting-edge technologies. Passionate about building digital experiences that make a difference.
          </p>
          <div className="flex gap-4 pt-2">
            <button onClick={scrollToContact} className="btn-gradient px-8 py-3 rounded-full text-primary-foreground font-semibold text-sm">
              Get in Touch
            </button>
            <a href="#work" className="px-8 py-3 rounded-full border border-border hover:border-neon-purple/50 text-foreground font-semibold text-sm transition-all duration-300">
              View Work
            </a>
          </div>
        </div>

        {/* Right - Portrait placeholder */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-secondary flex items-center justify-center overflow-hidden glow-border">
              <span className="text-6xl">👨‍💻</span>
            </div>
            <div className="absolute -inset-4 rounded-full border border-neon-purple/20 animate-spin-slow" />
            <div className="absolute -inset-8 rounded-full border border-neon-blue/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-muted-foreground">
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
};

export default Hero;
