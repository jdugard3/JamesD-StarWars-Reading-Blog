import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PersonDetails = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  // Fetch person details based on the id from URL parameters
  useEffect(() => {
    actions.getPersonDetails(id);
  }, []);

  return (
    <div className="container my-5">
      {store.personDetails ? (
        // Updated card layout with a modern design, including rounded corners and shadow
        <div className="card bg-dark text-light p-4" style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
          <div className="row">

            {/* Display character image with a rounded style */}
            <div className="col-md-4">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                className="img-fluid rounded"
                alt={store.personDetails.properties.name}
              />
            </div>

            {/* Display character details in a two-column layout */}
            <div className="col-md-8">
              <h1 className="text-warning">{store.personDetails.properties.name}</h1>
              <p className="fs-4">Birth Year: {store.personDetails.properties.birth_year}</p>
              <p className="fs-4">Gender: {store.personDetails.properties.gender}</p>
              <p className="fs-4">Height: {store.personDetails.properties.height}</p>
              <p className="fs-4">Skin Color: {store.personDetails.properties.skin_color}</p>
              <p className="fs-4">Hair Color: {store.personDetails.properties.hair_color}</p>
              <p className="fs-4">Mass: {store.personDetails.properties.mass}</p>
              <p className="fs-4">Eye Color: {store.personDetails.properties.eye_color}</p>

              {/* Button to navigate back to the home page */}
              <Link to="/">
                <button className="btn btn-primary btn-lg mt-3">Back home</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // Display loading GIF while data is being fetched
        <img src="https://media1.tenor.com/m/fc47Cmt6yn4AAAAC/star-wars-disney.gif" alt="Loading..." />
      )}
    </div>
  );
};

export default PersonDetails;
