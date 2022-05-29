import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShowDocument from "./ShowDocument";

const ShowDocuments = (props) => {
  return (
    <Container>
      <h3
        style={{
          paddingTop: "5%",
          width: "20%",
          borderBottom: "3px solid rgba(0, 0, 0, .3)",
          paddingBottom: "10px",
        }}
      >
        User Documents
      </h3>
      <Row style={{"marginBottom" : "10%"}}>
        {props.docs.map(({ documentName, documentUrl }, index) => {
          return (
            <Col lg={4} key={index}>
              <ShowDocument  name={documentName} img={documentUrl} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ShowDocuments;
