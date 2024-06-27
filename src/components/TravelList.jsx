import React from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  return (
    <>
      {travelPlansData.map((location, index) => (
        <div
          key={index}
          className="container"
          style={{
            border: "2px solid black",
            margin: "50px",
            display: "grid",
            gridTemplate: "1fr / 1fr 1fr",
            gap: "20px",
          }}
        >
          <div className="imageContainer">
            <div>
              <img src={location.image} style={{ width: "100%" }}></img>
            </div>
          </div>
          <div className="textContainer" style={{ textAlign: "left" }}>
            <h1>
              {location.destination} ({location.days} days)
            </h1>
            <p>
              <i>{location.description}</i>
            </p>
            <p>
              {" "}
              <b>price:</b> {location.totalCost}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TravelList;
