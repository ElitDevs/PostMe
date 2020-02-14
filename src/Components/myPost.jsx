import React, { Component } from "react";
import { placeholder } from "@babel/types";

class MyPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };

        this.style = this.style.bind(this);
        this.styleOut = this.styleOut.bind(this);
    }
    style() {
        this.setState({
            color: "white",
            borderRadius: "5px",
            backgroundColor: "pink",
            padding: "30px",
            fontFamily: "Arial"
        });
    }

    styleOut() {
        this.setState({
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        });
    }
    render() {
        return (
            <div style={this.state} onMouseOver={this.style} onMouseOut={this.styleOut}>
                <input placeholder="Write here ..." />
                
            </div>
        );
    }
}

export default MyPost;
