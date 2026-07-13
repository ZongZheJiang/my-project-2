"use client";

import NavBar from "@/components/navbar"
import Card from "@/components/card"

export default function Projects() {
    return(
        <div>
            <NavBar />
            <main>
                {/* <div className="h-20 bg-base-200 flex items-center justify-center" style={{marginTop: 70}}>
                    <h2 className="text-lg mt-2">A showcase of my work and accomplishments!</h2>
                </div> */}
                <div className="container mx-auto px-4" style={{marginTop: 70}}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card 
                        title="First Runner-Up in HacX: Hack for Public Safety"
                        projectType="Engineering"
                        body="Created Prototypes for SCDF DART Team's use during Rescue Missions from height to minimise property damage"
                        imageSrc={"/hacx-pic.jpg"}
                        link="/projects"
                        />
                        <Card 
                        title="Thrive Project with Unlocking ADHD"
                        projectType="Consultancy"
                        body="Deputy Project Lead for a team of 6, conducted market research and developed recommendations for improving Unlocking ADHD's beneficiary engagement over 6"
                        imageSrc={"/thrive-pic2.jpeg"}
                        link="/projects"
                        />
                        <Card           
                        title="Mock Icebreaker Application"
                        projectType="Web Development"
                        body="Demonstrated connecting Supabase Database to Next.js application, and implementing User Authentication using Middleware"
                        imageSrc={"/icebreaker-pic.png"}
                        link="https://icebreaker-tan.vercel.app/"
                        />
                    </div>
                </div> 
                {/* <div className="container mx-auto px-4" style={{marginTop: 70}}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card 
                        title="First Runner-Up in HacX: Hack for Public Safety"
                        projectType="Engineering"
                        body="Created Prototypes for SCDF DART Team's use during Rescue Missions from height to minimise property damage"
                        imageSrc={"/hacx-pic.jpg"}
                        link="/projects"
                        />
                        <Card 
                        title="Thrive Project with Unlocking ADHD"
                        projectType="Consultancy"
                        body="Deputy Project Lead for a team of 6, conducted market research and developed recommendations for improving Unlocking ADHD's beneficiary engagement over 6"
                        imageSrc={"/thrive-pic2.jpeg"}
                        link="/projects"
                        />
                        <Card           
                        title="Mock Icebreaker Application"
                        projectType="Web Development"
                        body="Demonstrated connecting Supabase Database to Next.js application, and implementing User Authentication using Middleware"
                        imageSrc={"/icebreaker-pic.png"}
                        link="https://icebreaker-tan.vercel.app/"
                        />
                    </div>
                </div>  */}
            </main>
        </div>
    )
}