import React from 'react';
import Header from "./header";
import fpstyles from "../styles/forgetpass.module.css";
import { Link } from "react-router-dom";
import useForgetpass from './useForgetpass';
//object destructed literals
function Forgetpass() {
  const { firstName, middleName, lastName, capitalizeFirstLetter } = useForgetpass();

  return (
    <>
      <Header />
      <div className={fpstyles.fpcontainerBox}>
        <h1 className={fpstyles.fph1}>Search by name</h1>

        <form className={fpstyles.fpform}>
          <div>
            <input
              type="text"
              id="firstname"
              placeholder="First name"
              value={firstName}
              onChange={capitalizeFirstLetter}
              required
              className={fpstyles.fpInput}
            />
            <input
              type="text"
              id="middlename"
              placeholder="Middle Initial"
              value={middleName}
              onChange={capitalizeFirstLetter}
              maxlength="1"
              required
              className={fpstyles.fpInput}
            />
            <input
              type="text"
              id="lastname"
              placeholder="Last name"
              value={lastName}
              onChange={capitalizeFirstLetter}
              required
              className={fpstyles.fpInput}
            />

            <Link to="/dost" className={fpstyles.fpBtnInput}>
              <button type="Submit" className={fpstyles.fpBtnInput}>
                Recover
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Forgetpass;


{/*import React, { useState } from "react";
import Header from "./header";
import fpstyles from "../styles/forgetpass.module.css";
import { Link } from "react-router-dom";

function Forgetpass() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  const capitalizeFirstLetter = (e) => {
    const inputValue = e.target.value;
    const capitalizedValue = inputValue.replace(/\b\w/g, (match) =>
      match.toUpperCase()
    );
    if (e.target.id === "firstname") {
      setFirstName(capitalizedValue);
    } else if (e.target.id === "middlename") {
      setMiddleName(capitalizedValue);
    } else if (e.target.id === "lastname") {
      setLastName(capitalizedValue);
    }
  };

  return (
    <>
      <Header />
      <div className={fpstyles.fpcontainerBox}>
        <h1 className={fpstyles.fph1}>Search by name</h1>

        <form className={fpstyles.fpform}>
          <div>
            <input
              type="text"
              id="firstname"
              placeholder="First name"
              value={firstName}
              onChange={capitalizeFirstLetter}
              required
              className={fpstyles.fpInput}
            />
            <input
              type="text"
              id="middlename"
              placeholder="Middle Initial"
              value={middleName}
              onChange={capitalizeFirstLetter}
              maxlength="1"
              required
              className={fpstyles.fpInput}
            />
            <input
              type="text"
              id="lastname"
              placeholder="Last name"
              value={lastName}
              onChange={capitalizeFirstLetter}
              required
              className={fpstyles.fpInput}
            />

            <Link to="/dost" className={fpstyles.fpBtnInput}>
              <button type="Submit" className={fpstyles.fpBtnInput}>
                Recover
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Forgetpass; */}
