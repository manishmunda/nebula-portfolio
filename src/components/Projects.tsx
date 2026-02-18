import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-featured e-commerce application built with React, Node.js, and Stripe integration. Features real-time inventory, user auth, and a responsive dashboard.",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
  },
  {
    title: "AI Chat Assistant",
    desc: "An intelligent conversational AI powered by OpenAI's API. Includes context-aware responses, chat history, and a sleek modern interface.",
    tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
  },
  {
    title: "Task Management App",
    desc: "A collaborative project management tool with real-time updates, drag-and-drop boards, and team workspaces for efficient productivity.",
    tags: ["React", "Firebase", "DnD Kit", "Zustand"],
  },
];

const Projects = () => (
  <section id="work" className="py-24 relative">
    <div className="max-w-5xl mx-auto px-6">
      <div className="animate-in text-center mb-16">
        <h2 className="font-display text-4xl font-bold gradient-text inline-block">Recent Work</h2>
      </div>

      <div className="space-y-16">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`animate-in flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
          >
            {/* Image placeholder */}
            <div className="md:w-1/2 w-full">
              <div className="glass-card glow-border rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
                <div className="text-4xl">🖥️</div>
              </div>
            </div>

            {/* Info */}
            <div className="md:w-1/2 w-full space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-neon-purple">Featured Project</span>
              <h3 className="font-display text-2xl font-bold text-foreground">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="w-5 h-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><ExternalLink className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
