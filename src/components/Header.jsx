import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button, Container, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faBell, faSearch, faPlus, faFire, faCog } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'; // Import the logo
import './Header.css'; // Import custom styles

export default function Header() {
  const [isFocused, setIsFocused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallScreen = windowWidth < 768;

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <div className="navbar-content">
          {/* Logo */}
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img
              src={logo} // Use the imported logo
              alt="daily.dev"
              className={`logo ${isSmallScreen ? 'logo-small-screen' : ''}`}
            />
          </Navbar.Brand>

          {/* Barre de recherche */}
          <Form inline className="search-bar ml-auto">
            <div 
              className={`search-container ${isFocused ? 'focused' : ''}`}
              onClick={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            >
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <FormControl 
                type="text" 
                placeholder={isFocused ? "Search posts or ask a question" : ""}
                className="search-input" 
                onFocus={() => setIsFocused(true)}
              />
            </div>
          </Form>

          {/* Boutons */}
          <div className="button-group">
            <Button variant="outline-light" className="ml-3 navbar-button">
              {isSmallScreen ? <FontAwesomeIcon icon={faPlus} /> : "New Post"}
            </Button>

            <Button variant="link" className="navbar-button">
              <FontAwesomeIcon icon={faBell} className="navbar-icon" />
            </Button>

            <Button variant="outline-light" className="ml-3 navbar-button">
              {isSmallScreen ? <FontAwesomeIcon icon={faFire} className="navbar-icon" style={{ color: '#ff69b4' }} /> : "Current Streak"}
            </Button>

            <Button variant="outline-light" className="ml-3 navbar-button">
              {isSmallScreen ? <FontAwesomeIcon icon={faCog} className="navbar-icon" style={{ color: '#8a2be2' }} /> : "Profil"}
            </Button>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}








