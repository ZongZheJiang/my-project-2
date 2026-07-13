import IntroBanner from '@/components/intro-banner';
import ExperienceList from '@/components/experience-list';
import { NavigationMenuDemo } from '@/sections/navbar';

import { EXPERIENCE_LIST } from '@/data/experience';


export default function About() {
    return (
        <div>
            <NavigationMenuDemo />
            <main className="pt-20">
                <IntroBanner />
                <ExperienceList 
                    experiences={EXPERIENCE_LIST}
                    listName={"Work Experiences"}
                />
            </main>
        </div>
    )
};