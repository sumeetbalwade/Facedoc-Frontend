import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./Register.css";
import axios from "axios";
import MyNavbar from "./MyNavbar";
import { useHistory } from 'react-router-dom';


const Login = (props) => {
  const initForm = Object.freeze({
    email: "",
    password: "",
  });

  const [formdata, setFormData] = useState(initForm);

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
    let baseUrl = `${process.env.BASEURL}/api/token`;
    console.log(baseUrl);

    axios.post(baseUrl, formdata).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <MyNavbar
        links={[
          { name: "Register", href: "/register" },
        ]}
      />
      <div className="wrap">
        <h3>Log In</h3>
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
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

          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
