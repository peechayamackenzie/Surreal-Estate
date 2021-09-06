import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import SideBar from "./SideBar";

const Properties = () => {
  const initialState = {
    properties: [],
    alert: {
      message: "",
    },
  };

  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    setAlert({ message: "" });

    return axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((response) => setProperties(response.data))
      .catch(() => {
        setAlert({
          message: "Properties are not found",
        });
      });
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div className="properties">
      <SideBar />
      <Alert message={alert.message} />
      {properties.map((property) => (
        <div key={property._id} className="col">
          <PropertyCard {...property} />
        </div>
      ))}
      {/* {properties.map((property) => {
        return (
          <PropertyCard
            key={property._id}
            title={property.title}
            type={property.title}
            bathrooms={property.bathrooms}
            bedrooms={property.bedrooms}
            price={property.price}
            city={property.city}
            email={property.email}
          />
        );
      })} */}
    </div>
  );
};

export default Properties;
