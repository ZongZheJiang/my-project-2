import React from "react";


const Hero = ({ title, body, imageSrc }) => { 
    return (
        <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${imageSrc})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                <p className="mb-5 text-lg font-bold">{body}</p>
                <a 
                href="/JiangZongZhe_Resume_Berkeley_SWE.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                >
                View My Resume
                </a>
                </div>
            </div>
        </div>
    );

}

export default Hero;