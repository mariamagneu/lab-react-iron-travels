import React from "react";

const DestinationCard = ({ location }) => {
  return (
    <div
      className="container"
      style={{
        border: "2px solid black",
        margin: "50px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div>
        <img
          src={location.image}
          alt={location.destination}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="textContainer" style={{ textAlign: "left" }}>
        <h1>
          {location.destination} ({location.days} days)
        </h1>
        <p>
          <i>{location.description}</i>
        </p>
        <p>
          <b>Price:</b> {location.totalCost}
        </p>
      </div>
    </div>
  );
};

export default DestinationCard;
