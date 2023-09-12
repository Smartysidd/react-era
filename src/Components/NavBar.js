import React from 'react';
import Logo from "../download.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
    <img src={Logo} className="w-[100px]" />
    <h3 className='text-slate-950'>Online Degrees</h3>
    <h3 className='text-slate-950'>find Your New Carrer</h3>
    <nav className="navbar">
        <div className="logo">
            <Link to="/">My Courses</Link>
        </div>
        <ul className="nav-links">
            <li>
                <Link to="/courses">Courses</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
    </div>
  );
}

export default NavBar;