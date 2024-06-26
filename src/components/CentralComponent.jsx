import React, { useState, useEffect } from "react";
import "./CentralComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp as faArrowUpVote,
  faComment,
  faBookmark,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

export default function CentralComponent({
  title,
  hashtag,
  date,
  readTime,
  imageUrl,
  upvotes,
  comments,
}) {
  return (
    <div className="central-component">
      <h2 className="component-title">{title}</h2>
      <div className="component-hashtag">#{hashtag}</div>
      <div className="component-details">
        <span className="component-date">{date}</span>
        <span className="component-readTime"> - {readTime}</span>
      </div>
      <img src={imageUrl} alt={title} className="component-image" />
      <div className="component-icons">
        <div className="icon-group">
          <div className="icon-container upvote-container">
            <FontAwesomeIcon icon={faArrowUpVote} className="icon" />
            <span className="icon-text">{upvotes}</span>
          </div>
          <div className="icon-container comment-container">
            <FontAwesomeIcon icon={faComment} className="icon" />
            <span className="icon-text">{comments}</span>
          </div>
          <FontAwesomeIcon icon={faBookmark} className="icon-bookmark" />
          <FontAwesomeIcon icon={faCopy} className="icon-copy" />
        </div>
      </div>
    </div>
  );
}




