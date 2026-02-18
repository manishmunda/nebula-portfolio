import { Github, Twitter, Linkedin } from "lucide-react";

const socials = [
  { icon: Github, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
];

const Footer = () => (
  <footer className="py-8 border-t border-border/30">
    <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
      <div className="flex gap-4">
        {socials.map(({ icon: Icon, href }) => (
          <a key={Icon.displayName} href={href} className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-neon-purple/40 transition-all duration-300">
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">© 2026 Manish. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
