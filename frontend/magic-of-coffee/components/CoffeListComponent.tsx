import React from 'react';

const CoffeeListComponent: React.FC<{ countryDetails: CountryDetails }> = ({ countryDetails }) => {
  if (!countryDetails || !countryDetails.coffees || countryDetails.coffees.length === 0) {
    return <div>No coffee data available.</div>;
  }

  return (
    <div>
      <h2>Coffees from {countryDetails.country.name}</h2>
      <ul>
        {countryDetails.coffees.map(coffee => (
          <li key={coffee.id}>{coffee.name} - ${coffee.price.toFixed(2)} - Rating: {coffee.rating}</li>
        ))}
      </ul>
    </div>
  );
}

export default CoffeeListComponent;
