


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './yonko.png'; 
import './App.css';// Adjust the path to your logo file

function Applicant() {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    surname: '',
    gender: '',
    dateOfBirth: '',
    placeOfBirth: '',
    telephone: '',
    maritalStatus: '',
    spouseName: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
    navigate('/Idcard', { state: { formData } });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div style={{ backgroundColor: 'white', width: '100%', padding: '10px 0', textAlign: 'center' }}>
        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} /> {/* Adjust logo size as needed */}
        <h2 className="text-black">Yonkopa Micro-Credit Enterprise</h2>
      </div>
      <div className="card w-100 w-md-50 p-4" style={{ maxWidth: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
        <h2 className="card-title text-center">Customer Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Title:</label>
            <select
              name="title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
            >
              <option value="">Select title</option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Mrs">Mrs</option>
              <option value="Dr">Dr</option>
            </select>
          </div>

          <div className="form-group mb-3">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-3">
            <label>Surname:</label>
            <input
              type="text"
              name="surname"
              className="form-control"
              value={formData.surname}
              onChange={handleChange}
            />
          </div>
\
          <div className="form-group mb-3">
            <label>Gender:</label>
            <select
              name="gender"
              className="form-control"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group mb-3">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              className="form-control"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-3">
            <label>Place of Birth:</label>
            <input
              type="text"
              name="placeOfBirth"
              className="form-control"
              value={formData.placeOfBirth}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-3">
            <label>Telephone Number:</label>
            <input
              type="tel"
              name="telephone"
              className="form-control"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Enter your telephone number"
            />
          </div>

          <div className="form-group mb-3">
            <label>Marital Status:</label>
            <select
              name="maritalStatus"
              className="form-control"
              value={formData.maritalStatus}
              onChange={handleChange}
            >
              <option value="">Select marital status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>

          
          {formData.maritalStatus === 'Married' && (
  <>
    <div className="form-group mb-3">
      <label>Name of Spouse:</label>
      <input
        type="text"
        name="spouseName"
        className="form-control"
        value={formData.spouseName}
        onChange={handleChange}
        placeholder="Enter spouse's name"
      />
    </div>
    
    <div className="form-group mb-3">
      <label>Spouse Contact:</label>
      <input
        type="text"
        name="spouseContact"
        className="form-control"
        value={formData.spouseContact}
        onChange={handleChange}
        placeholder="Enter spouse's contact"
      />
    </div>
  </>
)}


          <div className="d-flex justify-content-between mt-4">
            <button type="button" className="btn btn-light me-2">
              Submit
            </button>
            <button type="submit" className="btn btn-orange ms-2">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Applicant;
