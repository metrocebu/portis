export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-widest">Portis</span>
        <div className="flex items-center gap-8">
          <a
            href="#work"
            className="font-mono text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors duration-200"
          >
            Work
          </a>
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
