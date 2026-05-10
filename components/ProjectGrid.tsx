const projects = [
  {
    number: '01',
    tag: 'Portfolio',
    title: 'Nordic Space',
    description: 'Ultra-clean monochromatic showcase for design studios. Extensive white space with staggered reveal animations.',
    stack: 'React · Vite · Framer Motion',
    href: '#',
  },
  {
    number: '02',
    tag: 'Dashboard',
    title: 'Clarity',
    description: 'High-utility analytics platform. Sharp borders, monospace data labels, single-color grayscale charts.',
    stack: 'Next.js · Recharts · TypeScript',
    href: '#',
  },
  {
    number: '03',
    tag: 'Editorial',
    title: 'Canvas',
    description: 'Magazine-style landing page. Bold typography, large-scale imagery, multi-column print-like layouts.',
    stack: 'React · Vite · Tailwind CSS',
    href: '#',
  },
]

export default function ProjectGrid() {
  return (
    <section id="work" className="px-6 pb-24 max-w-5xl mx-auto">
      <div className="border-b border-border pb-2 mb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">Works</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {projects.map((p, i) => (
          <a
            key={p.number}
            href={p.href}
            className={`group flex flex-col gap-5 p-8 border border-border hover:border-foreground transition-all duration-200 ${
              i < 2 ? 'md:border-r-0' : ''
            }`}
          >
            <span className="font-mono text-xs text-muted">
              {p.number} / {p.tag}
            </span>
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              {p.title}
            </h2>
            <p className="text-sm text-muted leading-relaxed flex-1">{p.description}</p>
            <span className="font-mono text-xs text-muted">{p.stack}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
