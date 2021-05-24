import React from "react";
import audioIcon from "./images/audioIcon.svg";

export default function Phonetic(props) {
  let audio = new Audio(props.phonetic.audio);

  const start = () => {
    audio.play();
  };
  return (
    <div className="Phonetic">
      <button className="btn btn-primary phoneticButton" onClick={start}>
        <img src={audioIcon} alt="megaphone" />
      </button>
      <br />
      {props.phonetic.text}
    </div>
  );
}
