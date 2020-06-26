import React, { useState, useRef } from "react";
import useSwr from "swr";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import "../../app/App.css";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

// const Marker = ({ children }) => children;
const Marker = (props) => {
  return (
    <>
      <div className="pin"></div>
      <div className="pulse"></div>
    </>
  );
};

const HomeView = (props) => {
  console.log("hello" + props.markers);
  const mapRef = useRef();
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA8Jdg0GRV9vewO5aqcNULkYcZdjy5PD7E" }}
        defaultCenter={{ lat: 40.7, lng: 74 }}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
      >
        {props.markers.map((marker) => (
          <Marker
            key={Math.floor(Math.random() * 99999999)}
            lat={marker.lat}
            lng={marker.long}
            // lat={latitude}
            // lng={longitude}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default HomeView;
