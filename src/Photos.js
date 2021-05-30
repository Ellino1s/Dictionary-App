import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row content">
          {props.photos.map(function (photo, index) {
            console.log(photo.src.landscape);
            return (
              <div className="col-4" key={index}>
                {" "}
                <img src={photo.src.landscape} className="img-fluid" />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
