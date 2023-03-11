import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ScrollspyNavbar() {
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50;
      const sectionBottom = sectionTop + section.offsetHeight - 50;
      
      if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
        setActiveSection(section.id);
      }
    });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <Nav className='scrollspy-navbar' defaultActiveKey="/Home">
      <Nav.Link as={Link} to="/" spy="true" smooth="true" offset={-70} duration={500}>
        Home
      </Nav.Link>    
      <Nav.Link as={Link} to="ContactUs" spy="true" smooth="true" offset={-70} duration={500}>
        Contact Us
      </Nav.Link>
      <Nav.Link as={Link} to="AboutUs" spy="true" smooth="true" offset={-70} duration={500}>
        About Us
      </Nav.Link>
      <Nav.Link as={Link} to="CustomPieces" spy="true" smooth="true" offset={-70} duration={500}>
        Custom Pieces
      </Nav.Link>
    </Nav>
  )
}
export default ScrollspyNavbar;