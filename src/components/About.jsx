import { aboutHighlights, profile } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-ink-line">
      <div className="container-1420 grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
        <div>
          <p className="text-teal font-mono text-sm mb-4">About</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-paper leading-tight">
            A frontend developer growing into full-stack.
          </h2>
        </div>

        <div>
          <p className="text-muted leading-relaxed text-base lg:text-lg">
            I&apos;m {profile.name}, a frontend developer based in {profile.location}. I started
            with the fundamentals — HTML, CSS and JavaScript — then moved into Bootstrap for
            rapid layouts, and React with Tailwind CSS for building real interfaces. Next.js
            rounded out my frontend toolkit for production-ready apps.
          </p>
          <p className="mt-5 text-muted leading-relaxed text-base lg:text-lg">
            Right now I&apos;m learning the other half of web development: Node.js, TypeScript,
            Express.js and MongoDB. My goal is to be able to design, build and ship a complete
            product on my own — frontend and backend.
          </p>

          <dl className="mt-10 grid sm:grid-cols-2 gap-6">
            {aboutHighlights.map((item) => (
              <div key={item.label} className="border-l-2 border-ink-line pl-4">
                <dt className="text-xs text-muted/70">{item.label}</dt>
                <dd className="mt-1 text-paper font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
