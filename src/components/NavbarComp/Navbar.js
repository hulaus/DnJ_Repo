import React from "react";
import '../NavbarComp/Navbar.css'
import AboutUs from "../AboutUs/AboutUs"
import CustomPieces from "../CustomPieces/customPieces"
import ContactUs from "../ContactUs/contactUs"

function Navbar() {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <a href="../ContactUs/contactUs">Contact Us</a>
                </li>
                <li>
                    <a href="../AboutUs/AboutUs">About Us</a>
                </li>
                <li>
                    <a href="../CustomPieces/customPieces">Custom Pieces</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;