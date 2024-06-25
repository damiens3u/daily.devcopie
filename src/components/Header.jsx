import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button, Container, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faBell, faSearch, faPlus, faFire, faCog } from '@fortawesome/free-solid-svg-icons'; // Importez également faCog pour l'icône de paramètres
import logo from '../assets/logo.png'; // Import the logo
import tshirtIcon from '../assets/tshirt.png'; // Import the t-shirt icon
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
      <Container>
        {/* Logo et bouton t-shirt */}
        <Navbar.Brand href="#">
          <img
            src={logo} // Use the imported logo
            alt="daily.dev"
            className="logo mr-3"
          />
          <Button variant="link" className="navbar-button">
            <img
              src={tshirtIcon} // Use the imported t-shirt icon
              alt="T-shirt"
              className="navbar-icon"
            />
          </Button>
        </Navbar.Brand>

        {/* Barre de recherche */}
        <Form inline className="ml-auto search-bar">
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

        {/* Bouton New Post */}
        <Button variant="outline-light" className="ml-3 navbar-button">
          {isSmallScreen ? <FontAwesomeIcon icon={faPlus} /> : "New Post"}
        </Button>

        {/* Bouton Notifications (Bell icon) */}
        <Button variant="link" className="navbar-button">
          <FontAwesomeIcon icon={faBell} className="navbar-icon" />
        </Button>

        {/* Bouton Current Streak */}
        <Button variant="outline-light" className="ml-3 navbar-button">
          {isSmallScreen ? <FontAwesomeIcon icon={faFire} className="navbar-icon" style={{ color: '#ff69b4' }} /> : "Current Streak"}
        </Button>

        {/* Bouton Profil */}
        <Button variant="outline-light" className="ml-3 navbar-button">
          {isSmallScreen ? <FontAwesomeIcon icon={faCog} className="navbar-icon" style={{ color: '#8a2be2' }} /> : "Profil"}
        </Button>
      </Container>
    </Navbar>
  );
}



