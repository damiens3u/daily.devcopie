import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button, Container, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faBell } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'; // Import the logo
import tshirtIcon from '../assets/tshirt.png'; // Import the t-shirt icon
import './Header.css'; // Import custom styles

export default function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* Logo et bouton t-shirt */}
        <Navbar.Brand href="#" className="mr-auto">
          <img
            src={logo} // Use the imported logo
            alt="daily.dev"
            className="logo"
          />
          <Button variant="link" className="navbar-button">
            <img
              src={tshirtIcon} // Use the imported t-shirt icon
              alt="T-shirt"
              className="navbar-icon"
            />
          </Button>
        </Navbar.Brand>

        {/* Navbar responsive toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Contenu de la navbar collapsé pour mobile */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="ml-auto">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>

          {/* Bouton New Post */}
          <Button variant="outline-light" className="navbar-button">
            New Post
          </Button>

          {/* Bouton Notifications (Bell icon) */}
          <Button variant="link" className="navbar-button">
            <FontAwesomeIcon icon={faBell} className="navbar-icon" />
          </Button>

          {/* Bouton Current Streak */}
          <Button variant="outline-light" className="navbar-button">
            Current Streak
          </Button>

          {/* Bouton Profil */}
          <Button variant="outline-light" className="navbar-button">
            Profil
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
