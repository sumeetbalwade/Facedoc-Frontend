import React, { useState } from "react";
import { Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import Camera from "./Camera";
import "./Register.css";
import axios from "axios";

const UploadUserPhotos = (props) => {
  const [accessCamera, setAccessCamera] = useState(false);
  const [img, setImg] = useState([]);
  const [show, setShow] = useState([]);
  const submitHandler = (event) => {
    event.preventDefault();
    img.forEach((data) => {
      const formData = new FormData();
      formData.append("document", data);

      let baseUrl = `${process.env.BASEURL}/api/dataset/1`;
      console.log(baseUrl);
      axios.post(baseUrl, formData).then((res) => {
        console.log(res);
      });
    });
  };

  const imageHandler = (e) => {
    setImg([...e.target.files]);
    setShow([]);
  };

  const getImage = (image, src) => {
    setImg([...img, image]);
    setShow([...show, src]);
  };
  return (
    <div className="wrap">
      <h3 style={{ width: "30%" }}>Get Data</h3>
      <Form onSubmit={submitHandler}>
        <p style={{ color: "blue" }}>
          *You can upload photo or click photo using camera
        </p>
        <Form.Group className="mb-3">
          <Form.Control
            type="file"
            placeholder="image"
            multiple
            onChange={imageHandler}
          />
        </Form.Group>
        {accessCamera ? (
          <div>
            <Camera getImage={getImage} count={img.length} />
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
              setImg([]);
            }}
            style={{ marginTop: "10px" }}
          >
            Access Camera
          </Button>
        )}
        <div>
          {show.map((img, index) => (
            <img key={index} alt="" src={img} />
          ))}
        </div>
        <div>
          <Button
            disabled={img.length !== 20}
            variant="primary"
            type="submit"
            style={{ marginTop: "10px" }}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UploadUserPhotos;
