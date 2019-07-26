import React from "react";
import Text from "../UI/Text";

const DropDown = props => {
  const { label, values, id, action } = props;
  console.log("props", props.action);
  return (
    <>
      <Text text={label} />
      <select onChange={(e) => action({ value: e.target.value, id })}>
        {values.map((each, i) => {
          return <option key={i}>{each}</option>;
        })}
      </select>
    </>
  );
};

export default DropDown;
