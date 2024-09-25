import React from "react";
import Header from "../header";
import CCstyle from "../../styles/cc.module.css"

function Cc2() {
  return (
    <>
      <Header />
      <div className={CCstyle.question} id={CCstyle.box}>
          <h1>CC2. If aware of a CC (answered 1-3 in CC1), would you say that a CC of this office was..?</h1>
          <div className={CCstyle.options}>
            <label>
              <input type="radio" name="cc1" value="1" /> 1. Easy to see.
            </label><br />
            <label>
              <input type="radio" name="cc1" value="2" /> 2. Somewhat easy to see.
            </label><br />
            <label>
              <input type="radio" name="cc1" value="3" /> 3. Difficult to see.
            </label><br />
            <label>
              <input type="radio" name="cc1" value="4" /> 4. Not visible at all.
            </label><br />
            <label>
              <input type="radio" name="cc1" value="5" /> 5.N/A
            </label><br />
            
          </div>
          <a href="/cc3" className={CCstyle.buttons} onClick={(e) => {
            let radioButtonChecked = false;

            const radioButtons = document.querySelectorAll('input[type="radio"][name="cc1"]');

            radioButtons.forEach((radioButton) => {
              if (radioButton.checked) {
                radioButtonChecked = true;
              }
            });

            if (!radioButtonChecked) {
              e.preventDefault();
              alert('Please select an option');
            }
          }}>Next</a>
        </div>
    </>
  );
}

export default Cc2;
