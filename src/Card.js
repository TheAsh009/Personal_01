import React from "react";
import "./Card.css";

function Card(props) {
  // const userName = props.obj.name;
  const image = props.obj.image;
  const designation = props.obj.designation;
  const description = props.obj.description;

  return (
    <div className="card-container">
      <img src={image} style={{ width: "50px", height: "50px" }} />
      <h3>{designation}</h3>
      <h1>{props.obj.name}</h1>
      <p>{description}</p>
    </div>
  );
}
export default Card;
