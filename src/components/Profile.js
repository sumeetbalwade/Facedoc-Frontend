import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./Profile.css";
const Profile = (props) => {
  return (
    <div className="profile">
      <Card
        style={{
          width: "50%",
          margin: "10px auto",
          border: "2px solid rgba(0,0,0,.3)",
          padding: "5%",
        }}
      >
        <ListGroup variant="flush">
          <h3 style={{width:"50%"}}>Profile</h3>

          <ListGroup.Item>Name: Sagar Mahajan</ListGroup.Item>
          <ListGroup.Item>Email: 2000sagarr@gmail.com</ListGroup.Item>
          <ListGroup.Item>Phone: 1234567890</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Profile;
