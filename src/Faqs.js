import React, { Component } from 'react';
import './style.css';
import './bootstrap.min.css';
import { Helmet } from 'react-helmet';
import { Navbar, Nav } from 'react-bootstrap';

class Faqs extends Component {
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

                        <div  id="galawhite" ></div>

                        </div>
                      </div>
                </div>
                <div className="row no-gutters">

                      <div className="col">

                        <div id="overviewbox">
                          <div className="container">
                            <div className="row justify-content-center">
                              <div className="col">

                                  <h1 className="display-5" id="slogan-statement">
                                    <div className="brown-colored"> CONNECT da</div> 
                                    AND <div className="brown-colored"> JOIN </div>
                                    OTHER <br />TRAVELLERS IN A <div className="brown-colored"> SNAP</div>
                                  </h1>
                              </div>
                            </div>
                            <div className="row justify-content-center" >
                              <div className="vid-container">
                              <iframe title="GalaVideo" src="https://www.youtube.com/embed/P22gcb4YHso?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1;start=5" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen className="video"></iframe>
                              </div>
                              </div>
                            <div className="row justify-content-center" id="glyphs">
                                  <div className="col-md" >
                                      <div id="connectbox">
                                        <div id="connectimg"></div>
                                            Connect and share your favorite photos with other travellers.

                                      </div>
                                  </div>
                                  <div className="col-md" >
                                    <div id="organizebox">
                                      <div id="organizeimg"></div>
                                          Easily Create Tours
                                          and Track Payments from
                                          Event Joiners

                                    </div>
                                  </div>
                                  <div className="col-md">
                                    <div id="joinbox">
                                      <div id="joinimg"></div>
                                          Browse & Join
                                          Organized Tours from
                                          verified Organizers.

                                    </div>
                                  </div>
                            </div>

                          </div>
                        </div>
                      </div>


                </div>

          </div>
        </div>
      </div>
    
    );
  }
}

export default Faqs;
