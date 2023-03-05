import React from "react";
import { Link } from "react-router-dom";
import '../NavbarComp/Navbar.css'

function Navbar() {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/ContactUs">Contact Us</Link>
                </li>
                <li>
                    <Link to="/AboutUs">About Us</Link>
                </li>
                <li>
                    <Link to="/CustomPieces">Custom Pieces</Link>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar;