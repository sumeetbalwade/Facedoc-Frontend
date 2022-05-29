import React from "react";
import { Card, Button } from "react-bootstrap";

const ShowDocument = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      {console.log("inside showdoc")}
      <Card.Img
        variant="top"
        src={props.img}
        style={{ height: "15rem", padding: "3px" }}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Button
          variant="primary"
          onClick={() => {
            window.open(props.img, "_blank");
          }}
          target="_blank"
        >
          View
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ShowDocument;
