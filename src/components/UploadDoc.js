import React, { useState } from "react";
import "./Register.css";
import { Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import DOCUMENTS from "./Ducuments";
import { formatWithCursor } from "prettier";

import axios from "axios";
const UploadDoc = (props) => {
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

    let baseUrl = `${process.env.BASEURL}/api/doc/1`;
    console.log(baseUrl);

    axios.post(baseUrl, formData).then((res) => {
      console.log(res);
    });
    

  };
  return (
    <div className="wrap">
      <h3>Upload Document</h3>
      <Form onSubmit={onSubmitHandler}>
        <DropdownButton
          title="Select Document"
          id="dropdown-menu-align-right"
          onSelect={documentSelectHandler}
          style={{ marginBottom: "3%" }}
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
  );
};

export default UploadDoc;
