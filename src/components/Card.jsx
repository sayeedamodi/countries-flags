import React from "react";
import countries from "../countries";

function Card(props) {
    return (
        <div>
            <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="flag">
            <span className={`fi fi-${props.flag.toLowerCase()}`}>
          
            </span>
            </span>
            <span> {props.country}</span>
          </dt>
          <dd>{props.description}</dd>
        </div>
      </dl>
        </div>
    )
}

export default Card ;