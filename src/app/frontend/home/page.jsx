import React from "react";

export default function Home() {
    return (
        <div className="min-h-screen text-center bg-black">
            <nav className="flex text-white items-center p-5">
                <div className="ml-20 text-4xl font-bold font-['Fantasy'] text-white">
                    BHARAT CALLING
                </div>
                <ul className="gap-5 ml-100 text-2xl flex font-['Vedana'] font-bold">
                    <li className="group cursor-pointer relative">
                        HOME
                        <span className="absolute w-0 left-0 -bottom-0 h-[3px] transition-all duration-300 bg-white group-hover:w-full"></span>
                    </li>
                    <li>PROFILE</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
            <div className="font-bold font-mono text-6xl mt-20 text-white">
                Welcome To Bharat Calling
            </div>
            <div className="font-serif text-2xl text-gray-400 mt-5 font-bold">
                Experience The Ultimate Calling Experience
            </div>
            <div className="flex gap-5 mt-10 justify-center">
                <button className="p-4 bg-white rounded-2xl cursor-pointer hover:bg-gray-600 text-black
                font-bold text-2xl">REGISTER</button>
                <button className="p-4 text-2xl cursor-pointer font-bold text-white">LOGIN</button>
            </div>
        </div>
    )
}