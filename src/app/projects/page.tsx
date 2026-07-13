"use client";

import { NavigationMenuDemo } from "@/sections/navbar";
import Card from "@/components/card"
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