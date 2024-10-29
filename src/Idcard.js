import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Idcard() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || {};

  const [idCardData, setIdCardData] = useState({
    identificationType: '',
    idNumber: '',
    dateOfIssue: '',
    expiryDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIdCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ID Card Data:', { ...formData, ...idCardData });

    // Redirect to the next page, e.g., "/next-page"
    navigate('/Residential', { state: { ...formData, ...idCardData } });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-50 p-4" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        <h2 className="card-title text-center">Additional ID Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Identification Type:</label>
            <select
              name="identificationType"
              className="form-control"
              value={idCardData.identificationType}
              onChange={handleChange}
            >
              <option value="">Select Identification Type (Ghana card only)</option>
              <option value="National ID">National Identification card</option>
            </select>
          </div>

          <div className="form-group mb-3">
            <label>ID Number:</label>
            <input
              type="text"
              name="idNumber"
              className="form-control"
              value={idCardData.idNumber}
              onChange={handleChange}
              placeholder="Enter ID number"
            />
          </div>

          <div className="form-group mb-3">
            <label>Date of Issue:</label>
            <input
              type="date"
              name="dateOfIssue"
              className="form-control"
              value={idCardData.dateOfIssue}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-3">
            <label>Expiry Date:</label>
            <input
              type="date"
              name="expiryDate"
              className="form-control"
              value={idCardData.expiryDate}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button type="button" className="btn btn-primary me-2">
              Submit
            </button>
            <button type="submit" className="btn btn-secondary ms-2">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Idcard;
