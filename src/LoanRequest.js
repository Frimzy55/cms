import React, { useState } from 'react';
import logo from './yonko.png'; 

function LoanRequest() {
  const [formData, setFormData] = useState({
    amount: '',
    loanTerm: '',
  });
  const [totalInterest, setTotalInterest] = useState(null); // State to store total interest
  const [loanAmount, setLoanAmount] = useState(null); // State to store loan amount
  const [totalAmount, setTotalAmount] = useState(null); // State to store total amount (loan + interest)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    
    const amount = parseFloat(formData.amount);
    const loanTermMonths = parseInt(formData.loanTerm, 10);
    const monthlyInterestRate = 0.08; // Monthly interest rate from 8% annual rate

    // Calculate total interest
    const calculatedTotalInterest = amount * monthlyInterestRate * loanTermMonths;
    const calculatedTotalAmount = amount + calculatedTotalInterest; // Loan amount + total interest

    setTotalInterest(calculatedTotalInterest);
    setLoanAmount(amount);
    setTotalAmount(calculatedTotalAmount); // Set total amount
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the full loan request
    console.log('Loan Request Data:', {
      amount: loanAmount,
      totalInterest,
      totalAmount,
      loanTerm: formData.loanTerm,
    });
    // Here you can send the data to your backend or API
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div style={{ backgroundColor: 'white', width: '100%', padding: '10px 0', textAlign: 'center' }}>
        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        <h1 className="text-white"></h1>
      </div>
      <div className="card w-100 w-md-50 p-4" style={{ maxWidth: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
        <h2 className="card-title text-center">Request Your Loan Here</h2>
        <form onSubmit={handleCalculate}>
          <div className="form-group mb-3">
            <label>Amount (GHS):</label>
            <input
              type="number"
              name="amount"
              className="form-control"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter loan amount"
            />
          </div>
          <div className="form-group mb-3">
            <label>Loan Term (in Months):</label>
            <input
              type="number"
              name="loanTerm"
              className="form-control"
              value={formData.loanTerm}
              onChange={handleChange}
              placeholder="Enter loan term in months"
            />
          </div>
         
          <button type="submit" className="btn btn-light me-2">
            Submit
          </button>

          {/* Display results inside the form */}
          {totalInterest !== null && loanAmount !== null && totalAmount !== null && (
            <div className="mt-2">
              <p>Loan Amount: GHS {loanAmount.toFixed(2)}</p>
              <p>Total Interest: GHS {totalInterest.toFixed(2)}</p>
              <p>Total Amount to Repay: GHS {totalAmount.toFixed(2)}</p>
            </div>
          )}

          {/* Final Submit Button for Loan Request */}
          {totalAmount !== null && (
            <button type="button" className="btn btn-success mt-3 w-100" onClick={handleFinalSubmit}>
              Submit Loan Request
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoanRequest;
