import { useState } from 'react';

const useForgetpass = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  const capitalizeFirstLetter = (e) => {
    const inputValue = e.target.value;
    const capitalizedValue = inputValue.replace(/\b\w/g, (match) =>
      match.toUpperCase()
    );
    if (e.target.id === 'firstname') {
      setFirstName(capitalizedValue);
    } else if (e.target.id === 'middlename') {
      setMiddleName(capitalizedValue);
    } else if (e.target.id === 'lastname') {
      setLastName(capitalizedValue);
    }
  };
  //destructuring JSX
  return {
    firstName,
    middleName,
    lastName,
    capitalizeFirstLetter,
  };
};

export default useForgetpass;