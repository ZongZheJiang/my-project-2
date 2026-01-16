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
        <div className="card card-side bg-base-100 shadow-sm h-100 p-6 m-6 flex">
            <figure>
                <img
                src={"/self-portrait.jpeg"}
                alt="Self Portrait" 
                style={{ width: '100%', height: '50', maxWidth: '400px' }}/>
            </figure>
            <div className="card-body w-100">
                <h2 className="card-title text-3xl">Jiang Zong Zhe</h2>
                <p className="text-lg" style={{marginTop: 10}}>
                    I'm an aspiring Machine Learning Engineer who builds at the intersection of code, strategy, 
                    and human impact. I develop machine learning models and AI-powered pipelines, but I'm equally 
                    focused on engineering them into viable products and understanding the business problems they solve — 
                    a perspective I've honed through hands-on pro-bono consulting and cross-functional team projects.
                </p>
                <button className="btn btn-primary" onClick={() => handleNavigate('https://github.com/ZongZheJiang')}>My GitHub Page</button>
                <button className="btn btn-primary" onClick={() => handleNavigate('https://www.linkedin.com/in/jiang-zong-zhe-047587240/')}>My LinkedIn Page</button>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    )
}   

export default IntroBanner;