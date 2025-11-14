import { Trophy } from 'lucide-react';

const achievements = [
  {
    title: 'HackQuanta – JIMS College',
    description: 'We recently participated in a 36-hour hackathon at JIMS College, pushing our limits as a team. Working with Duality AI, we developed an innovative solution under intense time and pressure. The experience helped us explore new technologies and sharpen our problem-solving skills. Collaborating with mentors and peers gave us fresh insights and direction. Overall, the hackathon was a powerful learning journey that strengthened both our skills and teamwork.',
  },
  {
    title: 'BUILT-IT 2.0 2025 – Microsoft, Gurgaon',
    description: 'We attended an 8-hour hackathon at Microsoft Gurgaon, working hands-on with Duality AI. The high-energy atmosphere pushed us to innovate and build fast. Every hour challenged us to think smarter and collaborate better as a team. We learned new AI techniques and applied them directly to our project. The event was short, intense, and incredibly rewarding.',
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight inline-block relative">
          Competitions/Achievements
          <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-2/3 h-1 bg-primary/50 rounded-full" />
        </h2>
      </div>
      <div className="relative border-l-2 border-primary/20 max-w-3xl mx-auto">
        {achievements.map((achievement, index) => (
          <div key={index} className="mb-10 ml-10">
            <span className="absolute -left-[11px] flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full ring-8 ring-background">
              <Trophy className="w-4 h-4 text-primary" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-foreground">
              {achievement.title}
            </h3>
            <p className="mb-4 text-base font-normal text-muted-foreground whitespace-pre-line">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
