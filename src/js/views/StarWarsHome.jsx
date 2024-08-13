import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PeopleCard from "../component/PeopleCard.jsx";
import VehicleCard from "../component/VehiclesCard.jsx";
import PlanetCard from "../component/PlanetsCard.jsx";

const StarWarsHome = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {/* Updated container-fluid to have a gradient background for a modern look */}
      <div className="container-fluid py-5" style={{ background: "linear-gradient(to right, #141e30, #243b55)" }}>

        {/* Section component for Characters */}
        <Section title="Characters">
          {store.people.map((person) => (
            <PeopleCard
              key={person.uid}
              uid={person.uid}
              name={person.name}
              url={person.url}
            />
          ))}
        </Section>

        {/* Section component for Vehicles */}
        <Section title="Vehicles">
          {store.vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.uid}
              uid={vehicle.uid}
              url={vehicle.url}
              vehicle={vehicle.name}
            />
          ))}
        </Section>

        {/* Section component for Planets */}
        <Section title="Planets">
          {store.planets.map((planet) => (
            <PlanetCard
              key={planet.uid}
              uid={planet.uid}
              url={planet.url}
              planet={planet.name}
            />
          ))}
        </Section>
      </div>
    </>
  );
};

// Section component to streamline the structure and apply consistent styling
const Section = ({ title, children }) => (
  <div className="mb-5">
    {/* Styled section titles with a glowing effect and larger font size */}
    <h1 className="text-center mb-4" style={{ color: "#f5c518", fontSize: "2.5rem", textShadow: "2px 2px 10px #f5c518" }}>{title}</h1>

    {/* Adjusted the content to align left and added custom scrollbar styles */}
    <div className="d-flex overflow-auto justify-content-start custom-scrollbar">{children}</div>
  </div>
);

export default StarWarsHome;
