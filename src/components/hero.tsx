import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  body: string;
  imageSrc: string;
}

const Hero = ({ title, body, imageSrc }: HeroProps) => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center text-white max-w-md px-4">
        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
        <p className="mb-5 text-lg font-semibold">{body}</p>
        <Button variant="glass" size="lg" asChild>
          <a
            href="/JiangZongZhe_Resume_Berkeley_SWE.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Resume
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
