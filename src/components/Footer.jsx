import React from 'react'; 
import logo from '../assets/logo.png'; // Import the logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faTiktok, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Assurez-vous d'avoir un fichier CSS pour le style du footer si nécessaire

const Footer = () => {
    return (
      <div className="footer-container custom-footer">
        <div className="footer-text">
          <img src={logo} alt="daily.dev logo" className="logo"/>
          <p>daily.dev est un réseau professionnel qui permet aux développeurs d'apprendre, de collaborer et d'évoluer ensemble.</p>
        </div>
        <ul className="social-icons">
          <li>
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faTiktok} className="social-icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </li>
        </ul>
      </div>
    );
  }
  
  export default Footer;

