import React, { useState } from "react";
import DataLoader from './DataLoader'

export default function Button () {
  const [buttonText, setButtonText] = useState("Click me now!");

  function handleClick() {
    return setButtonText("Thanks, about time!");
  }

  return (
  <div>
  <button onClick={handleClick}>{buttonText}</button>
  <DataLoader/>
  </div>
  )
}
