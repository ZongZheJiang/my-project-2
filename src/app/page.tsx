import Hero from "../components/hero";
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="pt-20">
        <Hero 
          title="Welcome to my Portfolio" 
          body="I am a Year 2 Computer Science Student at Nanyang Technological University, Singapore. I am passionate about creating applications." 
          imageSrc="/self-portrait.jpeg"
        />
      </main>
    </div>
  ); 
}
