import React, { useState } from 'react';
import Header from "../header";
import sqdstyle from "../../styles/sqd.module.css";
import sa from "../../assets/SA.png";
import a from "../../assets/A.png";
import n from "../../assets/N.png";
import d from "../../assets/D.png";
import sd from "../../assets/SD.png";
import na from "../../assets/630661.png";

function Sqd4() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextClick = (event) => {
    if (!selectedOption) {
      setErrorMessage('Please select an option');
      event.preventDefault();
    }
  };

  return (
    <>
      <Header />
      <div className={sqdstyle.container} id={sqdstyle.box}>
        <div className={sqdstyle.question}>
          <h1>SQD4. I easily found information about my transaction from the office or its website.</h1>
        </div>
        <div className={sqdstyle.options}>
          <div className={sqdstyle.option}>
            <label htmlFor="strongly-agree" aria-label="Strongly Agree">
              <img src={sa} alt="Strongly Agree" />
              <div>
                <p>Strongly Agree</p>
              </div>
            </label>
            <input type="radio" id="strongly-agree" name="satisfaction" value="strongly-agree" required onChange={handleOptionChange} />
          </div>
          <div className={sqdstyle.option}>
            <label htmlFor="agree" aria-label="Agree">
              <img src={a} alt="Agree" />
              <div>
                <p>Agree</p>
              </div>
            </label>
            <input type="radio" id="agree" name="satisfaction" value="agree" required onChange={handleOptionChange} />
          </div>
          <div className={sqdstyle.option}>
            <label htmlFor="neutral" aria-label="Neutral">
              <img src={n} alt="Neutral" />
              <div>
                <p>Neutral</p>
              </div>
            </label>
            <input type="radio" id="neutral" name="satisfaction" value="neutral" required onChange={handleOptionChange} />
          </div>
          <div className={sqdstyle.option}>
            <label htmlFor="disagree" aria-label="Disagree">
              <img src={d} alt="Disagree" />
              <div>
                <p>Disagree</p>
              </div>
            </label>
            <input type="radio" id="disagree" name="satisfaction" value="disagree" required onChange={handleOptionChange} />
          </div>
          <div className={sqdstyle.option}>
            <label htmlFor="strongly-disagree" aria-label="Strongly Disagree">
              <img src={sd} alt="Strongly Disagree" />
              <div>
                <p>Strongly Disagree</p>
              </div>
            </label>
            <input type="radio" id="strongly-disagree" name="satisfaction" value="strongly-disagree" required onChange={handleOptionChange} />
          </div>
          <div className={sqdstyle.option}>
            <label htmlFor="na" aria-label="N/A">
              <img src={na} alt="N/A" />
              <div>
                <p>N/A</p>
              </div>
            </label>
            <input type="radio" id="na" name="satisfaction" value="na" required onChange={handleOptionChange} />
          </div>
          {errorMessage && <p className={sqdstyle.errorMessage}>{errorMessage}</p>}
        </div>
        <div className={sqdstyle.navigation}>
          <a href="/sqd3" className={sqdstyle.buttons}>
            Back
          </a>
          <a href="/sqd5" className={sqdstyle.buttons} onClick={(event) => {
  const radioButton = document.querySelector('input[name="satisfaction"]:checked');
  if (!radioButton) {
    alert("Please select an option");
    event.preventDefault();
  }
}}>
  Next
</a>
        </div>
      </div>
    </>
  );
}

export default Sqd4;