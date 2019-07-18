import React from "react";

const Text = props => {
  return (
    <div className={props.className} style={{ color: props.color }}>
      {props.text}
    </div>
  );
};

export default Text;
