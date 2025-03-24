import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer= () =>{
    return (
        <footer className="bg-slate-100 mt-36 md:px-16 lg:px-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 ">
<div>
    <h1 className=" text-2xl text-blue-800  font-bold font-serif mb-4">Institue Guide</h1>
    
    <p className=" text-black text-1xl">
    The Institute Guide app serve as a centralized platform designed to guide students in their search for computing education. 
    </p>
</div>
<div className="pl-16">
    <h1 className="text-2xl  font-serif mb-4 text-blue-800">Important Links</h1>
    <ul>
        <li><a href=" "className="hover:underline text-black text-1xl ">Home</a></li>
        <li><a href="#about "className="hover:underline text-black text-1xl">About us </a></li>
        <li><a href="#services" className="hover:underline text-black text-1xl">Services</a></li>

    </ul>
</div>
<div>
    <h2 className=" font-serif mb-4 text-2xl text-blue-800">Follow us</h2>
<ul className="flex space-x-4 text-3xl pt-4">
    <li >
         <FaInstagram/> 
            <FaFacebook/>
            <FaLinkedin/>
    </li>
    </ul>
    </div>
    <div className="w-screen text-2xl font-serif text-center text-blue-800 border border-t p-2">
        <p className="text-0xl">@ 2025 code with us .All Right Reserved</p>
    </div>
        </div>
</footer>
    );
};
export default Footer;