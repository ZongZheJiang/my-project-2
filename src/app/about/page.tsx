import IntroBanner from '@/components/intro-banner';
import NavBar from '@/components/navbar';
import FAQ from '@/components/faq';


export default function About() {
    return (
        <div>
            <NavBar />
            <main className="pt-20">
                <IntroBanner />
                <FAQ />
            </main>
        </div>
    )
};