import IntroBanner from '@/components/intro-banner';
import NavBar from '@/components/navbar';
import ExperienceList from '@/components/experience-list';


export default function About() {
        const myExperiences = [
        {
            role: "Machine Learning Engineer",
            company: "Home Team Science and Technology Agency",
            duration: "Jan 2025 - Jul 2025",
            points: [
                "Designed and implemented a ROS2 Python workspace...",
                "Documented advantages and shortcomings of various research papers...",
                "Created and maintained ROS2 Humble Workspace on Ubuntu 22.04"
            ],
            link: {
                label: "Link to Model Pipeline",
                url: "https://huggingface.co/WallyLovesCats/NVILA-Lite-8B"
            }
        },
        // {
        //     role: "ExampleRole",
        //     company: "ExampleCompany",
        //     duration: "ExampleDuration",
        //     points: [
        //         "Example point 1",
        //         "Example point 2",
        //         "Example point 3"
        //     ],
        //     // Link is optional; if omitted, no button will appear
        // }
    ];

    return (
        <div>
            <NavBar />
            <main className="pt-20">
                <IntroBanner />
                <ExperienceList 
                    experiences={myExperiences}
                    listName={"Work Experiences"}
                />
            </main>
        </div>
    )
};