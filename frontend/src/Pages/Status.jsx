import React, { useState } from 'react';
import './CSS/Status.css'
const Status = () => {
  const [tokenNumber, setTokenNumber] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder for status checking logic
    // In a real application, you would fetch the status from a server or a database
    // based on the tokenNumber provided by the user.
    // Here, we're using a simple conditional for demonstration purposes.

    if (tokenNumber === '123') {
      setStatus('Your report has been processed.');
    } else if (tokenNumber === '456') {
      setStatus('Your report is under review.');
    } else {
      setStatus('Invalid token number or no report found.');
    }
  };

  return (
    <div className="container">
      <h2>Check Status</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tokenNumber">Token Number:</label>
          <input
            type="text"
            id="tokenNumber"
            value={tokenNumber}
            onChange={(e) => setTokenNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Check Status</button>
      </form>
      {status && <div id="statusMessage">{status}</div>}
    </div>
  );
};

export default Status;
