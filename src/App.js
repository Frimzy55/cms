import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Applicant from './Applicant';
//import ApplicantDetails from './ApplicantDetails';
import Idcard from './Idcard';
import Residential from './Residential';
import WorkInformation from './WorkInformation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Applicant />} />
        <Route path="/Idcard" element={<Idcard />} />
        <Route path='/Residential' element={<Residential />} />
        <Route path='/WorkInformation' element={<WorkInformation/>}/>
      </Routes>
    </Router>
  );
}

export default App;
