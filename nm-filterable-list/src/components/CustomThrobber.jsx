import React, { Component } from 'react';
import loaderGif from './../images/RippleLoader.gif';

class CustomThrobber extends Component {
    render() {
        return (
            <div className="customThrobberContainer row">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-12">
                            <img src={loaderGif} alt="Sonar-Loading-Gif" style={{width: "200px", height: "200px"}}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 loadingMessage">
                            Retreiving known field agent data...
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomThrobber;