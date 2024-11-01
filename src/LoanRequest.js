import React, { useState } from 'react';
import logo from './yonko.png'; 

function LoanRequest() {
  const [formData, setFormData] = useState({
    amount: '',
    loanTerm: '',
    employmentStatus: '', // New field for employment status
  });
  const [totalInterest, setTotalInterest] = useState(null);
  const [loanAmount, setLoanAmount] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [monthlyInstall, setMonthlyInstall] = useState(null);

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
    let monthlyInterestRate;

    // Determine interest rate based on employment status
    if (formData.employmentStatus === 'Civil Servant' || formData.employmentStatus === 'Private Sector Employee') {
      monthlyInterestRate = 0.08; // 8% rate for Civil Servant or Private Sector Employee
    } else if (formData.employmentStatus === 'Self Employed') {
      monthlyInterestRate = 0.07; // 7% rate for Self Employed
    } else {
      monthlyInterestRate = 0; // Default to 0% if no valid status is selected
    }

    // Calculate total interest and monthly installment
    const calculatedTotalInterest = amount * monthlyInterestRate * loanTermMonths;
    const calculatedTotalAmount = amount + calculatedTotalInterest;
    const calculatedInstall = calculatedTotalAmount / loanTermMonths;

    setTotalInterest(calculatedTotalInterest);
    setLoanAmount(amount);
    setTotalAmount(calculatedTotalAmount);
    setMonthlyInstall(calculatedInstall);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    console.log('Loan Request Data:', {
      amount: loanAmount,
      totalInterest,
      totalAmount,
      loanTerm: formData.loanTerm,
      employmentStatus: formData.employmentStatus,
    });
    // Send the data to your backend or API
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div style={{ backgroundColor: 'white', width: '100%', padding: '10px 0', textAlign: 'center' }}>
        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
      </div>
      <div className="card w-100 w-md-50 p-4" style={{ maxWidth: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
        <h2 className="card-title text-center">Request Your Loan Here</h2>
        <form onSubmit={handleCalculate}>
          <div className="form-group mb-3">
            <label>Employment Status:</label>
            <select
              name="employmentStatus"
              className="form-control"
              value={formData.employmentStatus}
              onChange={handleChange}
            >
              <option value="">Select Employment Status</option>
              <option value="Civil Servant">Civil Servant</option>
              <option value="Private Sector Employee">Private Sector Employee</option>
              <option value="Self Employed">Self Employed</option>
            </select>
          </div>
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
            Calculate
          </button>

          {/* Display results inside the form */}
          {totalInterest !== null && loanAmount !== null && totalAmount !== null && (
            <div className="mt-2">
              <p>Loan Amount: GHS {loanAmount.toFixed(2)}</p>
              <p>Total Interest: GHS {totalInterest.toFixed(2)}</p>
              <p>Total Amount to Repay: GHS {totalAmount.toFixed(2)}</p>
              <p>Monthly Installment: GHS {monthlyInstall.toFixed(2)}</p>
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
