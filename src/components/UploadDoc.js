import React, { useState } from "react";
import "./Register.css";
import { Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import DOCUMENTS from "./Ducuments";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MyNavbar from "./MyNavbar";

const UploadDoc = (props) => {
  const navigate = useNavigate();
  const [document, setDocument] = useState("");
  const [image, setImage] = useState(null);

  const documentSelectHandler = (e) => {
    setDocument(e);
    console.log(e);
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("documentName", document);
    formData.append("document", image);

    let baseUrl = `${process.env.BASEURL}/api/doc/${localStorage.getItem(
      "id"
    )}`;
    console.log(baseUrl);

    axios.post(baseUrl, formData).then((res) => {
      console.log(res);
      navigate("/uploadoc");
    });
  };
  return (
    <div>
      <MyNavbar links={[{name:"Get Data By Image", href:"/getDataByImage"},{ name: "Upload Photo", href: "/UploadUserPhotos" }]} />
      <div className="wrap">
        <h3>Upload Document</h3>
        <Form onSubmit={onSubmitHandler}>
          <div style={{ border: "2px solid rbga(0,0,0,.5)" }}>
            <p>{document}</p>
          </div>

          <DropdownButton
            title="Select Document"
            id="dropdown-menu-align-right"
            onSelect={documentSelectHandler}
            style={{ marginBottom: "3%" }}
            value={document}
          >
            {DOCUMENTS.map((doc, i) => {
              return (
                <Dropdown.Item key={i} eventKey={doc}>
                  {doc}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>

          <Form.Group className="mb-3">
            <Form.Control
              type="file"
              accept="image/*"
              placeholder="image"
              onChange={imageHandler}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Upload
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UploadDoc;
