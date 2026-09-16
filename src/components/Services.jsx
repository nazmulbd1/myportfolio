import { services } from '../data/portfolioData'

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-ink-line">
      <div className="container-1420">
        <p className="text-teal font-mono text-sm mb-4">Services</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-paper leading-tight max-w-xl">
          How I can help on your project.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-ink-line p-7 hover:border-gold/60 transition-colors"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-ink-softer font-mono text-sm text-gold">
                {service.mark}
              </span>
              <h3 className="mt-6 font-display font-semibold text-paper text-lg">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
