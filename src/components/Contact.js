import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="container home">
                <div className="row">
                    <h4 className="light-blue-text">F.A.Q.</h4>
                </div>
                <div className="row">
                    <p className="white-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia voluptatum aspernatur eaque. Ipsam culpa ad error soluta magnam nam molestiae pariatur, cum ullam quas ea libero illum totam voluptates!
                    </p>
                </div>
                <div className="row">
                    <h4 className="light-blue-text">Contact Us</h4>
                </div>
                <div className="row">
                    <form className="white-text">
                        <div className="row">
                            <div className="input-field">
                                <input placeholder="First Name" id="first_name" type="text" className="validate white-text"/>
                            </div>
                            <div className="input-field">
                                <input placeholder="Last Name" id="last_name" type="text" className="validate white-text"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field">
                                <input placeholder="Email" id="email" type="text" className="validate white-text"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field">
                                {/* Look into initializing data-counter with Materialize */}
                                <textarea placeholder="How Can We Help?" id="user_inquiry" cols="30" rows="10" className="materialize-textarea white-text" data-length="120"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn btn-primary light-blue">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;
