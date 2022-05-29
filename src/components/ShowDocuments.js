import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShowDocument from "./ShowDocument";

const ShowDocuments = (props) => {
  const [docs, setDocs] = useState([
    {
      name: "document1",
      img: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "document2",
      img: "https://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);
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
        {docs.map(({ name, img }) => {
          return (
            <Col lg={4}>
              <ShowDocument key={name} name={name} img={img} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ShowDocuments;
