import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header';
import doststyle from "../../styles/dost.module.css"

function Dost() {
  const [selectedType, setSelectedType] = useState('');
  const [showBusiness, setShowBusiness] = useState(false);
  const [showGovernment, setShowGovernment] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [showOthersInput, setShowOthersInput] = useState(false);
  const navigate = useNavigate();

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    if (e.target.value === '2') {
      setShowBusiness(true);
      setShowGovernment(false);
    } else if (e.target.value === '3') {
      setShowBusiness(false);
      setShowGovernment(true);
    } else {
      setShowBusiness(false);
      setShowGovernment(false);
    }
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
    if (e.target.value === 'Others') {
      setShowOthersInput(true);
    } else {
      setShowOthersInput(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedType === '') {
      alert('Please select an option');
    } else {
      navigate("/cc1"); // Navigate to next page
    }
  };

  return (
    <>
      <Header />
      <div className={doststyle.container}>
        <h2>Select Customer type</h2>
        <select id={doststyle.type} value={selectedType} onChange={handleTypeChange} required>
          <option value="">Select an option</option>
          <option value="1">Citizen</option>
          <option value="2">Business</option>
          <option value="3">Government</option>
        </select>

        {showBusiness && (
          <select id={doststyle.business} required>
            <option value="">Select option</option>
            <option value="Agri">Agriculture</option>
            <option value="Food">Food/Beverage</option>
            <option value="Pharma">Pharmaceutical</option>
            <option value="Cons">Construction</option>
            <option value="Metal">Metals & Engineering</option>
            <option value="Chemicals">Chemicals/Petrochemicals</option>
            <option value="Mining">Mining</option>
            <option value="Plastics">Plastics/Rubber Manufacturing</option>
            <option value="Transport">Transport (Shipping, Aviation)</option>
          </select>
        )}

        {showGovernment && (
          <select id={doststyle.government} required>
            <option value="">Select option</option>
            <option value="Agri">NGA</option>
            <option value="Food">LGU</option>
            <option value="Pharma">GOCC</option>
            <option value="Cons">Academe</option>
          </select>
        )}

        <div>
          <h2>Services Availed</h2>
          <select className={doststyle.service} value={selectedService} onChange={handleServiceChange} required>
            <option value="">Select option</option>
            <option value="meet">Meeting</option>
            <option value="train">Training/Forum/Seminar</option>
            <option value="pack">Packaging and Labeling</option>
            <option value="cons">Consultancy</option>
            <option value="Others">Others</option>
          </select>
          {showOthersInput && (
            <input type="text" placeholder="Please specify" required className={doststyle.others} />
          )}
        </div>

        <div className={doststyle.title}>
          <h2>Indicate title</h2>
          <input type="text" placeholder="Input text here" required />
        </div>

        <div className={doststyle.date}>
          <h2>Date</h2>
          <input className={doststyle.dostdate} type="date" name="date" required />
        </div>

        <button className={doststyle.dostnxt} id={doststyle.nxt} type="submit" onClick={handleSubmit}>
          Next
        </button>
      </div>  
    </>
  );
}

export default Dost;