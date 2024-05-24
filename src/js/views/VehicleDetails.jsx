import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const VehicleDetails = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getVehicleDetails(params.id);
  }, []);
  console.log(store.vehicleDetails.properties);

  return (
    <div className="jumbotron">
      <h1 className="display-4">{store.vehicleDetails.properties.name}</h1>

      <hr className="my-4" />

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

export default VehicleDetails;

VehicleDetails.propTypes = {
  match: PropTypes.object,
};
