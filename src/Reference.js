import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from './yonko.png';

function Reference() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || {};

  const [referees, setReferees] = useState([
    { fullName: '', residentialAddress: '', contact: '', relationship: '' },
    { fullName: '', residentialAddress: '', contact: '', relationship: '' },
    { fullName: '', residentialAddress: '', contact: '', relationship: '' },
    
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setReferees((prevReferees) =>
      prevReferees.map((referee, i) =>
        i === index ? { ...referee, [name]: value } : referee
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Referees Data:', { ...formData, referees });
    navigate('/Document', { state: { ...formData, referees } });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div style={{ backgroundColor: 'white', width: '100%', padding: '10px 0', textAlign: 'center' }}>
        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
      </div>
      <div className="card w-100 w-md-50 p-4" style={{ maxWidth: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
        <h2 className="card-title text-center">Referees Information</h2>
        <form onSubmit={handleSubmit}>
          {referees.map((referee, index) => (
            <div key={index} className="mb-4">
              <h5>Referee {index + 1}</h5>
              <div className="form-group mb-2">
                <label>Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  value={referee.fullName}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Enter full name"
                />
              </div>
              <div className="form-group mb-2">
                <label>Residential Address:</label>
                <input
                  type="text"
                  name="residentialAddress"
                  className="form-control"
                  value={referee.residentialAddress}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Enter residential address"
                />
              </div>
              <div className="form-group mb-2">
                <label>Contact:</label>
                <input
                  type="text"
                  name="contact"
                  className="form-control"
                  value={referee.contact}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Enter contact number"
                />
              </div>
              <div className="form-group mb-2">
                <label>Relationship:</label>
                <input
                  type="text"
                  name="relationship"
                  className="form-control"
                  value={referee.relationship}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Enter relationship"
                />
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-between mt-4">
            <button type="button" className="btn btn-light" onClick={() => alert('Form Submitted')}>
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

export default Reference;
