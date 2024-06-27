import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import DestinationCard from "./DestinationCard"; // Import your DestinationCard component

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  return (
    <>
      {travelPlans.map((location, index) => (
        <DestinationCard key={index} location={location} />
      ))}
    </>
  );
};

export default TravelList;
