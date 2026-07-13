import { ProjectCard } from "@/types/projectCard";

export const PROJECT_CARD_LIST: ProjectCard[] = [
    {
        id: 1,
        title: "First Runner-Up in HacX: Hack for Public Safety",
        projectType: "Engineering",
        body: "Created Prototypes for SCDF DART Team's use during Rescue Missions from height to minimise property damage",
        mediaUrl: "/hacx-pic.jpg",
        href: "/projects"
    },
    {
        id: 2,
        title: "Thrive Project with Unlocking ADHD",
        projectType: "Consultancy",
        body: "Deputy Project Lead for a team of 6, conducted market research and developed recommendations for improving Unlocking ADHD's beneficiary engagement over 6",
        mediaUrl: "/thrive-pic2.jpeg",
        href: "/projects"
    },
    {
        id: 3,
        title: "Mock Icebreaker Application",
        projectType: "Web Development",
        body: "Demonstrated connecting Supabase Database to Next.js application, and implementing User Authentication using Middleware",
        mediaUrl: "/icebreaker-pic.png",
        href: "https://icebreaker-tan.vercel.app/"
    }
]