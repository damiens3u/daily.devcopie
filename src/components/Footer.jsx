import React from 'react'; 
import logo from '../assets/logo.png'; // Importez le logo
import { TiFlag } from 'react-icons/ti'; // Importez l'icône de drapeau
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faTiktok, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons'; // Importez l'icône de drapeau
import './Footer.css'; // Assurez-vous d'avoir un fichier CSS pour le style du footer si nécessaire

const Footer = () => {
  const countryFlags = [
    { code: 'il' }, // Israël
    { code: 'it' }, // Italie
    { code: 'si' }, // Slovénie
    { code: 'nl' }, // Pays-Bas
    { code: 'gb' }, // Angleterre
    { code: 'hr' }, // Croatie
    { code: 'au' }, // Australie
    { code: 'pl' }, // Pologne
    { code: 'ro' }, // Roumanie
    { code: 'no' }, // Norvège
    { code: 'al' }, // Albanie
    { code: 'pt' }, // Portugal
    { code : 'fr' }, //France
  ];
    return (
        <div className="footer-container custom-footer">
            <div className="footer-text">
                <img src={logo} alt="daily.dev logo" className="logo"/>
                <p>daily.dev est un réseau professionnel qui permet aux développeurs d'apprendre, de collaborer et d'évoluer ensemble.</p>
                <div className="social-icons">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          <FontAwesomeIcon icon={faTiktok} className="social-icon" />
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
              </div>
            </div>
            <div className="footer-columns">
                <div className="footer-column">
                    <h3>Product</h3>
                    <ul>
                        <li>Chrome extension</li>
                        <li>Edge add-on</li>
                        <li>Firefox add-ons</li>
                        <li>Web version</li>
                        <li>Mobile</li>
                        <li>Squads (Beta)</li>
                        <li>Changelog</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Community</h3>
                    <ul>
                        <li>Docs</li>
                        <li>Open source</li>
                        <li>Feature requests</li>
                        <li>Online events</li>
                        <li>Swag store</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Advertise</li>
                        <li>Brand book</li>
                        <li>About us</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <p className="footer-message">Working remotely wherever we're happiest</p>
            <ul className="flag-icons">
        {countryFlags.map((country, index) => (
          <li key={index}>
            <TiFlag className="flag-icon" title={country.code.toUpperCase()} />
          </li>
        ))}
      </ul>
      <div className="footer-bottom">
        <p>&copy; 2024 Daily Dev Ltd. | <a href="#">Terms</a> | <a href="#">Privacy</a> | <a href="#">Guidelines</a></p>
      </div>
        </div>
    );
}
  
export default Footer;


