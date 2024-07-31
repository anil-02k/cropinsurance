import React, { useState, useEffect } from 'react';
import './CSS/Farmer.css'
// Sample data
const seasonCrops = {
  rabi: ['Wheat', 'Barley', 'Peas', 'Mustard', 'Chickpeas', 'Oats', 'Linseed', 'Lentils'],
  kharif: ['Rice', 'Maize', 'Sorghum', 'Soybean', 'Cotton', 'Groundnut', 'Jowar', 'Pulses'],
  seasonal: ['Sugarcane', 'Cotton', 'Groundnut', 'Sunflower', 'Potato', 'Onion', 'Garlic', 'Tomato', 'Brinjal', 'Pumpkin']
};

const stateDistricts = {
  andhraPradesh: ['Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Krishna', 'Kurnool', 'Nellore', 'Srikakulam', 'Visakhapatnam', 'West Godavari', 'Y.S.R.'],
  // Add other states and their districts here
};

const InsuranceForm = () => {
  const [states, setStates] = useState(Object.keys(stateDistricts));
  const [districts, setDistricts] = useState([]);
  const [crops, setCrops] = useState([]);
  
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [season, setSeason] = useState('');
  const [crop, setCrop] = useState('');
  const [area, setArea] = useState('');
  const [result, setResult] = useState('');
  const [docType, setDocType] = useState('');
  const [docNumber, setDocNumber] = useState('');

  useEffect(() => {
    if (state) {
      setDistricts(stateDistricts[state]);
    } else {
      setDistricts([]);
    }
  }, [state]);

  useEffect(() => {
    if (season) {
      setCrops(seasonCrops[season]);
    } else {
      setCrops([]);
    }
  }, [season]);

  const handleCalculate = () => {
    if (state && district && season && crop && area) {
      const calculatedResult = area * 26;
      setResult(`₹${calculatedResult}`);
    } else {
      setResult('Please fill out all fields correctly.');
    }
  };

  return (
    <div className="form-container">
      <h1>Apply For Insurance</h1>
      <form id="locationForm">
        <div className="form-group">
          <label htmlFor="name">Enter Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" placeholder="+91 XXXXXXXXXX" required />
        </div>
        <div className="form-group">
          <label htmlFor="mail">Enter Mail:</label>
          <input type="email" id="mail" name="mail" placeholder="you@example.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select id="state" name="state" value={state} onChange={(e) => setState(e.target.value)} required>
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state.replace(/([A-Z])/g, ' $1').trim()}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="district">District:</label>
          <select id="district" name="district" value={district} onChange={(e) => setDistrict(e.target.value)} required>
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district} value={district.toLowerCase().replace(/\s+/g, '-')}>
                {district}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="season">Season:</label>
          <select id="season" name="season" value={season} onChange={(e) => setSeason(e.target.value)}>
            <option value="">Select Season</option>
            {Object.keys(seasonCrops).map((season) => (
              <option key={season} value={season}>
                {season.charAt(0).toUpperCase() + season.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="crops">Crops Grown:</label>
          <select id="crops" name="crops" value={crop} onChange={(e) => setCrop(e.target.value)} required>
            <option value="">Select Crop</option>
            {crops.map((crop) => (
              <option key={crop} value={crop.toLowerCase().replace(/\s+/g, '-')}>
                {crop}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="area">Area (in hectare):</label>
          <input type="number" id="area" name="area" step="0.01" value={area} onChange={(e) => setArea(e.target.value)} required />
        </div>
        <button type="button" id="calculateButton" onClick={handleCalculate}>Calculate</button>
        <h3>You Have to pay:</h3>
        <div className="calculate" id="calculateResult">
          {result}
        </div>
        <div className="form-group">
          <label htmlFor="doc-type">Select Government Document:</label>
          <input type="text" id="doc-type" name="doc_type" value={docType} onChange={(e) => setDocType(e.target.value)} placeholder="Enter Document Type (e.g., Aadhar, PAN, Passport, NREGA)" />
        </div>
        <div id="document-field" className={docType ? "form-group" : "hidden form-group"}>
          <label htmlFor="document-number">Document Number:</label>
          <input type="text" id="document-number" name="document_number" value={docNumber} onChange={(e) => setDocNumber(e.target.value)} placeholder="Enter Document Number" />
        </div>
        <div className="form-group">
          <label htmlFor="docs">Submit Documents:</label>
          <input type="file" name="docs" required />
        </div>
        <button type="button" id="submitButton">Submit</button>
      </form>
    </div>
  );
};

export default InsuranceForm;
