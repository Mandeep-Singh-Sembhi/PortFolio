import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function ProfileSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <section id="profile" className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
      <div className="md:col-span-1 flex justify-center">
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
      <div className="md:col-span-2 space-y-4 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary">Jane Doe</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Full-Stack Developer</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto md:mx-0">
          I'm a passionate developer with a knack for building beautiful and functional web applications. 
          With a strong background in both front-end and back-end technologies, I love bringing ideas to life from concept to deployment.
        </p>
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
