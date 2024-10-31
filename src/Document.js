import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from './yonko.png';

function Document() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || {};

  const [idCardData, setIdCardData] = useState({
    identificationType: '',
    idNumber: '',
    dateOfIssue: '',
    expiryDate: '',
    profilePicture: null,
    idFront: null,
    idBack: null,
    employmentType: '',
    staffIdFront: null,
    staffIdBack: null,
    payslip: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIdCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setIdCardData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', { ...formData, ...idCardData });
    navigate('/LoanRequest', { state: { ...formData, ...idCardData } });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div style={{ backgroundColor: 'white', width: '100%', padding: '10px 0', textAlign: 'center' }}>
        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
      </div>
      <div className="card w-100 w-md-50 p-4" style={{ maxWidth: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
        <h2 className="card-title text-center">Upload ID and Employment Documents</h2>
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
            <label>ID Front:</label>
            <input
              type="file"
              name="idFront"
              className="form-control"
              onChange={handleFileChange}
            />
          </div>

          <div className="form-group mb-3">
            <label>ID Back:</label>
            <input
              type="file"
              name="idBack"
              className="form-control"
              onChange={handleFileChange}
            />
          </div>

          <div className="form-group mb-3">
            <label>Profile Picture:</label>
            <input
              type="file"
              name="profilePicture"
              className="form-control"
              onChange={handleFileChange}
            />
          </div>

          <div className="form-group mb-3">
            <label>Employment Type:</label>
            <select
              name="employmentType"
              className="form-control"
              value={idCardData.employmentType}
              onChange={handleChange}
            >
              <option value="">Select Employment Type</option>
              <option value="civil">Civil Servant</option>
              <option value="private">Private Sector</option>
              <option value="other">Other</option>
            </select>
          </div>

          {(idCardData.employmentType === 'civil' || idCardData.employmentType === 'private') && (
            <>
              <div className="form-group mb-3">
                <label>Staff ID Front:</label>
                <input
                  type="file"
                  name="staffIdFront"
                  className="form-control"
                  onChange={handleFileChange}
                />
              </div>

              <div className="form-group mb-3">
                <label>Staff ID Back:</label>
                <input
                  type="file"
                  name="staffIdBack"
                  className="form-control"
                  onChange={handleFileChange}
                />
              </div>
            </>
          )}

          <div className="form-group mb-3">
            <label>Recent Payslip:</label>
            <input
              type="file"
              name="payslip"
              className="form-control"
              onChange={handleFileChange}
            />
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button type="button" className="btn btn-primary" onClick={() => alert('Form Submitted')}>
              Submit
            </button>
            <div>
              <button type="button" className="btn btn-secondary me-2" onClick={() => navigate(-1)}>
                Back
              </button>
              <button type="submit" className="btn btn-orange">
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Document;
