"use client";
import React from 'react';  
import { useRouter } from 'next/navigation'; 

const FAQ = () => {
    const router = useRouter();

    const handleNavigate = (url) => {
        // Check if the URL is external
        if (url.startsWith('http://') || url.startsWith('https://')) {
            window.location.href = url; // Use for external links
        } else {
            router.push(url); // Use for internal Next.js links
        }
    };

    return (
        <div className="flex flex-col" style={{marginTop: 70}}>
            <h1 className="font-bold text-3xl pb-8">Work Experiences</h1>

            {/* <!-- Question --> */}
            <div className="flex gap-4 items-center" style={{marginLeft: 20, marginRight: 20}}>
                <i className="fa-solid fa-1"></i>

                <div className="flex flex-col" style={{marginLeft: 20}}>
                    <h2 className="font-medium text-lg bold">
                        Machine Learning Engineer @ Home Team Science and Technology Agency
                    </h2>
                    <h3 className="font-small text-md gray-500 italic">
                        Jan 2025 - Jul 2025
                    </h3>
                    <span style={{marginTop: 15}}>
                        •	Designed and implemented a ROS2 Python workspace that took video footage and depth data and user prompts, and outputted robotic movements using an Interbotix PX100 robot with reference to RoboPoint
                    </span>      
                    <span style={{marginTop: 5}}>
                        •	Documented advantages and shortcomings of various research papers (RoboPoint vs OpenFlamingo vs NVILA), ROS2 versions (Humble vs Jazzy), open-source models (LLaMA vs Vicuna vs Qwen) and training methods (Streaming vs Offline Training) in above use case
                    </span>
                    <span style={{marginTop: 5}}>
                        •	Created and maintained ROS2 Humble Workspace on Ubuntu 22.04 using Docker Images 
                    </span>
                    <button className="btn btn-primary w-64 h-10" style={{marginTop: 15}} onClick={() => handleNavigate('https://huggingface.co/WallyLovesCats/NVILA-Lite-8B')}>Link to Model Pipeline</button>
                </div>

            </div>

            <div className="divider"></div>

            {/* <!-- Question --> */}
            <div className="flex gap-4 items-center" style={{marginLeft: 20, marginRight: 20}}>
                <i className="fa-solid fa-2"></i>

                <div className="flex flex-col" style={{marginLeft: 20}}>
                    <h2 className="font-medium text-lg italic">
                        Experience 2
                    </h2>

                    <span>
                        Description 2
                    </span>
                </div>
            </div>

            <div className="divider"></div>

            {/* <!-- Question --> */}
            <div className="flex gap-4 items-center" style={{marginLeft: 20, marginRight: 20}}>
                <i className="fa-solid fa-3"></i>

                <div className="flex flex-col" style={{marginLeft: 20}}>
                    <h2 className="font-medium text-lg italic">
                        Experience 3
                    </h2>

                    <span>
                       Description 3
                    </span>
                </div>
            </div>
        </div>
    );
}

export default FAQ;