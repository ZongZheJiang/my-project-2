import Hero from "../components/hero";
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="pt-20">
        <Hero 
          title="Test Title" 
          body="Test Body" 
          imageSrc="/self-portrait.jpeg"
        />
      </main>
    </div>
  ); 
}
