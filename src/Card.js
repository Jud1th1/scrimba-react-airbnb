import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "RESERVED";
  } else if (props.item.location === "Trending") {
    badgeText = "TRENDING";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={props.item.coverImg}
        className="card--image"
        alt="Destinations"
      />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" alt="Star icon" />
        <span>{props.item.stats.rating}</span>
        <span className="gray"> • {props.item.location}</span>
      </div>
      <p className="card--title">
        <b>{props.item.title}</b>
      </p>
      <p className="card--description">{props.item.description}</p>
      <p className="card--price">
        <b>From ${props.item.price}</b> / night
      </p>
    </div>
  );
}
