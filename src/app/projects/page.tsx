import { NavigationMenuDemo } from "@/sections/navbar";
import ProjectCardGrid from "@/sections/projectCardGrid";

export default function Projects() {
    return(
        <div>
            <NavigationMenuDemo />
            <main className="mt-16">
                <ProjectCardGrid />
            </main>
        </div>
    )
}