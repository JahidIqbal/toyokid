import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Toy from "./Toy/Toy";

const Toys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("./toyscollection.json")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="mx auto mt-5">
      <h2 className="fw-bolder display w-100 mt-5" style={{ color: "#181D4E" }}>
        Featured Items
      </h2>
      <p>Kids toys and Games</p>

      {toys.length === 0 ? (
        <div className="spinner-border text-info text-center" role="status">
          <span className="visually-hidden">Loading</span>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          {toys.slice(0, 9).map((toy) => (
            <Toy key={toy._id} toy={toy}></Toy>
          ))}
        </div>
      )}
    </div>
  );
};

export default Toys;
