import { Button } from "./Button";
import React from "react";
import "./CardxFollow.css";

export function CardxFollow({ name, username, isFollowing }) {
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
          <Button isFollowing={isFollowing} />
        </section>
      </div>
    </>
  );
}
