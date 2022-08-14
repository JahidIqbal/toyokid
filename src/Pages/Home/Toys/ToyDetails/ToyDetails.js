import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ToyDetails = () => {
  let { id } = useParams();
  const [toyDetails, setToyDetails] = useState([]);
  useEffect(() => {
    fetch("./toyscollection.json")
      .then((res) => res.json())
      .then((data) => {
        const foundToy = data.filter((detail) => detail.id == id);
        setToyDetails(foundToy);
      });
  }, []);

  const { name, description, image, price, date, time, rating } =
    toyDetails[0] || {};
  return <div className="container mt-4"></div>;
};

export default ToyDetails;
