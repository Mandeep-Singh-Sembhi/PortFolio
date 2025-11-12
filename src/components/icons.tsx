import type { SVGProps } from "react";
import { Github, Linkedin, Twitter, Mail, ExternalLink, Code } from 'lucide-react';

export const Icons = {
  GitHub: (props: SVGProps<SVGSVGElement>) => <Github {...props} />,
  LinkedIn: (props: SVGProps<SVGSVGElement>) => <Linkedin {...props} />,
  Twitter: (props: SVGProps<SVGSVGElement>) => <Twitter {...props} />,
  Mail: (props: SVGProps<SVGSVGElement>) => <Mail {...props} />,
  ExternalLink: (props: SVGProps<SVGSVGElement>) => <ExternalLink {...props} />,
  Logo: (props: SVGProps<SVGSVGElement>) => <Code {...props} />,
};

export type Icon = keyof typeof Icons;
