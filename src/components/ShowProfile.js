import React, { useState } from "react";
import ShowDocuments from "./ShowDocuments";
import { Container } from "react-bootstrap";
import "./ShowProfile.css";

const ShowProfile = (props) => {
  const [details, setDetails] = useState();

  return (
    <div style={{"border": "2px solid rgba(0,0,0,.3)", "margin":"3%","borderRadius" :"5px"}}>
      <Container >
        <h3 style={{"marginTop": "5%"}}>Person Profile</h3>
        <ul>
          <li>
            <h5>Name: Sagar Mahajan</h5>
          </li>
          <li>
            <h5>Email: 2000sagarr@gmail.com</h5>
          </li>
          <li>
            <h5>Phone: 9325655402</h5>
          </li>
        </ul>
      </Container>

      <ShowDocuments />
    </div>
  );
};

export default ShowProfile;
