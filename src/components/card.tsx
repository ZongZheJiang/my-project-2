"use client";

import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge, badgeVariants } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { VariantProps } from 'class-variance-authority';

type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>['variant']>;

const getProjectVariant = (type: string): BadgeVariant => {
  switch (type) {
    case 'Engineering': return 'default';
    case 'Consultancy': return 'secondary';
    case 'Web Development': return 'outline';
    default: return 'outline';
  }
};

interface ProjectCardProps {
  title: string;
  projectType: string;
  body: string;
  imageSrc: string;
  link: string;
}

const ProjectCard = ({ title, projectType, body, imageSrc, link }: ProjectCardProps) => {
  const router = useRouter();

  const handleNavigate = (url: string) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      window.location.href = url;
    } else {
      router.push(url);
    }
  };

  return (
    <Card className="w-96">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base leading-snug">{title}</CardTitle>
          <Badge variant={getProjectVariant(projectType)} className="shrink-0">
            {projectType}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{body}</p>
      </CardContent>
      <CardFooter className="justify-end">
        <Button onClick={() => handleNavigate(link)}>Find Out More</Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
