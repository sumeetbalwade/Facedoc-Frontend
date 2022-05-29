import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import MyNavbar from "./components/MyNavbar";
import UploadDoc from "./components/UploadDoc";
import Camera from "./components/Camera";
import ShowDocument from "./components/ShowDocument";
import ShowDocuments from "./components/ShowDocuments";
import ShowProfile from "./components/ShowProfile";
import AddRole from "./components/AddRole";
import GetDataByImage from "./components/GetDataByImage";

const App = () => {
  return (
    // <div>
    // <Register />
    //   <Login />
    // <UploadDoc />
    //   <ShowDocuments />
    //   <ShowProfile />
    //   <AddRole />
    //   <GetDataByImage />
    // </div>
    <Routes>
      <Route path="/" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/uploadoc" element={<UploadDoc/>}></Route>
      <Route path="/getDataByImage" element={<GetDataByImage />}></Route>
    </Routes>
  );
};

export default App;
// npm run dev
