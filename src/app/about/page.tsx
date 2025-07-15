import IntroBanner from '@/components/intro-banner';
import NavBar from '@/components/navbar';

export default function About() {
    return (
        <div>
            <NavBar />
            <main className="pt-20">
                <IntroBanner />
            </main>
        </div>
    )
};