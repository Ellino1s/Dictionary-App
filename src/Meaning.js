import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (defenition, index) {
        return (
          <div key={index}>
            <p>
              {defenition.defenition}
              <br />
              <em>{defenition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
