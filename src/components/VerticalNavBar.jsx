import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlus,
  faComments,
  faFire,
  faThumbsUp,
  faSearch,
  faUsers,
  faLightbulb,
  faBookmark,
  faHistory,
  faCog,
  faFileAlt,
  faScroll,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./VerticalNavBar.css"; // Assurez-vous que ce chemin pointe vers votre fichier CSS pour les styles

export default function VerticalNavBar({ li }) {
  const [isOpen, setIsOpen] = useState(true); // isOpen est initialisé à true par défaut

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Inverser l'état isOpen
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark custom-navbar flex-column align-items-start">
      <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faAngleDown} size="sm" />
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
        <ul className="navbar-nav flex-column w-100">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faHome} className="navbar__icon" />
              <span className="navbar__text">My Feed</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faPlus} className="navbar__icon" />
              <span className="navbar__text">New Feed</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faComments} className="navbar__icon" />
              <span className="navbar__text">Discussion</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faFire} className="navbar__icon" />
              <span className="navbar__text">Popular</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faThumbsUp} className="navbar__icon" />
              <span className="navbar__text">Most Upvoted</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faSearch} className="navbar__icon" />
              <span className="navbar__text">Search</span>
            </a>
          </li>
          {/* Ajoutez d'autres éléments de menu ici */}
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faUsers} className="navbar__icon" />
              <span className="navbar__text">Community Picks</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faLightbulb} className="navbar__icon" />
              <span className="navbar__text">Suggest New Source</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faBookmark} className="navbar__icon" />
              <span className="navbar__text">Bookmarks</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faHistory} className="navbar__icon" />
              <span className="navbar__text">History</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faCog} className="navbar__icon" />
              <span className="navbar__text">Customize</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faFileAlt} className="navbar__icon" />
              <span className="navbar__text">Docs</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faScroll} className="navbar__icon" />
              <span className="navbar__text">Changelog</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faClipboardList} className="navbar__icon" />
              <span className="navbar__text">Feedback</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}




