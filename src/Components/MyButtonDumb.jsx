import React from "react";

function MyButtonDumb(props) {
  return (
    <button onClick={props.handleClick}>
      {props.title} clicked {props.count} times
    </button>
  );
}

export default MyButtonDumb;
