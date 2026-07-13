import IntroBanner from '@/sections/intro-banner';
import ExperienceList from '@/sections/experience-list';
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