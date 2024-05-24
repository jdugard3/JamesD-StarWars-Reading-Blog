import React from "react";
import { Link } from "react-router-dom";


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
            <Link to={`/vehicle/${uid}`}>
              <button className="btn btn-primary">Vehicles</button>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleCard;
