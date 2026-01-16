import Hero from "../components/hero";
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="pt-20">
        <Hero 
          title="Jiang Zong Zhe"
          body="Aspiring Machine Learning Engineer building at the intersection of code, strategy, and human impact" 
          imageSrc="/self-portrait.jpeg"
        />
      </main>
    </div>
  ); 
}
