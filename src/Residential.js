import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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

    // Redirect to the next page, e.g., "/next-page"
    navigate('/WorkInformation', { state: { ...formData, ...residentialData } });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-50 p-4" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
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

export default Residential;
