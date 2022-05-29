import React, { useState } from "react";
import { Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import Camera from "./Camera";
import MyNavbar from "./MyNavbar";
import "./Register.css";

const GetDataByImage = (props) => {
  const [accessCamera, setAccessCamera] = useState(false);
  const [img, setImg] = useState(null);
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(img);
  };

  const imageHandler = (e) => {
    setImg(e.target.files[0]);
  };

  const getImage = (image) => {
    setImg(image);
  };
  return (
    <div>
      <MyNavbar links={[{ name: "Upload Document", href: "/uploadoc" }, {name:"Upload Photos", href:"/UploadUserPhotos"}]} />
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
              onChange={imageHandler}
            />
          </Form.Group>
          {accessCamera ? (
            <div>
              <Camera getImage={getImage} />
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
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "10px" }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default GetDataByImage;
