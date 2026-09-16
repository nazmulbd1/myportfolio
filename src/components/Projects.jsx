import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-ink-line bg-ink-soft/40">
      <div className="container-1420">
        <p className="text-teal font-mono text-sm mb-4">Project</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-paper leading-tight max-w-xl">
          A few things I&apos;ve built.
        </h2>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-2xl border border-ink-line bg-ink overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-br from-ink-softer to-ink-soft flex items-center justify-center">
                <span className="font-mono text-xs text-muted">/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-paper text-lg">{project.title}</h3>
                <p className="mt-2.5 text-sm text-muted leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-teal border border-teal/30 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-5">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1 text-sm text-paper hover:text-gold transition-colors"
                  >
                    Live demo <ArrowUpRight size={15} />
                  </a>
                  <a
                    href={project.codeUrl}
                    className="inline-flex items-center gap-1 text-sm text-muted hover:text-gold transition-colors"
                  >
                    <Github size={15} /> Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
