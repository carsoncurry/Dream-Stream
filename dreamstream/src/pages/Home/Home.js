import React, { Component } from 'react';
import { Parallax, Row, Footer } from 'react-materialize';
import { Animated } from 'react-animated-css';
import './Home.css';


class Home extends Component {
    render() {
        return (
            <div id="parent">
                <div className="section no-pad-bot">
                    <Animated className="logo" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                        <div className="container center ">
                        <h4 className="header center white-text text-lighten-2">welcome to</h4>
                        <img className="center" src="./images/dreamstreamglow.png" alt="dslogo" />
                        <Row className="center">
                            <h5 className="header col s12 white-text">your personal streaming content platform</h5>
                        </Row>
                        </div>
                    </Animated>
                </div>

                <Parallax imageSrc="./images/TV-Streaming.png"/> 

                <div className="grey darken-4">

                    {/* Icon Section */}
                    <div className="row center grey darken-4">
                        <div className="col s12 m4 grey darken-4">
                            <div className="icon-block">
                                <h2 className="center white-text"><i className="material-icons medium">search</i></h2>
                                <h5 className="center white-text">Simplify Searching</h5>

                                <p className="center light-blue-text">Finding a streaming service that has your favorite show or movie has never been easier. </p>
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

                                <p className="center light-blue-text">With our budget tool, you can keep track of your subcriptions and how much you are spending per month.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Parallax id="parallax-img" imageSrc="./images/streaming1.jpg"/>

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
                >
                    <h5 className="white-text">About Us</h5>
                    <p className="grey-text text-lighten-4">We are a team of 3 from KU coding bootcamp. This is our final project. We hope DreamStream can become reality!</p>
                </Footer>
            </div>
        )
    }
}
        
export default Home;
