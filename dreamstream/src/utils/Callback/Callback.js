import React, { Component } from 'react';
import { Row, Preloader } from 'react-materialize';

class Callback extends Component {
    render() {
        const style = {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
        }
        
        return (
            <Row style={style}>
                <Preloader size='big'/>
            </Row>
        );
    }
}

export default Callback;
