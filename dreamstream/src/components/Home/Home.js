import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    login() {
        this.props.auth.login();
    }
    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div className="container home">
                <div className="row">
                    <h4 className="center light-blue-text">Welcome to DreamStream</h4>
                </div>
                <div className="row">
                <p className="center white-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis alias tempora quos enim ipsa officiis odio doloremque suscipit qui ad eos aut, officia deserunt, veritatis laudantium? Vel rerum dolores impedit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum veritatis exercitationem, accusantium, tenetur soluta quae architecto repudiandae vero tempora deleniti, eius deserunt magnam possimus? Exercitationem maiores beatae excepturi placeat!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio aut dignissimos impedit nesciunt animi deserunt a ab eaque similique nisi quisquam officiis, officia distinctio deleniti, fuga consectetur facere quae?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti consequatur, omnis voluptate nam sunt ullam voluptas obcaecati veritatis sit unde vel saepe architecto ad dolorum minima id sed a quis.
                </p>
                </div>
                <div className="row">
                <p className="center white-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis alias tempora quos enim ipsa officiis odio doloremque suscipit qui ad eos aut, officia deserunt, veritatis laudantium? Vel rerum dolores impedit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum veritatis exercitationem, accusantium, tenetur soluta quae architecto repudiandae vero tempora deleniti, eius deserunt magnam possimus? Exercitationem maiores beatae excepturi placeat!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio aut dignissimos impedit nesciunt animi deserunt a ab eaque similique nisi quisquam officiis, officia distinctio deleniti, fuga consectetur facere quae?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti consequatur, omnis voluptate nam sunt ullam voluptas obcaecati veritatis sit unde vel saepe architecto ad dolorum minima id sed a quis.
                </p>
                </div>

                <div className="row center">
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
                </div>
            </div>
        )
    }
}

export default Home;
