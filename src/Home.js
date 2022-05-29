import React from "react";
import MyNavbar from "./components/MyNavbar";
import "./Home.css";
const Home = (props) => {
  return (
    <div>
      <MyNavbar
        links={[
          { name: "Register", href: "/register" },
          { name: "Login", href: "/login" },
        ]}
      />
      <h1 style={{ textAlign: "center", paddingTop: "10%" }}>
        Welcome To FaceDoc
      </h1>
      <div>

      </div>

    </div>
  );
};

export default Home;
