import React, { Component } from "react";
import { placeholder } from "@babel/types";
import { NONAME } from "dns";
import Colors from "../Components/colors";

class MyPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            marginTop:"5%",
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "50px",
            fontFamily: "Arial",
            fontSize:"20px",
            border: "0px",
            width: "40%",
            height:"10%",
            borderRadius: "10px"
        };
        this.divStyle = { textAlign:"center"}
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
            <div  style={this.divStyle}>
                <input style={this.state} placeholder="Write here ..." />
            </div>
        );
    }
}

export default MyPost;
