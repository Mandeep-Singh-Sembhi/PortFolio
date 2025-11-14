import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from './icons';

export function ContactSection() {
  return (
    <section id="contact" className="text-center space-y-6 py-12 bg-card/50 rounded-lg">
      <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
      <p className="max-w-2xl mx-auto text-muted-foreground">
        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. 
        Feel free to reach out to me.
      </p>
      <div className="flex justify-center gap-4">
        <Button asChild variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground transition-colors">
          <Link href="mailto:jane.doe@example.com" target="_blank">
            <Icons.Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </Button>
        <Button asChild variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground transition-colors">
          <Link href="https://github.com/Mandeep-Singh-Sembhi" target="_blank">
            <Icons.GitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </Button>
        <Button asChild variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground transition-colors">
          <Link href="https://www.linkedin.com/in/mandeep-singh-11768821a/" target="_blank">
            <Icons.LinkedIn className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </Button>
        <Button asChild variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground transition-colors">
          <Link href="https://x.com/MandeepSembhi12" target="_blank">
            <Icons.Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
