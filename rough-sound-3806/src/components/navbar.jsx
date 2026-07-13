"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';


const NavBar = () => {
    const router = useRouter(); 
    const [toggle,setToggle]=useState(true);

    const handleClick = ()=>{
        setToggle(!toggle);
        console.log("Toggle state:", !toggle);
    }

    const handleNavigate = (url) => {
        // Check if the URL is external
        if (url.startsWith('http://') || url.startsWith('https://')) {
            window.location.href = url; // Use for external links
        } else {
            router.push(url); // Use for internal Next.js links
        }
    };

    return (
        <div className="navbar bg-base-300 shadow-lg fixed top-0 z-50" style={{height: '70px'}}>
            <nav className='container mx-auto flex justify-between items-center w-full h-full'>

                <div>
                    <a onClick={() => handleNavigate('/')}>
                        <i className="fa-solid fa-house"></i>
                    </a>
                </div>
                <button className="btn btn-soft" onClick={() => handleNavigate('/projects')}>
                    Projects
                </button>
                <button className="btn btn-soft" onClick={() => handleNavigate('/about')}>
                    About Me
                </button>
                <div className="hidden sm:flex gap-2">
                    <a className="btn btn-circle btn-ghost btn-sm text-xl" onClick={() => handleNavigate('https://github.com/ZongZheJiang')}>
                        <i className="fa-brands fa-fw fa-github"></i>
                    </a>

                    <a className="btn btn-circle btn-ghost btn-sm text-xl" onClick={() => handleNavigate('https://www.linkedin.com/in/jiang-zong-zhe-047587240/')}>
                        <i className="fa-brands fa-fw fa-linkedin"></i>
                    </a>

                    <a className="btn btn-circle btn-ghost btn-sm text-xl" onClick={() => handleNavigate('https://www.kaggle.com/zongzhejiang')}>
                        <i className="fa-brands fa-fw fa-kaggle"></i>
                    </a>
                </div>
            </nav>
            
        </div>
    );
}

export default NavBar;