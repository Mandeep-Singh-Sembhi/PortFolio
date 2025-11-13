import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Icons } from './icons';

const projects = [
  {
    id: 'project-1',
    title: 'Raahi',
    description: 'A tool to help travellers find the best and most optimized route for their trip.',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A responsive mobile app for organizing tasks and projects. Features include drag-and-drop functionality and real-time collaboration.',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'project-3',
    title: 'Analytics Dashboard',
    description: 'A data visualization dashboard displaying key business metrics with interactive charts and graphs. Powered by React and D3.js.',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => {
          const projectImage = PlaceHolderImages.find(p => p.id === project.id);
          return (
            <Card key={project.id} className="overflow-hidden flex flex-col hover:shadow-primary/20 hover:border-primary/50 transition-all">
              {projectImage && (
                <Image
                  src={projectImage.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48"
                  data-ai-hint={projectImage.imageHint}
                />
              )}
              <CardHeader className="flex-grow">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex w-full justify-end gap-4">
                  <Button asChild variant="ghost" size="sm">
                    <Link href={project.githubUrl} target="_blank">
                      <Icons.GitHub className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                    <Link href={project.liveUrl} target="_blank">
                      <Icons.ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
