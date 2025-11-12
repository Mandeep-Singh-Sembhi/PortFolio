import Link from 'next/link';
import { Icons } from './icons';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Icons.Logo className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">mann</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6 ml-auto">
          <Link
            href="#experience"
            className="text-muted-foreground/80 transition-colors hover:text-muted-foreground"
          >
            Experience
          </Link>
          <Link
            href="#skills"
            className="text-muted-foreground/80 transition-colors hover:text-muted-foreground"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-muted-foreground/80 transition-colors hover:text-muted-foreground"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground/80 transition-colors hover:text-muted-foreground"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
