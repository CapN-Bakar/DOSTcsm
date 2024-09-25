import React from 'react';
import suggestionstyle from "../..//styles/suggestion.module.css"
import Header from "../header";


function Suggestion() {
  return (
    <>
    <Header />
    <div className={suggestionstyle.container}>
    <h2>Suggestion on how we can further improve our services (optional):</h2>
    <div>
      <input type="text" id={suggestionstyle.myTextBox} placeholder="Enter your text here" />
    </div>
    <div>
      <a href="/thanks">
        <button className={suggestionstyle.nxt} id={suggestionstyle.nxt} type="submit">
          Next
        </button>
      </a>
    </div>
  </div></>
       
  );
}

export default Suggestion;