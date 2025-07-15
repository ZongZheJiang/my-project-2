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
                    <img src="/logo.svg" alt='logo' className='w-[50px] h-[50px]' onClick={() => handleNavigate('/')}/>
                </div>
                <button className="btn btn-soft" onClick={() => handleNavigate('/projects')}>
                    Projects
                </button>
                <button className="btn btn-soft" onClick={() => handleNavigate('/about')}>
                    About Me
                </button>

                
                <div onClick={handleClick}>
                    <img src={!toggle ? "/menu.svg" : "/close.svg"} alt='menu' className='w-[30px] h-[30px]' />
                </div>
                {/* <ul className={toggle?'absolute bg-white w-full px-8 md:hidden':'hidden'} style = {{display: toggle ? 'block' : 'none'}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platform</li>
                    <li>Pricing</li>
                    <div className='flex flex-col my-4'>
                        <button className='bg-transparent text-black mb-4 py-3 px-8'>Login</button>
                        <button className='px-8 py-3'>Sign Up</button>
                    </div>
                </ul> */}
            </nav>
            
        </div>
    );
}

export default NavBar;