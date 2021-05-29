import React from "react";
import audioIcon from "./images/audioIcon.svg";
import "./Phonetic.css";

export default function Phonetic(props) {
  let audio = new Audio(props.phonetic.audio);

  const start = () => {
    audio.play();
  };
  return (
    <div className="Phonetic">
      <button className="btn phoneticButton" onClick={start}>
        <img src={audioIcon} alt="megaphone" />
      </button>
      <span className="phonetic-text">{props.phonetic.text}</span>
    </div>
  );
}
