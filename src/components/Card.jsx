import React from "react";
import data from "../data/data";

const Card = () => {
  return (
    <div className="card-container">
      {data.map(({ id, title, details, imageURL }) => {
        return (
          <div className="card-body" key={id}>
            <img className="card-image" src={imageURL} />
            <h3 className="card-title">{title}</h3>
            <p className="card-details">{details}</p>
            <button className="card-btn">Get Started</button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
