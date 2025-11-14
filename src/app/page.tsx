import { Header } from '@/components/header';
import { ProfileSection } from '@/components/profile-section';
import { ExperienceSection } from '@/components/experience-section';
import { AchievementsSection } from '@/components/achievements-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 md:px-6">
          <div className="flex flex-col gap-24 md:gap-32">
            <ProfileSection />
            <ExperienceSection />
            <AchievementsSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
