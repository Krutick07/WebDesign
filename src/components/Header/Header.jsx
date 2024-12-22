import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/bars.png';
import search from '../../assets/search.png';
import cancel from '../../assets/delete.png';
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="Header">
      <img src={logo} alt="Logo" className="logo" />

      {/* Toggle Menu Icon */}
      {isMobile && (
        <div
          style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px',
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={menuOpen ? cancel : menu}
            alt={menuOpen ? 'Cancel Icon' : 'Menu Icon'}
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
        </div>
      )}

      {/* Menu Items */}
      <ul className={`header-menu ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link 
            to="Hero"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="Pages"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Pages
          </Link>
        </li>
        <li>
          <Link
            to="Projects"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="Blog"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link 
            to="Testimonials"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link 
            to="Contacts"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Contacts
          </Link>
        </li>
      </ul>

      {/* Search Icon */}
      {!isMobile && <img src={search} alt="Search Icon" className="search" />}
    </div>
  );
};

export default Header;
