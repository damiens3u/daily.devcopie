import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlus,
  faComments,
  faFire,
  faThumbsUp,
  faSearch,
  faAngleDown,
  faUsers,
  faLightbulb,
  faBookmark,
  faHistory,
  faCog,
  faFileAlt,
  faScroll,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import "./VerticalNavBar.css"; // Importez votre fichier CSS pour les styles

export default function VerticalNavBar({ li }) {
  const [isOpen, setIsOpen] = useState(false);

  const openClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar-menu ${isOpen ? "active" : ""}`}>
      <div className={`toggle-icon ${isOpen ? "active" : ""}`} onClick={openClose}>
        <FontAwesomeIcon icon={faAngleDown} className="toggle-icon" />
      </div>
      <ul className="navbar__list">
        <li className={`navbar__li-box ${isOpen ? "visible" : ""}`}>
          <FontAwesomeIcon icon={faHome} className="navbar__icon" />
          <span className="navbar__text">My Feed</span>
        </li>
        <li className={`navbar__li-box ${isOpen ? "visible" : ""}`}>
          <FontAwesomeIcon icon={faPlus} className="navbar__icon" />
          <span className="navbar__text">New Feed</span>
        </li>
        <li className={`navbar__li-box ${isOpen ? "visible" : ""}`}>
          <FontAwesomeIcon icon={faComments} className="navbar__icon" />
          <span className="navbar__text">Discussion</span>
        </li>
        <li className={`navbar__li-box ${isOpen ? "visible" : ""}`}>
          <FontAwesomeIcon icon={faFire} className="navbar__icon" />
          <span className="navbar__text">Popular</span>
        </li>
        <li className={`navbar__li-box ${isOpen ? "visible" : ""}`}>
          <FontAwesomeIcon icon={faThumbsUp} className="navbar__icon" />
          <span className="navbar__text">Most Upvoted</span>
        </li>
        <li className={`navbar__li-box ${isOpen ? "visible" : ""}`}>
          <FontAwesomeIcon icon={faSearch} className="navbar__icon" />
          <span className="navbar__text">Search</span>
        </li>
        {/* Nouveaux éléments */}
        <li className={`navbar__li-box ${isOpen ? "visible" : ""}`}>
          <FontAwesomeIcon icon={faUsers} className="navbar__icon" />
          <span className="navbar__text">Community Picks</span>
        </li>
        <li className={`navbar__li-box ${isOpen ? "visible" : ""}`}>
          <FontAwesomeIcon icon={faLightbulb} className="navbar__icon" />
          <span className="navbar__text">Suggest New Source</span>
        </li>
        <li className={`navbar__li-box ${isOpen ? "visible" : ""}`}>
          <FontAwesomeIcon icon={faBookmark} className="navbar__icon" />
          <span className="navbar__text">Bookmarks</span>
        </li>
        <li className={`navbar__li-box ${isOpen ? "visible" : ""}`}>
          <FontAwesomeIcon icon={faHistory} className="navbar__icon" />
          <span className="navbar__text">History</span>
        </li>
        <li className={`navbar__li-box ${isOpen ? "visible" : ""}`}>
          <FontAwesomeIcon icon={faCog} className="navbar__icon" />
          <span className="navbar__text">Customize</span>
        </li>
        <li className={`navbar__li-box ${isOpen ? "visible" : ""}`}>
          <FontAwesomeIcon icon={faFileAlt} className="navbar__icon" />
          <span className="navbar__text">Docs</span>
        </li>
        <li className={`navbar__li-box ${isOpen ? "visible" : ""}`}>
          <FontAwesomeIcon icon={faScroll} className="navbar__icon" />
          <span className="navbar__text">Changelog</span>
        </li>
        <li className={`navbar__li-box ${isOpen ? "visible" : ""}`}>
          <FontAwesomeIcon icon={faClipboardList} className="navbar__icon" />
          <span className="navbar__text">Feedback</span>
        </li>
      </ul>
    </nav>
  );
}

