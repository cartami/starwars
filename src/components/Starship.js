import React from "react";

const Starship = ({ name }) => {
    console.log(name)
    return(
    <div className="card">
      <h3>{name}</h3>
    </div>
  );
};

export default Starship;
