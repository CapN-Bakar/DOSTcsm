import React, { useState } from "react";
import Header from "./header";
import registerstyles from "../styles/register.module.css";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [brgy, setBrgy] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [province, setProvince] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [municipalities, setMunicipalities] = useState([]);

  const provinces = [
    { value: "SultanKudarat", label: "Sultan Kudarat" },
    { value: "SouthCotabato", label: "South Cotabato" },
    { value: "NorthCotabato", label: "North Cotabato" },
    { value: "Sarangani", label: "Sarangani" },
  ];

  const municipalitiesData = {
    SultanKudarat: [
      { value: "Bagumbayan", label: "Bagumbayan" },
      { value: "Columbio", label: "Columbio" },
      { value: "Esperanza", label: "Esperanza" },
      { value: "Kalamansig", label: "Kalamansig" },
      { value: "Lebak", label: "Lebak" },
      { value: "Lutayan", label: "Lutayan" }, 
      { value: "Palimbang", label: "Palimbang" },
      { value: "President Quirino", label: "President Quirino" },
      { value: "Isulan", label: "Isulan" },
      { value: "Sultan Kudarat", label: "Sultan Kudarat" },
      { value: "Tacurong", label: "Tacurong" },
    ],
    NorthCotabato: [
      { value: "Aleosan", label: "Aleosan" },
      { value: "Antipas", label: "Antipas" },
      { value: "Arakan", label: "Arakan" },
      { value: "Carmen", label: "Carmen" },
      { value: "Kabacan", label: "Kabacan" },
      { value: "Kabayuan", label: "Kabayuan" },
      { value: "Kidapawan", label: "Kidapawan" },
      { value: "Libungan", label: "Libungan" },
      { value: "Magpet", label: "Magpet" },
      { value: "M'lang", label: "M'lang" },
      { value: "Midsayap", label: "Midsayap" },
      { value: "Pikit", label: "Pikit" },
      { value: "Pres. Roxas", label: "Pres. Roxas" },
      { value: "Tulunan", label: "Tulunan" },
      { value: "Banisilan", label: "Banisilan" },
      { value: "Makilala", label: "Makilala" },
      { value: "Cotabato City", label: "Cotabato City" },
    ],
    SouthCotabato: [
      { value: "Banga", label: "Banga" },
      { value: "Barbar", label: "Barbar" },
      { value: "Glan", label: "Glan" },
      { value: "Lake Sebu", label: "Lake Sebu" },
      { value: "Norala", label: "Norala" },
      { value: "Polomolok", label: "Polomolok" },
      { value: "Santo Niño", label: "Santo Niño" },
      { value: "Surallah", label: "Surallah" },
      { value: "T'boli", label: "T'boli" },
      { value: "Tupi", label: "Tupi" },
    ],
    Sarangani: [
      { value: "Alabel", label: "Alabel" },
      { value: "Glan", label: "Glan" },
      { value: "Kiamba", label: "Kiamba" },
      { value: "Maasim", label: "Maasim" },
      { value: "Maitum", label: "Maitum" },
      { value: "Malapatan", label: "Malapatan" },
      { value: "Malungon", label: "Malungon" },
    ],
  };

  const handleProvinceChange = (event) => {
    const selectedProvince = event.target.value;
    setProvince(selectedProvince);

    if (municipalitiesData[selectedProvince]) {
      setMunicipalities(municipalitiesData[selectedProvince]);
    } else {
      setMunicipalities([]); // or some default value
    }
  };

  const handleMunicipalityChange = (event) => {
    setMunicipality(event.target.value);
  };

  const handleMiddleNameChange = (e) => {
    const inputValue = e.target.value;
    setMiddleName(inputValue.toUpperCase());
  };
  const handleFirstNameChange = (e) => {
    const inputValue = e.target.value;
    setFirstName(
      inputValue
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  };
  const handleLastNameChange = (e) => {
    const inputValue = e.target.value;
    setLastName(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
  };

  const handleBrgyChange = (e) => {
    const inputValue = e.target.value;
    setBrgy(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    window.location.href = "/dost";
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleShowPasswordChange = (e) => {
    setShowPassword(e.target.checked);
  };

  return (
    <>
      <Header />
      <div>
        <div className={registerstyles.registrationForm}>
          <h1 className={registerstyles.registerh1}>Register</h1>
          <form onSubmit={handleSubmit}>
            <div className={registerstyles.formContainer}>
              <div className={registerstyles.leftColumn}>
                <label htmlfor="firstName">First name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={firstName}
                  onChange={handleFirstNameChange}
                  className={registerstyles.inputs}
                />
                <label htmlfor="lastName">Last name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={lastName}
                  onChange={handleLastNameChange}
                  className={registerstyles.inputs} QQQQQ11111111111111                                                                                                                                                                                                                                                       
                />
                <label htmlfor="middleName">Middle initial:</label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  maxlength="1"
                  required
                  value={middleName}
                  onChange={handleMiddleNameChange}
                  className={registerstyles.inputs}
                />
                <label htmlfor="age">Age:</label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  maxLength={3}
                  required
                  className={registerstyles.inputs}
                  onInput={(event) => {
                    const inputValue = event.target.value;
                    event.target.value = inputValue.replace(/[^0-9]/g, "");
                  }}
                />
                <label htmlfor="birthdate">Birthdate:</label>
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  required
                  className={registerstyles.inputs}
                />
                <label htmlfor="number">Phone number:</label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  required
                  maxLength={11}
                  className={registerstyles.inputs}
                  onInput={(event) => {
                    const inputValue = event.target.value;
                    event.target.value = inputValue.replace(/[^0-9]/g, "");
                  }}
                />
                <label htmlfor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={registerstyles.inputs}
                  onInvalid={(event) => {
                    const email = event.target.value;
                    const emailRegex =
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (!emailRegex.test(email)) {
                      event.target.setCustomValidity(
                        "Please enter a valid email address"
                      );
                    } else {
                      event.target.setCustomValidity("");
                    }
                  }}
                />
                <div className={registerstyles.radioButtons}>
                  <label htmlfor="gender">Gender:</label>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    required
                  />
                  <label htmlfor="male">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    required
                  />
                  <label htmlfor="female">Female</label>
                </div>
              </div>

              <div className={registerstyles.rightColumn}>
                <div className={registerstyles.droplist}>
                  <label htmlFor="province">Province:</label>
                  <select
                    value={province}
                    onChange={handleProvinceChange}
                    className={registerstyles.provincemunicipalitieslist}
                    name="province"
                    required
                  >
                    <option value="" disabled>
                      Select Province
                    </option>
                    {provinces.map((province) => (
                      <option key={province.value} value={province.value}>
                        {province.label}
                      </option>
                    ))}
                  </select>

                  <label htmlFor="municipalities">Municipalities:</label>
                  <select
                    value={municipality}
                    onChange={handleMunicipalityChange}
                    className={registerstyles.provincemunicipalitieslist}
                    name="municipalities"
                    required
                  >
                    <option value="" disabled>
                      Select Municipality
                    </option>
                    {municipalities &&
                      municipalities.map((municipality) => (
                        <option
                          key={municipality.value}
                          value={municipality.value}
                        >
                          {municipality.label}
                        </option>
                      ))}
                  </select>

                  <label htmlfor="brgy">Brgy/Subd:</label>
                  <input
                    type="text"
                    id="brgy"
                    name="brgy"
                    required
                    value={brgy}
                    onChange={handleBrgyChange}
                    className={registerstyles.inputs}
                  />
                </div>
                <label htmlfor="username">Create username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className={registerstyles.inputs}
                />

                <label htmlfor="password">Password:</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  className={registerstyles.inputs}
                  value={password}
                  onChange={handlePasswordChange}
                />

                <label htmlfor="confirmPassword">Confirm password:</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  className={registerstyles.inputs}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <div className={registerstyles.showpass}>
                  <input
                    type="checkbox"
                    id="showpass"
                    checked={showPassword}
                    onChange={handleShowPasswordChange}
                  />
                  <label htmlfor="showpass">Show Password</label>
                </div>
              </div>
            </div>
            <button className={registerstyles.registerbtn} type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
