"use client";

import { useRouter } from 'next/navigation';

import React from 'react';


const IntroBanner = () => {  
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
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                src={"/self-portrait.jpeg"}
                alt="Self Portrait" 
                style={{ width: '100%', height: 'auto', maxWidth: '400px' }}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Jiang Zong Zhe</h2>
                <p>Hello! I am a Year 2 Computer Science student from Nanyang Technological University. I enjoy creating applications.</p>
                <button className="btn btn-primary" onClick={() => handleNavigate('https://github.com/ZongZheJiang')}>My GitHub Page</button>
                <button className="btn btn-primary" onClick={() => handleNavigate('https://www.linkedin.com/in/jiang-zong-zhe-047587240/')}>My LinkedIn Page</button>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    )
}   

export default IntroBanner;