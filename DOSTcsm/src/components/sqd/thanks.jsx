import React from 'react';
import Thanksstyle from "../..//styles/thanks.module.css"
import Header from "../header";

function Thanks() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Header />
      <div className={Thanksstyle.container}>
        <p className={Thanksstyle.typ}>Your answers have been submitted! Thank you</p>
        <div className={Thanksstyle.tybuttons}>
          <button className={Thanksstyle.prnt} id={Thanksstyle.prnt} type="button" onClick={handlePrint}>Print result</button>
          <a href="/">
            <button className={Thanksstyle.out} id={Thanksstyle.out} type="submit">Log out</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Thanks;