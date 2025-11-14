import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillsData = {
  'Front-End': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  'Back-End': ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
  'Tools & Platforms': ['Git', 'Docker', 'AWS', 'Firebase', 'Vercel', 'Stripe API'],
  'Design': ['Figma', 'Adobe XD', 'User Interface Design', 'UX Research', 'Canva']
};

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight inline-block relative">
          My Skills
          <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-2/3 h-1 bg-primary/50 rounded-full" />
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skillsData).map(([category, skills]) => (
          <Card key={category} className="bg-card/50 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <Badge key={skill} variant="secondary" className="text-sm font-medium bg-accent/20 text-accent-foreground hover:bg-accent/40">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
