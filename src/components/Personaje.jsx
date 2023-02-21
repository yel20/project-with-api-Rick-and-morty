import React from "react";

const Personaje = ({ item }) => {
  const { name, species, image } = item;
  return (
    <div className="col-md-3 mb-2">
      <div className="card">
        <img src={image} alt="" />
        <div className="card-body">
          <h5>{name}</h5>
          <p>{species}</p>
        </div>
      </div>
    </div>
  );
};

export default Personaje;
