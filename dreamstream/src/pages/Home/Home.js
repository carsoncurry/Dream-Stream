import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Parallax, Row, Footer } from 'react-materialize';

// import { Button, Icon } from 'areact-materialize';

    class Home extends Component {
    login() {
        this.props.auth.login();
    }
    render() {
        const { isAuthenticated } = this.props.auth;
        return (


            
            
                
            <div id="parent">
                
                    <div className="section no-pad-bot">
                            <div className="container">

                                <h3 className="header center white-text text-lighten-2">Welcome To</h3>

                                <img className="center" src="./images/dreamstream2color70.png" alt="dslogo" />
                                <Row className="center">
                                    <h5 className="header col s12 white-text">Your one stop source to finding your favortite show or movie!</h5>
                                </Row>
                                <div className="row center">
                                    <Row className="center">
                                        {
                                            isAuthenticated() && (
                                                <button className="waves-effect waves-light center btn btn-large light-blue white-text loggedin-btn">
                                                    <NavLink to="/mydreamstream" className="white-text">
                                                        Welcome Back! Go to My DreamStream
                                                </NavLink>
                                                </button>
                                            )
                                        }
                                        {
                                            !isAuthenticated() && (
                                                <button className="waves-effect waves-light center btn btn-large light-blue white-text loggedout-btn" onClick={this.login.bind(this)}>
                                                    Log In or Create Your DreamStream Profile
                                                </button>
                                            )
                                        }
                                    </Row>
                                </div>
                            </div>
                        </div>

                        <Parallax imageSrc="./images/TV-Streaming.png"/> 
                

                    }
                    
                                
        
        
                                        
                                
                            {/* <div className="container grey darken-4"> */}
                                <div className="container grey darken-4">

                                    {/* Icon Section */}
                                    <div className="row center grey darken-4">
                                        <div className="col s12 m4 grey darken-4">
                                            <div className="icon-block">
                                                <h2 className="center white-text"><i className="material-icons medium">favorite</i></h2>
                                                <h5 className="center white-text">Simplify Searching</h5>

                                                <p className="center light-blue-text">Finding one source to your favorite shows & movies stops here. You can find free sources, as well as subscription sources from the services you know.  </p>
                                            </div>
                                        </div>

                                        <div className="col s12 m4">
                                            <div className="icon-block">
                                                <h2 className="center white-text"><i className="material-icons medium">mood</i></h2>
                                                <h5 className="center white-text">Tailor your Experience</h5>

                                                <p className="center light-blue-text">By making a totally free account, you can input favorite genres and current streaming services to maximize your viewing sources.</p>
                                            </div>
                                        </div>

                                        <div className="col s12 m4">
                                            <div className="icon-block">
                                                <h2 className="center white-text"><i className="material-icons medium">monetization_on</i></h2>
                                                <h5 className="center white-text">Start a Budget</h5>

                                                <p className="center light-blue-text">With our budget tool, you can keep track of your subcriptions and how much your spending per month.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            {/* </div> */}

                            <Parallax imageSrc="./images/streaming1.jpg"/>



                            <Footer className="light-blue darken-2" copyrights="Made by FrontRow"
                                

                                links={
                                    <div className="row">
                                        
                                        
                                   

                                        <div className="right">
                                            <h5 className="right white-text">Developers</h5>
                                           
                                        <ul>
                                            <li> <a className="white-text text-lighten-4" href="#!"><i className="material-icons tiny">email</i>John Caldwell</a></li>
                                            <li> <a className="white-text text-lighten-4" href="#!"><i className="material-icons tiny">email</i>Carson Curry</a></li>
                                            <li> <a className="white-text text-lighten-4" href="#!"><i className="material-icons tiny">email</i>Melissa Murphey</a></li>

                                        </ul>
                                        </div>
                                     </div>

                                }

                               
                            
                                // className='example'
                            >
                                <h5 className="white-text">About Us</h5>
                                <p className="grey-text text-lighten-4">We are a team of 3 from KU coding bootcamp. This is our final project. We hope DreamStream can become reality!</p>
                            </Footer>;
        
        
                    
                    
               
           

            </div>                 


                )
            }
        }
        
        export default Home;

