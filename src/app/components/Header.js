'use client'

import { useState } from 'react';

export default function Header() {
    const [toggle, setToggle] = useState('false');

    return (
        <header className="header w-full py-10">
            <div className="container">
                <div className="header--wrapper relative">
                    <div className="header--top flex justify-between items-center">
                        <a href="/" className="header--logo">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-[128px] h-full" fill="none" viewBox="0 0 283 64"><path fill="white" d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"/></svg>
                        </a>
                        <button className={`menu-toggle${toggle ? '' : ' active'} flex gap-1.5 flex-col md:hidden`} onClick={() => setToggle((prev) => !prev)}>
                            <div className="w-6 bg-white h-0.5 rounded-full"></div>
                            <div className="w-6 bg-white h-0.5 rounded-full"></div>
                            <div className="w-6 bg-white h-0.5 rounded-full"></div>
                        </button>
                        <div className="header--menu flex gap-4 hidden md:flex">
                            <a href="/" className="header--menu-item">Home</a>
                            <a href="/services" className="header--menu-item">Services</a>
                            <a href="/portfolio" className="header--menu-item">Projects</a>
                            <a href="/about" className="header--menu-item">About</a>
                            <a href="/blog" className="header--menu-item">Blog</a>
                            <a href="/contact" className="header--menu-item">Contact</a>
                        </div>
                    </div>
                    <div className={`header--mobile${toggle ? ' translate-x-full' : ' translate-x-0'} flex flex-col gap-3 items-end transition-all w-full absolute top-16 ease-in-out duration-300 md:hidden h-screen bg-stone-950`}>
                        <a href="/" className="header--menu-item">Home</a>
                        <a href="/services" className="header--menu-item">Services</a>
                        <a href="/portfolio" className="header--menu-item">Projects</a>
                        <a href="/about" className="header--menu-item">About</a>
                        <a href="/blog" className="header--menu-item">Blog</a>
                        <a href="/contact" className="header--menu-item">Contact</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
