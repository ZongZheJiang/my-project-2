"use client";
import React from 'react';  
import { useRouter } from 'next/navigation'; 
import { Experience } from '@/types'; 

interface ExperienceProps {
    experiences: Experience[];
    listName: string;
}

const ExperienceList = ({ experiences, listName }: ExperienceProps) => {
    const router = useRouter();

    const handleNavigate = (url: string) => {
        if (!url) return;
        if (url.startsWith('http://') || url.startsWith('https://')) {
            window.location.href = url;
        } else {
            router.push(url);
        }
    };

    return (
        <div className="flex flex-col" style={{ marginTop: 70 }}>
            <h1 className="font-bold text-3xl pb-8">{listName}</h1>

            {experiences.map((exp, index) => (
                <React.Fragment key={index}>
                    <div className="flex gap-4 items-start" style={{ marginLeft: 20, marginRight: 20 }}>
                        {/* Dynamic FontAwesome Number Icon */}
                        <i className={`fa-solid fa-${index + 1} mt-2`}></i>

                        <div className="flex flex-col" style={{ marginLeft: 20 }}>
                            <h2 className="font-medium text-lg font-bold">
                                {exp.role} @ {exp.company}
                            </h2>
                            <h3 className="text-md text-gray-500 italic">
                                {exp.duration}
                            </h3>
                            
                            {/* Render Description Points */}
                            <div className="flex flex-col gap-2" style={{ marginTop: 15 }}>
                                {exp.points.map((point, pIdx) => (
                                    <span key={pIdx}>• {point}</span>
                                ))}
                            </div>

                            {/* Optional Action Button */}
                            {exp.link && (
                                <button 
                                    className="btn btn-primary w-64 h-10" 
                                    style={{ marginTop: 15 }} 
                                    onClick={() => handleNavigate(exp.link?.url ?? '')}
                                >
                                    {exp.link?.label}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Don't show divider after the last item */}
                    {index !== experiences.length - 1 && <div className="divider"></div>}
                </React.Fragment>
            ))}
        </div>
    );
}

export default ExperienceList;