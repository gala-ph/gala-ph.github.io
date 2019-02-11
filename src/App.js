import React, { Component } from 'react';
import './style.css';
import './bootstrap.min.css';
import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Gala - Organize and Join Travels in a Snap</title>
          <meta name="description" content="Organize and Join Travels in a Snap" />
          <script src="./../public/bootstrap.js"></script>
        </Helmet>
        <div className="">
          <div className="background-image"></div>

          <div className="container-full">
              <div className="row no-gutters">

                    <div className="col">
                      <nav className="navbar navbar-expand-sm navbar-light bg-white">
                        <a className="navbar-brand" href="#">
                          <div id="brand"></div>
                        </a>
                          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                          <div className="navbar-nav ml-auto">
                            <a className="nav-item " href="#">HOME <span className="sr-only">(current)</span></a>
                            <a className="nav-item " href="#">EVENTS</a>
                            <a className="nav-item " href="#">FAQ</a>
                          </div>
                        </div>
                      </nav>
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
                                    <div className="brown-colored"> CONNECT</div> 
                                    AND <div className="brown-colored"> JOIN </div>
                                    OTHER <br />TRAVELLERS IN A <div className="brown-colored"> SNAP</div>
                                  </h1>
                              </div>
                            </div>
                            <div className="row justify-content-center" >
                              <div className="vid-container">
                              <iframe src="https://www.youtube.com/embed/P22gcb4YHso?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1;start=5" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen className="video"></iframe>
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

export default App;
