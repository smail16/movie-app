import React from 'react'
import './Header.css'
import {  Container, Form, Nav, Navbar, } from 'react-bootstrap'
import StartRating from '../startrating/StartRating'
import { Link } from 'react-router-dom'


const Header = ({fil, ser, chan, moves,handeleRating, ratefil}) => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to={"/"} ><Navbar.Brand className='titre'>Movies</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={ser}
              onChange={chan}
              
              
              
            />
            <br></br>
            <div>
            <StartRating rate={ratefil} handeleRating={handeleRating}/>
            </div>
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header