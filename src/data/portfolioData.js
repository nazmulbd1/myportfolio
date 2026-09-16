// ---------------------------------------------------------------------------
// Central place to edit your portfolio content.
// Change the text/values here — you usually won't need to touch the
// component files at all.
// ---------------------------------------------------------------------------

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Project', href: '#projects' },
  { label: 'Experience/Education', href: '#experience' },
  { label: 'Blog', href: '#' }, // TODO: link to a real blog page once you have one
]

export const profile = {
  name: 'Nazmul Sheikh Nahid',
  role: 'Frontend Developer',
  tagline:
    "I build clean, responsive interfaces with React and Tailwind CSS — and right now I'm leveling up into full-stack development.",
  intro:
    "I finished my frontend journey covering HTML, CSS, Bootstrap, JavaScript, React and Tailwind CSS, and Next.js. Now I'm learning the backend half of the stack — Node.js, TypeScript, Express.js and MongoDB — so I can ship complete products end to end.",
  location: 'Bangladesh',
  email: 'your.email@example.com',
  phone: '+880 1XXXXXXXXX',
  cvPath: '/cv.pdf', // replace public/cv.pdf with your real CV (same filename, or update this path)
  socials: {
    facebook: 'https://facebook.com/your-username',
    x: 'https://x.com/your-username',
    instagram: 'https://instagram.com/your-username',
    github: 'https://github.com/nazmulbd1',
    linkedin: 'https://linkedin.com/in/your-username',
  },
}

export const aboutHighlights = [
  { label: 'Based in', value: 'Bangladesh' },
  { label: 'Focus', value: 'React & Tailwind CSS' },
  { label: 'Currently learning', value: 'Node.js, Express.js, MongoDB, TypeScript' },
  { label: 'Availability', value: 'Open to junior / intern roles' },
]

export const skillGroups = [
  {
    title: 'Frontend — what I use daily',
    note: 'Comfortable building production-ready UI with this stack.',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'React.js', 'Tailwind CSS', 'Next.js'],
  },
  {
    title: 'Backend — currently learning',
    note: 'Actively building projects to get comfortable with this stack.',
    skills: ['Node.js', 'TypeScript', 'Express.js', 'MongoDB'],
  },
]

export const services = [
  {
    title: 'Frontend Development',
    description:
      'Turning designs into clean, accessible interfaces using React, semantic HTML and modern CSS.',
    mark: 'FE',
  },
  {
    title: 'Responsive Web Design',
    description:
      'Layouts that hold up from a small phone to a wide desktop, built mobile-first with Tailwind CSS.',
    mark: 'RW',
  },
  {
    title: 'React App Development',
    description:
      'Component-driven apps with clear state management, reusable components and readable code.',
    mark: 'RE',
  },
  {
    title: 'UI Implementation with Tailwind',
    description:
      'Converting Figma or reference designs into pixel-aware, utility-first Tailwind CSS builds.',
    mark: 'UI',
  },
]

export const projects = [
  {
    title: 'Project One',
    description:
      'Replace this with a real project — a short line on the problem it solves and your role in building it.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Project Two',
    description:
      'Replace this with a real project — mention the core feature that made it interesting to build.',
    tags: ['Next.js', 'Tailwind CSS'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Project Three',
    description:
      'Replace this with a real project — once your backend stack is ready, add a full-stack build here.',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    codeUrl: '#',
  },
]

export const timeline = [
  {
    period: 'Present',
    title: 'Learning Backend Development',
    place: 'Self-directed',
    description:
      'Building projects with Node.js, Express.js, MongoDB and TypeScript to become a full-stack developer.',
  },
  {
    period: 'Completed',
    title: 'Frontend Development',
    place: 'Self-directed',
    description:
      'Learned HTML, CSS, Bootstrap, JavaScript, React.js, Tailwind CSS and Next.js, and used them to build real interfaces.',
  },
  {
    period: '2021 — Present',
    title: 'Your Degree Name',
    place: 'Your Institution Name',
    description: 'A short line about your field of study or relevant coursework.',
  },
]
