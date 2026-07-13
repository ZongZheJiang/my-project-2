"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const SKILLS = [
  "Machine Learning",
  "Python",
  "ROS2",
  "AI Pipelines",
  "Consulting",
  "Next.js",
];

const IntroBanner = () => {
  return (
    <Card className="m-6 overflow-hidden">
      <CardContent className="flex flex-col md:flex-row gap-0 p-0">
        {/* Photo panel */}
        <div className="md:w-72 shrink-0 bg-muted flex items-center justify-center p-10">
          <img
            src="/self-portrait.jpeg"
            alt="Jiang Zong Zhe"
            className="w-44 h-44 rounded-full object-cover ring-4 ring-background shadow-lg"
          />
        </div>

        {/* Content panel */}
        <div className="flex flex-col gap-4 p-8 flex-1">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Jiang Zong Zhe</h2>
            <p className="text-sm text-muted-foreground mt-1 font-medium">
              Aspiring Machine Learning Engineer
            </p>
          </div>

          <Separator />

          <p className="text-sm leading-relaxed text-foreground/80">
            I build at the intersection of code, strategy, and human impact — developing ML models
            and AI-powered pipelines while keeping a sharp eye on the business problems they solve.
            That perspective comes from hands-on pro-bono consulting and cross-functional team
            projects that demanded both technical depth and strategic thinking.
          </p>

          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap pt-2 mt-auto">
            <Button asChild size="sm">
              <a
                href="https://github.com/ZongZheJiang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a
                href="https://www.linkedin.com/in/zongzhe-jiang-047587240/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntroBanner;
