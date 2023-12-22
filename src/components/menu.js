import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; // Add this import statement

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Site</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/articles">Liste des articles</Nav.Link>
          <Nav.Link as={Link} to="/addArticle">Ajout articles</Nav.Link>
          <Nav.Link as={Link} to="/client">Liste des clients</Nav.Link>
          <Nav.Link as={Link} to="/addClient">Ajout clients</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
          <Button variant="outline-success" type="submit">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
