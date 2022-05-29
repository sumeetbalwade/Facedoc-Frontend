import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Register.css";
import MyNavbar from "./MyNavbar";
import axios from "axios";

const Register = (props) => {
  const initialFormData = Object.freeze({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [formdata, setFormData] = useState(initialFormData);
  const changeHandler = (event) => {
    // console.log(event.target.value)
    setFormData({
      ...formdata,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formdata);
    let baseUrl = `${process.env.BASEURL}/api/user`;
    console.log(process.env);

    console.log(baseUrl);

    axios.post(baseUrl, formdata).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <MyNavbar
        links={[
          { name: "Home", href: "/" },
          { name: "Login", href: "/login" },
        ]}
      />

      <div className="wrap">
        <h3>Register User</h3>
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={changeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              onChange={changeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone"
              name="mobileNumber"
              onChange={changeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={changeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              // onChange={changeHandler}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
