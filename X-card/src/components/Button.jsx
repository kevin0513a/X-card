import { useState } from "react";
import "./Button.css";

export function Button({ isFollowing }) {
  const [isFollowed, setIsFollowed] = useState(isFollowing);

  function handleOnClick() {
    setIsFollowed(!isFollowed);
  }
  const text = isFollowed ? "Following" : "Follow";

  const stylesText = isFollowed ? "button-card-following" : "button-card";
  return (
    <>
      <button onClick={handleOnClick} className={stylesText}>
        <span className="tw-followCard-text">{text}</span>
        <span className="stopFollow">Unfollow</span>
      </button>
    </>
  );
}
