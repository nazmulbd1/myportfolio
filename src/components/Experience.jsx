import { timeline } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-ink-line">
      <div className="container-1420">
        <p className="text-teal font-mono text-sm mb-4">Experience / Education</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-paper leading-tight max-w-xl">
          My path so far.
        </h2>

        <div className="mt-14 max-w-2xl">
          {timeline.map((item, index) => (
            <div key={item.title} className="relative pl-10 pb-12 last:pb-0">
              {index !== timeline.length - 1 && (
                <span className="absolute left-[7px] top-3 bottom-0 w-px bg-ink-line" />
              )}
              <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-ink border-2 border-gold" />

              <p className="font-mono text-xs text-teal">{item.period}</p>
              <h3 className="mt-2 font-display font-semibold text-lg text-paper">{item.title}</h3>
              <p className="text-sm text-muted/80 mt-0.5">{item.place}</p>
              <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
