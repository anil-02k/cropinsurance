import React, { useState } from 'react';
import './CSS/Report.css';

const Report = () => {
  const [farmerName, setFarmerName] = useState('');
  const [cropType, setCropType] = useState('');
  const [lossAmount, setLossAmount] = useState('');
  const [comments, setComments] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!farmerName || !cropType || !lossAmount) {
      setMessage('Please fill out all required fields.');
      return;
    }

    // Clear the form fields
    setFarmerName('');
    setCropType('');
    setLossAmount('');
    setComments('');

    setMessage('Crop loss reported successfully!');
  };

  return (
    <div className="container">
      <h2>Report Crop Loss</h2>
      <div id="message" style={{ color: message === 'Please fill out all required fields.' ? 'red' : 'green' }}>
        {message}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="farmerName">Farmer Name:</label>
          <input
            type="text"
            id="farmerName"
            value={farmerName}
            onChange={(e) => setFarmerName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cropType">Crop Type:</label>
          <input
            type="text"
            id="cropType"
            value={cropType}
            onChange={(e) => setCropType(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lossAmount">Loss Amount (in %):</label>
          <input
            type="number"
            id="lossAmount"
            value={lossAmount}
            onChange={(e) => setLossAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Report;
