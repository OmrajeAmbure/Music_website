import React from 'react';
import { Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { BsSpotify, BsSearch } from 'react-icons/bs';
import { useNavigate, Link } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchTerm = document.getElementById("inp").value.trim();
    if (searchTerm) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate('/search'); // Handle empty searches
    }
  };

  return (
    <>
      <Navbar key="md" expand="md" className="bg-set mb-5 fixed-top">
        <Container fluid>
          <Navbar.Brand href="#">
            <h2 className='text-white'><BsSpotify /> Spotify</h2>
          </Navbar.Brand>
          <Button 
            variant="outline-success" 
            className='text-end d-lg-none d-md-none d-xl-none d-sm-block' 
            onClick={handleSearch}
          >
            <BsSearch />
          </Button>
          <Button variant="outline-success" className='text-end d-lg-none d-md-none d-xl-none d-sm-block'>
            Open App
          </Button>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className='bg-secondary' />
          <Form className="d-none d-lg-flex d-md-flex w-50 mx-auto text-white">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 bg-black text-white rounded rounded-4"
              aria-label="Search"
              id='inp'
            />
            <Button variant="outline-success" onClick={handleSearch}>
              Search
            </Button>
          </Form>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            className="bg-set"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <h2 className='text-white'><BsSpotify /> Spotify</h2>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-10">
                <Nav.Link as={Link} to="/" className='text-white active'>Home</Nav.Link>
                <Nav.Link as={Link} to="/help" className='text-white'>Help</Nav.Link>
                <Nav.Link as={Link} to="/categories" className='text-white'>Categories</Nav.Link>
                <Nav.Link as={Link} to="/download" className='text-white'>Download</Nav.Link>
                <Nav.Link as={Link} to="/signup" className='px-3 py-2 mx-lg-2 mx-xl-2 mx-md-2 mx-sm-0 my-lg-0 my-xl-0 my-md-0 my-sm-2 text-white p-2 login'>Sign Up</Nav.Link>
                <Nav.Link as={Link} to="/login" className='px-4 py-2 mx-lg-2 mx-xl-2 mx-md-2 mx-sm-0 my-lg-0 my-xl-0 my-md-0 my-sm-2 p-2 sign'>Log In</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
