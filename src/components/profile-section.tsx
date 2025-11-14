import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function ProfileSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');
  return (
    <section id="profile" className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
      <div className="md:col-span-1 flex justify-center animate-fade-in-up">
        {profileImage && (
          <Image
            src={profileImage.imageUrl}
            alt={profileImage.description}
            width={250}
            height={250}
            className="rounded-full object-cover border-4 border-primary shadow-lg"
            data-ai-hint={profileImage.imageHint}
            priority
          />
        )}
      </div>
      <div className="md:col-span-2 space-y-4 text-center md:text-left animate-fade-in-up animation-delay-200">
        <div className="space-y-2">
          <p className="text-2xl font-semibold text-muted-foreground">Hi, I'm</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Mandeep Singh
          </h1>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary">Aspiring Technologist & Innovator</h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Web, AI & ML Enthusiast</h3>
        <div className="text-muted-foreground text-lg max-w-2xl mx-auto md:mx-0 space-y-4">
          <p>
            I’m not just another BCA student with a “passion for tech.” I don’t chase certificates or copy-paste projects. I build systems from scratch, break what doesn’t work, automate the chaos, and then rebuild it stronger.
          </p>
          <p>
            I’ve worked on real, functional projects, not just class submissions. From building UHI Care, an open healthcare platform with AI-powered automation, real-time doctor-patient video interaction, and structured data syncing — to crafting MediBot, a wellness assistant that delivers everything from Ayurvedic remedies to fitness routines, booking appointments, setting up reminders, and streamlining user health journeys.
          </p>
          <p>
            I even threw myself into side gigs for fun — building a Rajasthan tourism site just to explore creative design and user flow, and later developing TechGear, a full-stack e-commerce platform with a secure admin portal, inventory and stock management, order control, and real-time client-side ordering.
          </p>
          <p>
            React. Node.js. Supabase. Automation. n8n. APIs.
          </p>
          <p>
            I don’t “explore” tools — I deploy them. I focus on building systems that work when I’m not watching. Because for me, this isn’t a portfolio. It’s a living ecosystem of shipped ideas.
          </p>
          <p>
            Right now, I’m a novice in the internship world — but not in delivery. I’m actively looking to work with startups or product-focused teams where I can learn fast, solve problems, and contribute from Day 1. I bring energy, speed, accountability — and I build with intent.
          </p>
          <p>
            If it’s simple, I scale it.
          </p>
          <p>
           If it’s complex, I simplify it.
          </p>
          <p>
            And if it looks impossible — I’m already in the code.
          </p>
        </div>
        <div className="flex gap-4 pt-4 justify-center md:justify-start">
          <Button asChild size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="#" target="_blank" rel="noopener noreferrer">View Resume</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
