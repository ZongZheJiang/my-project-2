import { Experience } from "@/types/experience";

export const EXPERIENCE_LIST: Experience[] = [
    {
        role: "Robotics & Machine Learning Intern",
        company: "Home Team Science & Technology Agency",
        duration: "Jan 2025 – Jul 2025",
        points: [
            "Designed and implemented a ROS2 Python workspace that processed video footage, depth data and user prompts to output robotic movements using an Interbotix PX100 robot with reference to RoboPoint",
            "Documented advantages and shortcomings of various research papers (RoboPoint vs OpenFlamingo vs NVILA), ROS2 versions (Humble vs Jazzy), open-source models (LLaMA vs Vicuna vs Qwen) and training methods in the target use case",
            "Created and maintained ROS2 Humble Workspace on Ubuntu 22.04 using Docker Images"
        ],
        link: {
            label: "Link to Model Pipeline",
            url: "https://huggingface.co/WallyLovesCats/NVILA-Lite-8B"
        }
    },
    {
        role: "Project and Administrative Associate",
        company: "Jalan Journey",
        duration: "Mar 2023 – Aug 2024",
        points: [
            "Oversaw accounting and daily operational activities, including business development and logistics management",
            "Spearheaded projects and liaised with third-party vendors, impacting 1,000 students across multiple countries"
        ]
    }
];
