import { skillGroups } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-ink-line bg-ink-soft/40">
      <div className="container-1420">
        <p className="text-teal font-mono text-sm mb-4">Skills</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-paper leading-tight max-w-xl">
          What I can build with, today and next.
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-10">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-ink-line bg-ink p-8"
            >
              <h3 className="font-display font-semibold text-lg text-paper">{group.title}</h3>
              <p className="mt-2 text-sm text-muted">{group.note}</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-ink-line px-4 py-1.5 text-sm text-paper/90 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
