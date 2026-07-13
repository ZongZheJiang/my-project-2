"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; 

const Card = ({ title, projectType, body, imageSrc, link}) => {
    const router = useRouter();

    const handleNavigate = (url) => {
        // Check if the URL is external
        if (url.startsWith('http://') || url.startsWith('https://')) {
            window.location.href = url; // Use for external links
        } else {
            router.push(url); // Use for internal Next.js links
        }
    };

    const getProjectColor = (type) => {
        switch (type) {
            case 'Engineering':
                return 'badge-secondary';
            case 'Consultancy':
                return 'badge-accent';
            case 'Web Development':
                return 'badge-info';
            default:
                return 'badge-neutral';
        }
    };
    
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={imageSrc}
                    alt={title} 
                    className="w-full h-48 object-cover"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className={`badge ${getProjectColor(projectType)} h-8 w-32 whitespace-nowrap`}>{projectType}</div>
                </h2>
                <p>{body}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => handleNavigate(link)}>
                        Find Out More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;