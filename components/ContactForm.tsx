'use client'

export default function ContactForm() {
  return (
    <section id="contact" className="px-6 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-start-2 md:col-span-2 flex flex-col gap-3">
          <div className="border-b border-border pb-2 mb-5">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">Contact</span>
          </div>
          <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-subtle border border-border font-mono text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-foreground focus:bg-card transition-colors duration-200"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-subtle border border-border font-mono text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-foreground focus:bg-card transition-colors duration-200"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-3 bg-subtle border border-border font-mono text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-foreground focus:bg-card transition-colors duration-200 resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 bg-foreground text-card font-mono text-xs uppercase tracking-widest border border-foreground hover:bg-transparent hover:text-foreground transition-all duration-200"
          >
            Send Inquiry
          </button>
          </form>
        </div>
      </div>
    </section>
  )
}
