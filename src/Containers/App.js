import React, { Component } from "react";
import "./App.css";
import PostItemControl from "../Components/PostItemControl";
class App extends Component {
  handleclick = id => {
    console.log("you clicked on :", id);
    let element = document.getElementById("postItem");

    switch (id) {
      case "id1":
        element.style.background = "cornflowerblue";
        element.style.color = "white";
        break;
      case "id2":
        element.style.background = "darkblue";
        element.style.color = "white";
        break;
      case "id3":
        element.style.background = "crimson";
        element.style.color = "white";
        break;
      default:
        break;
    }
  };

  render() {
    const Colors = [
      "cornflowerblue",
      "darkblue",
      "crimson",
      "darkgreen",
      "darkcyan",
      "black",
      "teal",
      "tan",
      "chocolate",
      "yellowgreen",
      "blueviolet",
      "snow"
    ];
    return (
      <div className="App">
        <div>
          <h1 style={{ textAlign: "center", color: "crimson" }}>
            Welcome to Post Me
          </h1>
        </div>
        <textarea
          className="postItem"
          id="postItem"
          defaultValue=""
          placeholder="write something ..."
        ></textarea>
        <div className="controlButtons">
          {Colors.map(color => {
            return <PostItemControl background={color} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
