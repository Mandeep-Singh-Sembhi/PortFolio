import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelors in Computer Applications',
    institution: 'Bharati Vidyapeeth Institute of Management and Research, Delhi',
    period: '2024 - 2027',
    description: '',
  },
  {
    degree: 'Senior Secondary',
    institution: 'Neo Convent Sr. Sec. School, Paschim Vihar',
    period: 'Commerce (With IP)',
    description: '',
  },
];

export function EducationSection() {
  return (
    <section id="education" className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight inline-block relative">
          Education
          <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-2/3 h-1 bg-primary/50 rounded-full" />
        </h2>
      </div>
      <div className="relative border-l-2 border-primary/20 max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <div key={index} className="mb-10 ml-10">
            <span className="absolute -left-[11px] flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full ring-8 ring-background">
              <GraduationCap className="w-4 h-4 text-primary" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-foreground">
              {edu.degree} 
            </h3>
            <span className="text-primary/90 text-sm font-medium">{edu.institution}</span>
            <time className="block my-2 text-sm font-normal leading-none text-muted-foreground">{edu.period}</time>
            {edu.description && <p className="mb-4 text-base font-normal text-muted-foreground whitespace-pre-line">{edu.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
