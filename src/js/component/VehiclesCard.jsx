import React from "react";

const VehicleCard = ({ vehicle, uid, url }) => {
  return (
    <>
      <div className="col-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{vehicle}</h5>
            <a href="#" className="btn btn-primary">
              Vehicles
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleCard;
