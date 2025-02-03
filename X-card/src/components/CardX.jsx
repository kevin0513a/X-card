import { useState } from "react";
import React from "react";
import "./CardX.css";

export function CardX({name, username}) {
  const [isFollowed, setIsFollowed] = useState(false);

  function handleOnClick(){
    setIsFollowed(!isFollowed);
  }
  const text = isFollowed ? 'Unfollow' : 'Follow';
  return (
    <>
      <div className="container-card">
        <section className="container-img">
          <img
            className="image-style"
            alt="usuario"
            src={`https://unavatar.io/x/${username}`}
          ></img>
        </section>
        <aside className="container-text">
          <strong>{name}</strong>
          <p className="small-gray">@{username}</p>
        </aside>
        <section className="container-button">
          <button onClick={handleOnClick} className="button-card">{text}</button>
        </section>
      </div>
    </>
  );
}
