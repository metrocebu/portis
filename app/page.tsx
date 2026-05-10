import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProjectGrid from '@/components/ProjectGrid'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ProjectGrid />
      <ContactForm />
      <footer className="border-t border-border px-6 py-8 max-w-5xl mx-auto w-full">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          Portis © 2026 / Built with Precision
        </span>
      </footer>
    </>
  )
}
