import React,{useState} from "react";
import Documents from "./Ducuments";


const AddRole = (props) => {
  let initPermission = Documents.map((item) => {
    return {item: false};
  });
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissons] = useState(initPermission);
  return <div>{console.log(permissions)}</div>;
};

export default AddRole;
