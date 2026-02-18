const skills = [
  { name: "React", angle: 0 },
  { name: "Node.js", angle: 45 },
  { name: "TypeScript", angle: 90 },
  { name: "Python", angle: 135 },
  { name: "PostgreSQL", angle: 180 },
  { name: "Docker", angle: 225 },
  { name: "AWS", angle: 270 },
  { name: "GraphQL", angle: 315 },
];

const Skills = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-6">
      <div className="animate-in text-center mb-16">
        <h2 className="font-display text-4xl font-bold gradient-text inline-block">Skills</h2>
      </div>

      <div className="animate-in relative flex items-center justify-center h-[400px]">
        {/* Center glow */}
        <div className="absolute w-20 h-20 rounded-full bg-neon-purple/20 blur-xl" />
        <div className="w-16 h-16 rounded-full glass-card glow-border flex items-center justify-center z-10">
          <span className="text-2xl">⚡</span>
        </div>

        {/* Orbital rings */}
        <div className="absolute w-[240px] h-[240px] rounded-full border border-neon-purple/10 animate-spin-slow" />
        <div className="absolute w-[340px] h-[340px] rounded-full border border-neon-blue/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "25s" }} />

        {/* Skill nodes */}
        {skills.map((skill) => {
          const radius = 150;
          const rad = (skill.angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <div
              key={skill.name}
              className="absolute glass-card glow-border rounded-lg px-3 py-1.5 text-xs font-medium text-foreground hover:border-neon-purple/50 transition-all duration-300 hover:scale-110 cursor-default"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
