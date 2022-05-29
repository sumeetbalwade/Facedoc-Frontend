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
import UploadUserPhotos from "./components/UploadUserPhotos";
import Home from './Home'
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
      <Route exact path="/" element={<Home/>}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/uploadoc" element={<UploadDoc/>}></Route>
      <Route path="/getDataByImage" element={<GetDataByImage />}></Route>
      <Route path="/showProfile" element={<ShowProfile />}></Route>
      <Route path="/UploadUserPhotos" element={<UploadUserPhotos />}></Route>

    </Routes>
  );
};

export default App;
// npm run dev
