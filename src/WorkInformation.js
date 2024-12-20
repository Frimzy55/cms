import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from './yonko.png'; 

function WorkInformation() {
  const location = useLocation();
  const formData = location.state || {};
  const navigate = useNavigate();

  const [workData, setWorkData] = useState({
    employmentStatus: '',
    employerName: '',
    jobTitle: '',
    natureOfBusiness: '',
    locationOfBusiness: '',
    occupation: '',
    location: '',
    yearsInService: '',
    monthlyNetSalary: '',
    digitalAddressWorkplace: '',
    ministry: '',
    managementUnit: '',
    rankOrJobTitle: '',
    department: '',
    region: '',
    district: '',
    suburb: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //const handleSubmit = (e) => {
   // e.preventDefault();
    //console.log('Work Information:', { ...formData, ...workData });
    // Add logic for further processing or saving data
  //};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ID Card Data:', { ...formData, ...workData });

    // Redirect to the next page, e.g., "/Residential"
    navigate('/Reference', { state: { ...formData, ...workData } });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        
      <div style={{ backgroundColor: 'white', width: '100%', padding: '10px 0', textAlign: 'center' }}>
        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} /> {/* Adjust logo size as needed */}
        <h1 className="text-white"></h1>
      </div>
      <div className="card w-100 w-md-50 p-4" style={{ maxWidth: '600px', maxHeight: '80vh', overflowY: 'auto' }}>
        <h2 className="card-title text-center">Work Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Employment Status:</label>
            <select
              name="employmentStatus"
              className="form-control"
              value={workData.employmentStatus}
              onChange={handleChange}
            >
              <option value="">Select Employment Status</option>
              <option value="Self Employed">Self Employed</option>
              <option value="Private Sector Employee">Private Sector Employee</option>
              <option value="Civil Servant">Civil Servant</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Fields for Self Employed */}
          {workData.employmentStatus === 'Self Employed' && (
            <>
              <div className="form-group mb-3">
                <label>Nature of Business:</label>
                <input
                  type="text"
                  name="natureOfBusiness"
                  className="form-control"
                  value={workData.natureOfBusiness}
                  onChange={handleChange}
                  placeholder="Enter Nature of Business"
                />
              </div>
              <div className="form-group mb-3">
                <label>Location of Business:</label>
                <input
                  type="text"
                  name="locationOfBusiness"
                  className="form-control"
                  value={workData.locationOfBusiness}
                  onChange={handleChange}
                  placeholder="Enter Location of Business"
                />
              </div>
            </>
          )}

          {/* Fields for Private Sector Employee */}
          {workData.employmentStatus === 'Private Sector Employee' && (
            <>
              <div className="form-group mb-3">
                <label>Occupation:</label>
                <input
                  type="text"
                  name="occupation"
                  className="form-control"
                  value={workData.occupation}
                  onChange={handleChange}
                  placeholder="Enter Occupation"
                />
              </div>
              <div className="form-group mb-3">
                <label>Name of Employer:</label>
                <input
                  type="text"
                  name="employerName"
                  className="form-control"
                  value={workData.employerName}
                  onChange={handleChange}
                  placeholder="Enter Employer's Name"
                />
              </div>
              <div className="form-group mb-3">
                <label>Location of Employer:</label>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  value={workData.location}
                  onChange={handleChange}
                  placeholder="Enter Location of Employer"
                />
              </div>
              <div className="form-group mb-3">
                <label>Years in Service:</label>
                <input
                  type="number"
                  name="yearsInService"
                  className="form-control"
                  value={workData.yearsInService}
                  onChange={handleChange}
                  placeholder="Enter Years in Service"
                />
              </div>
              <div className="form-group mb-3">
                <label>Job Title:</label>
                <input
                  type="text"
                  name="jobTitle"
                  className="form-control"
                  value={workData.jobTitle}
                  onChange={handleChange}
                  placeholder="Enter Job Title"
                />
              </div>
              <div className="form-group mb-3">
                <label>Monthly Net Salary:</label>
                <input
                  type="number"
                  name="monthlyNetSalary"
                  className="form-control"
                  value={workData.monthlyNetSalary}
                  onChange={handleChange}
                  placeholder="Enter Monthly Net Salary"
                />
              </div>
              <div className="form-group mb-3">
                <label>Digital Address of Workplace:</label>
                <input
                  type="text"
                  name="digitalAddressWorkplace"
                  className="form-control"
                  value={workData.digitalAddressWorkplace}
                  onChange={handleChange}
                  placeholder="Enter Digital Address of Workplace"
                />
              </div>
            </>
          )}

          {/* Conditionally render fields for Civil Servant */}
          {workData.employmentStatus === 'Civil Servant' && (
            <>
              <div className="form-group mb-3">
                <label>Service Type:</label>
                <select
                  name="civilServiceType"
                  className="form-control"
                  value={workData.civilServiceType}
                  onChange={handleChange}
                >
                  <option value="">Select Service Type</option>
                  <option value="Education Service">Education Service</option>
                  <option value="Military">Military</option>
                  <option value="Police Service">Police Service</option>
                </select>
              </div>

              {/* Additional fields for Education Service, Military, or Police Service */}
              {(workData.civilServiceType === 'Education Service' ||
                workData.civilServiceType === 'Military' ||
                workData.civilServiceType === 'Police Service') && (
                <>
                  <div className="form-group mb-3">
                    <label>Employer Name:</label>
                    <input
                      type="text"
                      name="employerName"
                      className="form-control"
                      value={workData.employerName}
                      onChange={handleChange}
                      placeholder="Enter Employer Name"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Location of Barracks:</label>
                    <input
                      type="text"
                      name="location"
                      className="form-control"
                      value={workData.location}
                      onChange={handleChange}
                      placeholder="Enter Location of Barracks"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Rank/Grade:</label>
                    <input
                      type="text"
                      name="rankOrJobTitle"
                      className="form-control"
                      value={workData.rankOrJobTitle}
                      onChange={handleChange}
                      placeholder="Enter Rank or Grade"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Years in Service:</label>
                    <input
                      type="number"
                      name="yearsInService"
                      className="form-control"
                      value={workData.yearsInService}
                      onChange={handleChange}
                      placeholder="Enter Years in Service"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Monthly Net Salary:</label>
                    <input
                      type="number"
                      name="monthlyNetSalary"
                      className="form-control"
                      value={workData.monthlyNetSalary}
                      onChange={handleChange}
                      placeholder="Enter Monthly Net Salary"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Digital Address of Workplace:</label>
                    <input
                      type="text"
                      name="digitalAddressWorkplace"
                      className="form-control"
                      value={workData.digitalAddressWorkplace}
                      onChange={handleChange}
                      placeholder="Enter Digital Address of Workplace"
                    />
                  </div>
                </>
              )}
            </>
          )}







          {/* Additional Fields for 'Others' in Employment Status */}
          {workData.employmentStatus === 'Others' && (
            <>
              <div className="form-group mb-3">
                <label>Ministry:</label>
                <input
                  type="text"
                  name="ministry"
                  className="form-control"
                  value={workData.ministry}
                  onChange={handleChange}
                  placeholder="Enter Ministry"
                />
              </div>
              <div className="form-group mb-3">
                <label>Management Unit:</label>
                <input
                  type="text"
                  name="managementUnit"
                  className="form-control"
                  value={workData.managementUnit}
                  onChange={handleChange}
                  placeholder="Enter Management Unit"
                />
              </div>
              <div className="form-group mb-3">
                <label>Rank/Job Title:</label>
                <input
                  type="text"
                  name="rankOrJobTitle"
                  className="form-control"
                  value={workData.rankOrJobTitle}
                  onChange={handleChange}
                  placeholder="Enter Rank or Job Title"
                />
              </div>
              <div className="form-group mb-3">
                <label>Department:</label>
                <input
                  type="text"
                  name="department"
                  className="form-control"
                  value={workData.department}
                  onChange={handleChange}
                  placeholder="Enter Department"
                />
              </div>
              <div className="form-group mb-3">
                <label>Region:</label>
                <input
                  type="text"
                  name="region"
                  className="form-control"
                  value={workData.region}
                  onChange={handleChange}
                  placeholder="Enter Region"
                />
              </div>
              <div className="form-group mb-3">
                <label>District:</label>
                <input
                  type="text"
                  name="district"
                  className="form-control"
                  value={workData.district}
                  onChange={handleChange}
                  placeholder="Enter District"
                />
              </div>
              <div className="form-group mb-3">
                <label>Suburb:</label>
                <input
                  type="text"
                  name="suburb"
                  className="form-control"
                  value={workData.suburb}
                  onChange={handleChange}
                  placeholder="Enter Suburb"
                />
              </div>
              <div className="form-group mb-3">
                <label>Monthly Net Salary:</label>
                <input
                  type="number"
                  name="monthlyNetSalary"
                  className="form-control"
                  value={workData.monthlyNetSalary}
                  onChange={handleChange}
                  placeholder="Enter Monthly Net Salary"
                />
              </div>
            </>
          )}

<div className="d-flex justify-content-between mt-4">
  {/* Left-aligned Submit button */}
  <button type="button" className="btn btn-light" onClick={() => alert('Form Submitted')}>
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

export default WorkInformation;
