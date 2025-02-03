import React from "react";
import "./Newsx.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

export function Newsx({ type, title, post }) {
  return (
    <>
      <div className="news">
      <FontAwesomeIcon className="style-ellipsis" icon={faEllipsis}/>
        <p className="gray-small-news">{type}</p>
        <p>{title}</p>
        <small className="gray-small-news">{post}</small>
      </div>
    </>
  );
}
