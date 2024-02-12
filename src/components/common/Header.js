import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css"

function Header() {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "login";
  };

  return (
    <Navbar expand="lg" className=" bg-body-tertiary">
      <Container  className="containerhead">
        <Navbar.Brand href="/homepage" style={{fontSize:"1.7rem",color:"white"}}>Blogify</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: "white" }} />
 
        <Navbar.Collapse id="basic-navbar-nav" style={{color:""}} >
          <Nav className="me-auto">
            <Nav.Link href="/homepage" className="navlink">Home</Nav.Link>
            <Nav.Link href="/create-blog" className="navlink">Create Blog</Nav.Link>
            <Nav.Link href="/my-blogs" className="navlink">My Blogs</Nav.Link>
            <Nav.Link href="/users" className="navlink">Users</Nav.Link>
            {token ? (
              <>
                <Nav.Link href="#" onClick={handleLogout} className="navlink">
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login" className="navlink">Login</Nav.Link>
                <Nav.Link href="/" className="navlink">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
   
      </Container>
    </Navbar>
  );
}

export default Header;