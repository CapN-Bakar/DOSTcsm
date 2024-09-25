import React from "react";
import Header from "../header";
import CCstyle from "../../styles/cc.module.css"

function Cc1() {
  return (
    <>
      <Header />
      <div className={CCstyle.question} id={CCstyle.box}>
          <h1>CC1. Which of the following best describes your awareness of a Citizen's Charter(CC)?</h1>
          <div className={CCstyle.options}>
            <label>
              <input type="radio" name="cc1" value="1" /> 1. I know what a CC is, and I saw this office's CC.
            </label><br />
            <label>
              <input type="radio" name="cc1" value="2" /> 2. I know what a CC is, and I did not see this Office's CC.
            </label><br />
            <label>
              <input type="radio" name="cc1" value="3" /> 3. I learned of the CC only when I saw this Office's CC.
            </label><br />
            <label>
              <input type="radio" name="cc1" value="4" /> 4. I do not know what a CC is and I did not see one of this Office. (answer 'N/A' on CC2 and CC3.)
            </label><br />
          </div>
          <a href="/cc2" className={CCstyle.buttons} onClick={(e) => {
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

export default Cc1;
