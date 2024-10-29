import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    navigate('/Idcard', { state: { formData } });
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div 
        className="border rounded overflow-auto" 
        style={{ maxHeight: '80vh', width: '400px', backgroundColor: '#CABA9C' }}
      >
        <div className="text-center mb-3" style={{ backgroundColor: '#CABA9C', padding: '10px' }}>
          <h1 className="text-center mb-4">Presbyterian Hospital, Kom</h1>
          {/* Add the logo here if applicable */}
          {/* <img src={logo} alt="Hospital Logo" className="img-fluid" style={{ maxHeight: '100px', width: 'auto' }} /> */}
        </div>
        <form onSubmit={handleSubmit} className="p-4" style={{ backgroundColor: '#CABA9C' }}>
          <h4 className="text-center mb-4">Applicant Information</h4>

          <div className="mb-3">
            <label className="form-label">Title</label>
            <select
              name="title"
              className="form-select"
              value={formData.title}
              onChange={handleChange}
              required
            >
              <option value="">Select title</option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Mrs">Mrs</option>
              <option value="Dr">Dr</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Surname</label>
            <input
              type="text"
              name="surname"
              className="form-control"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select
              name="gender"
              className="form-select"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              className="form-control"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Telephone Number</label>
            <input
              type="tel"
              name="telephone"
              className="form-control"
              value={formData.telephone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Marital Status</label>
            <select
              name="maritalStatus"
              className="form-select"
              value={formData.maritalStatus}
              onChange={handleChange}
              required
            >
              <option value="">Select marital status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>

          {formData.maritalStatus === 'Married' && (
            <div className="mb-3">
              <label className="form-label">Name of Spouse</label>
              <input
                type="text"
                name="spouseName"
                className="form-control"
                value={formData.spouseName}
                onChange={handleChange}
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100">Next</button>
        </form>
      </div>
    </div>
  );
}

export default Applicant;
