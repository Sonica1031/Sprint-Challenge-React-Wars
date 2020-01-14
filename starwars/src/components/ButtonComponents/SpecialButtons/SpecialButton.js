import React from "react";
import Specials from "./Specials";

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>
        {props.prop}
      </button>
    </>
  );
};

export default SpecialButton;