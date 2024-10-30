import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from './yonko.png'; 


function Residential() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || {};

  const [residentialData, setResidentialData] = useState({
    city: '',
    suburb: '',
    region: '',
    gpsAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResidentialData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Residential Data:', { ...formData, ...residentialData });

    // Redirect to the next page, e.g., "/WorkInformation"
    navigate('/WorkInformation', { state: { ...formData, ...residentialData } });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        
      <div style={{ backgroundColor: 'white', width: '100%', padding: '10px 0', textAlign: 'center' }}>
        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} /> {/* Adjust logo size as needed */}
        <h1 className="text-white"></h1>
      </div>
      <div className="card w-100 w-md-50 p-4" style={{ maxWidth: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
        <h2 className="card-title text-center">Residential Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>City:</label>
            <input
              type="text"
              name="city"
              className="form-control"
              value={residentialData.city}
              onChange={handleChange}
              placeholder="Enter City"
            />
          </div>

          <div className="form-group mb-3">
            <label>Suburb:</label>
            <input
              type="text"
              name="suburb"
              className="form-control"
              value={residentialData.suburb}
              onChange={handleChange}
              placeholder="Enter Suburb"
            />
          </div>

          <div className="form-group mb-3">
            <label>Region:</label>
            <input
              type="text"
              name="region"
              className="form-control"
              value={residentialData.region}
              onChange={handleChange}
              placeholder="Enter Region"
            />
          </div>

          <div className="form-group mb-3">
            <label>GPS Address:</label>
            <input
              type="text"
              name="gpsAddress"
              className="form-control"
              value={residentialData.gpsAddress}
              onChange={handleChange}
              placeholder="Enter GPS Address"
            />
          </div>
          <div className="d-flex justify-content-between mt-4">
  {/* Left-aligned Submit button */}
  <button type="button" className="btn btn-primary" onClick={() => alert('Form Submitted')}>
    Submit
  </button>

  {/* Right-aligned Back and Next buttons */}
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

export default Residential;
