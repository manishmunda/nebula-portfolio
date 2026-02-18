const navLinks = ["Home", "About", "Work", "Contact"];

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 hover:neon-glow"
          >
            {link}
          </button>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />
    </nav>
  );
};

export default Navbar;
