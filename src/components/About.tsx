const techIcons = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "📦" },
];

const About = () => (
  <section id="about" className="py-24 relative">
    <div className="max-w-4xl mx-auto px-6">
      <div className="animate-in text-center mb-12">
        <h2 className="font-display text-4xl font-bold gradient-text inline-block mb-6">About Me</h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          I'm a passionate developer with a deep love for building modern web applications. With expertise spanning the full stack, I enjoy turning complex problems into simple, elegant solutions. I thrive in collaborative environments and am always eager to learn new technologies.
        </p>
      </div>

      <div className="animate-in flex flex-wrap justify-center gap-6 mt-12">
        {techIcons.map((tech, i) => (
          <div
            key={tech.name}
            className="glass-card glow-border rounded-xl px-5 py-3 flex items-center gap-2 hover:border-neon-purple/40 transition-all duration-300 hover:-translate-y-1 cursor-default"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span className="text-xl">{tech.icon}</span>
            <span className="text-sm font-medium text-foreground">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
