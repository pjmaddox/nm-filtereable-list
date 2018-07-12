import React, { Component } from 'react';
import loaderGif from './../images/RippleLoader.gif';

class CustomThrobber extends Component {
    render() {
        return (
            <div className="customThrobberContainer">
                <div>
                    <img src={loaderGif} style={{width: "200px", height: "200px"}}/>
                </div>
                <div>
                    Retreiving known field agent data...
                </div>
            </div>
        );
    }
}

export default CustomThrobber;