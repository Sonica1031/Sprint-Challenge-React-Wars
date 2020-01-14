import React, {useState} from "react";
import {Numbers} from "./Numbers";
const NumberButton = props => {
      {/* Display a button element rendering the data being passed down from the parent container on props */
      }
          return(
          <button className = "buttons">
          {props.prop}
          </button>
          )
}

export default NumberButton;