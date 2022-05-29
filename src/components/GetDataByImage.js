import React, { useState } from "react";
import { Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import Camera from "./Camera";
import "./Register.css";

const GetDataByImage = (props) => {
  const [accessCamera, setAccessCamera] = useState(false);
  return (
    <div className="wrap">
      <h3 style={{ width: "30%" }}>Get Data</h3>
      <Form>
        <p style={{ color: "blue" }}>
          *You can upload photo or click photo using camera
        </p>
        <Form.Group className="mb-3">
          <Form.Control type="file" placeholder="image" />
        </Form.Group>
        {accessCamera ? (
          <div>
            <Camera />
            <Button
              variant="danger"
              onClick={() => {
                setAccessCamera(false);
              }}
              style={{ marginTop: "10px" }}
            >
              Close Camera
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => {
              setAccessCamera(true);
            }}
            style={{ marginTop: "10px" }}
          >
            Access Camera
          </Button>
        )}
        <div>
          <Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default GetDataByImage;
