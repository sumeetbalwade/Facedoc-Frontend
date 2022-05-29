import React from "react";
import MyNavbar from "./components/MyNavbar";

const Home = (props) => {
  return (
    <div>
      <MyNavbar
        links={[
          { name: "Register", href: "/register" },
          { name: "Login", href: "/login" },
        ]}
      />
      <h1 style={{ textAlign: "center", paddingTop: "5%" }}>
        Welcome To FaceDoc
      </h1>
    </div>
  );
};

export default Home;
