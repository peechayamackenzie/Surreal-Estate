import React from "react";
import "../styles/PropertyCard.css";

const PropertyCard = ({ 
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email
  }) => {
  return (
    <div className="property-card">
      <ul>
        <li className="property-card_title">{title}</li>
        <li className="property-card_type">{type}</li>
        <li className="property-card_bathrooms">{bathrooms}</li>
        <li className="property-card_bedrooms">{bedrooms}</li>
        <li className="property-card_price">{price}</li>
        <li className="property-card_city">{city}</li>
        <li className="property-card_email">{email}</li>
      </ul>
    </div>
  );
}

export default PropertyCard;
