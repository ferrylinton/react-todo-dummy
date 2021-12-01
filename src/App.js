import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Offcanvas, ListGroup, Navbar, Container } from 'react-bootstrap';

import Home from './pages/home/home';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';
import About from './pages/about/about';
import Author from './pages/author/author';

import './app.scss';

function App() {

  return (
    <>
      <Navbar bg="primary" variant="dark" expand={false}>
        <Container fluid>
          <Navbar.Brand href="/" className="logo">todo</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel" className="logo">todo</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="text-center" action href="/">Home</ListGroup.Item>
                <ListGroup.Item className="text-center" action href="/author">Author</ListGroup.Item>
                <ListGroup.Item className="text-center" action href="/about">About</ListGroup.Item>
                <ListGroup.Item className="text-center" action href="/signin">SignIn</ListGroup.Item>
                <ListGroup.Item className="text-center" action href="/signup">SignUp</ListGroup.Item>
              </ListGroup>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/author' element={<Author />} />
        <Route exact path='/signin' element={<Signin />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
