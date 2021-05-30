import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  let audio = new Audio(props.phonetic.audio);

  const start = () => {
    audio.play();
  };
  return (
    <div className="Phonetic">
      <button className="btn phoneticButton" onClick={start}>
        <i class="fas fa-volume-up"></i>
      </button>
      <span className="phonetic-text">{props.phonetic.text}</span>
    </div>
  );
}
