import React from "react";
import { Navbar, Nav , Container} from "react-bootstrap";

const MyNavbar = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">FaceDoc</Navbar.Brand>
          <Nav className="me-auto">
            {props.links.map((a, index)=>{
              return(
                <Nav.Link key={index} href={a.href}>{a.name}</Nav.Link>
              )
            })}

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
