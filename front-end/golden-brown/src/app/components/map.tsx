import React, { useState } from "react";

const countries = [
  { name: "Saudi Arabia", coordinates: [24.7136, 46.6753] },
  { name: "United States", coordinates: [37.0902, -95.7129] },
  { name: "United Kingdom", coordinates: [55.3781, -3.4360] },
];

const MapComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="map-component">
      <div className="country-tabs">
        {countries.map((country) => (
          <button
            key={country.name}
            onClick={() => handleCountryChange(country)}
            className={`tab ${selectedCountry.name === country.name ? "active" : ""}`}
          >
            {country.name}
          </button>
        ))}
      </div>
      <div className="map-display">
        <h2>Map of {selectedCountry.name}</h2>
        <p>Coordinates: {selectedCountry.coordinates.join(", ")}</p>
        {/* Here you would integrate a map library to display the actual map */}
      </div>
    </div>
  );
};

export default MapComponent;