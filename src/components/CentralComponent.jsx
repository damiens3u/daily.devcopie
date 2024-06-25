import React from "react";
import "./CentralComponent.css"; // Assurez-vous d'importer votre fichier CSS pour les styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faComment,
  faBookmark,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

export default function CentralComponent({ title, hashtag, date, readTime, imageUrl, upvotes, comments, }) {
  return (
    <div className="central-component">
      <h2 className="component-title">{title}</h2>
      <div className="component-hashtag">#{hashtag}</div>
      <div className="component-details">
        <span className="component-date">{date}</span>
        <span className="component-readTime">           -  {readTime}</span>
      </div>
      <img src={imageUrl} alt={title} className="component-image" />
      <div className="component-icons">
        <div className="icon-group">
          <FontAwesomeIcon icon={faArrowUp} className="icon-upvotes" />
          <span className="icon-text">{upvotes}</span>
          <FontAwesomeIcon icon={faComment} className="icon-comments" />
          <span className="icon-text">{comments}</span>
          <FontAwesomeIcon icon={faBookmark} className="icon-bookmark" />
          <FontAwesomeIcon icon={faCopy} className="icon-copy" />
        </div>
      </div>
    </div>
  );
}

