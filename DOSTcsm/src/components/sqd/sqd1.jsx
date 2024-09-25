import React, { useState, useEffect } from "react";
import Header from "../header";
import sqdstyle from "../../styles/sqd.module.css";
import sa from "../../assets/SA.png";
import a from "../../assets/A.png";
import n from "../../assets/N.png";
import d from "../../assets/D.png";
import sd from "../../assets/SD.png";
import na from "../../assets/630661.png";

function Sqd1() {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const handleNextButtonClick = (event) => {
      if (!selectedOption) {
        alert('Please select an option');
        event.preventDefault();
      }
    };

    const nextButton = document.querySelector(`.${sqdstyle.buttons}:last-child`);
    nextButton.addEventListener('click', handleNextButtonClick);

    return () => {
      nextButton.removeEventListener('click', handleNextButtonClick);
    };
  }, [selectedOption]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Header />
      <div className={sqdstyle.container} id={sqdstyle.box}>
        <div className={sqdstyle.question}>
          <h1>SQD1. I spent a reasonable amount of time for my transaction.</h1>
        </div>
        <div className={sqdstyle.options}>
          <div className={sqdstyle.option}>
            <label htmlFor="strongly-agree">
              <img src={sa} alt="Strongly Agree" />
              <div>
                <p>Strongly Agree</p>
              </div>
            </label>
            <input
              type="radio"
              id="strongly-agree"
              name="satisfaction"
              value="strongly-agree"
              required
              onChange={handleOptionChange}
            />
          </div>
          <div className={sqdstyle.option}>
            <label htmlFor="agree">
              <img src={a} alt="Agree" />
              <div>
                <p>Agree</p>
              </div>
            </label>
            <input
              type="radio"
              id="agree"
              name="satisfaction"
              value="agree"
              required
              onChange={handleOptionChange}
            />
          </div>
          <div className={sqdstyle.option}>
            <label htmlFor="neutral">
              <img src={n} alt="Neutral" />
              <div>
                <p>Neutral</p>
              </div>
            </label>
            <input
              type="radio"
              id="neutral"
              name="satisfaction"
              value="neutral"
              required
              onChange={handleOptionChange}
            />
          </div>
          <div className={sqdstyle.option}>
            <label htmlFor="disagree">
              <img src={d} alt="Disagree" />
              <div>
                <p>Disagree</p>
              </div>
            </label>
            <input
              type="radio"
              id="disagree"
              name="satisfaction"
              value="disagree"
              required
              onChange={handleOptionChange}
            />
          </div>
          <div className={sqdstyle.option}>
            <label htmlFor="strongly-disagree">
              <img src={sd} alt="Strongly Disagree" />
              <div>
                <p>Strongly Disagree</p>
              </div>
            </label>
            <input
              type="radio"
              id="strongly-disagree"
              name="satisfaction"
              value="strongly-disagree"
              required
              onChange={handleOptionChange}
            />
          </div>
          <div className={sqdstyle.option}>
            <label htmlFor="na">
              <img src={na} alt="N/A" />
              <div>
                <p>N/A</p>
              </div>
            </label>
            <input
              type="radio"
              id="na"
              name="satisfaction"
              value="na"
              required
              onChange={handleOptionChange}
            />
          </div>
        </div>
        <div className={sqdstyle.navigation}>
          <a href="/sqd2" className={sqdstyle.buttons}>
            Next
          </a>
        </div>
      </div>
    </>
  );
}

export default Sqd1;