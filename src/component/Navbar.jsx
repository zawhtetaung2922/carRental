import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#" className="logo">MZP Car Rental</a>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#vehicles">Vehicles</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#account">My Account</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;