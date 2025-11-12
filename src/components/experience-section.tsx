import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    period: '2020 - Present',
    description: 'Leading development of a new microservices-based platform. Mentoring junior engineers and improving code quality across the team. Implemented a new CI/CD pipeline, reducing deployment time by 50%.',
  },
  {
    role: 'Software Engineer',
    company: 'CodeCrafters LLC',
    period: '2018 - 2020',
    description: 'Developed and maintained features for a large-scale e-commerce application. Worked with React, Node.js, and PostgreSQL. Contributed to a 20% improvement in page load times.',
  },
  {
    role: 'Junior Web Developer',
    company: 'Web Wizards',
    period: '2016 - 2018',
    description: 'Assisted in building responsive websites for various clients using HTML, CSS, and JavaScript. Gained experience with modern front-end frameworks and version control systems.',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight text-center">Work Experience</h2>
      <div className="relative border-l-2 border-primary/20 max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-10">
            <span className="absolute -left-[11px] flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full ring-8 ring-background">
              <Briefcase className="w-4 h-4 text-primary" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-foreground">
              {exp.role} 
            </h3>
            <span className="text-primary/90 text-sm font-medium">{exp.company}</span>
            <time className="block my-2 text-sm font-normal leading-none text-muted-foreground">{exp.period}</time>
            <p className="mb-4 text-base font-normal text-muted-foreground">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
