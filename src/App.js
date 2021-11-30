import { Routes, Route } from 'react-router-dom';

import { Navbar, Offcanvas, ListGroup } from 'react-bootstrap';

import Home from './pages/home/home';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';
import About from './pages/about/about';
import Author from './pages/author/author';

import './app.scss';

function App() {
  return (
    <>
      <Navbar expand={false} className="d-inline-block p-0 fixed-top">
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="mt-3 ms-3 bg-light" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListGroup variant="flush" className="border-bottom">
              <ListGroup.Item className="fw-bold" action href="/">Home</ListGroup.Item>
              <ListGroup.Item className="fw-bold" action href="/author">Author</ListGroup.Item>
              <ListGroup.Item className="fw-bold" action href="/about">About</ListGroup.Item>
              <ListGroup.Item className="fw-bold" action href="/signin">SignIn</ListGroup.Item>
              <ListGroup.Item className="fw-bold" action href="/signup">SignUp</ListGroup.Item>
            </ListGroup>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
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
