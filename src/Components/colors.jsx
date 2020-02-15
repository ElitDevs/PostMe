import React, { Component } from "react";
import { placeholder } from "@babel/types";
import { NONAME } from "dns";

class BgColors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            marginTop:"1%",
            backgroundColor: "DodgerBlue",
            border: "0px",
            borderRadius: "100px",
            textAlign:"center",
            justifyContent: "center",
            width:"40px",
            height: "40px"
        };
        this.style = this.style.bind(this);
        
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

    render() {
        return (
            <>
            <button id="c1" style={this.state} onClick={this.style}>
                
            </button>
            <button id="c2" style={this.state} onClick={this.style}>
            </button>
            <button id="c3" style={this.state} onClick={this.style}>
            </button>
            <button id="c4" style={this.state} onClick={this.style}>
            </button>
            </>
        );
    }
}

export default BgColors;
