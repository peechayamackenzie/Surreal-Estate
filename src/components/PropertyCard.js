import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      {/* <div className="property-card_key">{key}</div> */}
      <div className="property-card_title">{title}</div>
      <div className="property-card_type">{type}</div>
      <div className="property-card_bathrooms">{bathrooms}</div>
      <div className="property-card_bedrooms">{bedrooms}</div>
      <div className="property-card_price">{price}</div>
      <div className="property-card_city">{city}</div>
      <div className="property-card_email">{email}</div>
    </div>
  );
};

PropertyCard.propTypes = {
  // key: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
