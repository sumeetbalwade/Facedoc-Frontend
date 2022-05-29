import React, { useState } from "react";
import ShowDocuments from "./ShowDocuments";
import { Container } from "react-bootstrap";
import "./ShowProfile.css";

const ShowProfile = (props) => {
  return (
    <div style={{"border": "2px solid rgba(0,0,0,.3)", "margin":"3%","borderRadius" :"5px"}}>
      <Container >
        <h3 style={{"marginTop": "5%"}}>Person Profile</h3>
        <ul>
          <li>
            <h5>Name: {props.data.name}</h5>
          </li>
          <li>
            <h5>Email: {props.data.email}</h5>
          </li>
          <li>
            <h5>Phone: {props.data.mobileNumber}</h5>
          </li>
          <li>
            <h5>Role: {props.data.role}</h5>
          </li>
        </ul>
      </Container>

      <ShowDocuments docs={props.data["documents"]} />
    </div>
  );
};

export default ShowProfile;
