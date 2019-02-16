import React, { Component } from 'react';
import './style.css';
import './bootstrap.min.css';
import { Helmet } from 'react-helmet';
import { Navbar, Nav } from 'react-bootstrap';

class Events extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Gala - Organize and Join Travels in a Snap</title>
          <meta name="description" content="Organize and Join Travels in a Snap" />
        </Helmet>
        <div className="">
          <div className="background-image"></div>

          <div className="container-full">
              <div className="row no-gutters">

                    <div className="col">
                      <Navbar bg="light" className="navbar" expand="lg">
                        <Navbar.Brand href="#home"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="mr-auto">
                            <Nav.Link href="/#/" className="nav-item">Home</Nav.Link>
                            <Nav.Link href="/#/events" className="nav-item">Events</Nav.Link>
                            <Nav.Link href="/#/faqs" className="nav-item">FAQs</Nav.Link>
                          </Nav>
                        </Navbar.Collapse>
                      </Navbar>;
                    </div>
              </div>
                <div className="row no-gutters" >

                      <div className="col">
                        <div id="backdrop" >

                            <div  id="galawhite" >
                                
                            </div>

                            <div className="header-text">COMING SOON</div>

                        </div>
                      </div>
                </div>
          </div>
        </div>
      </div>
    
    );
  }
}

export default Events;
