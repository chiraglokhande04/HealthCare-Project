import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorRegistration from './components/Doctor/DoctorRegistration';
import Home from './pages/Home.jsx';
import Landing from './pages/Landing.jsx';
import SearchPatient from './pages/SearchPatient.jsx';
import PatientDetails from './pages/PatientDetails';
import NewPatientForm from './pages/NewPatientForm';
import Header from './components/Header.jsx';
import VideoConferences from './pages/VideoConferences.jsx';
import MedicationDetails from './pages/MedicationDetails';

const App = () => {

  const renderWithHeaderFooter = (Component) => (
    <>
      <Header />
      <Component />
    </>
  );


  return (
    <Router>
      <Routes>
        {/* Add your routes here */}
        <Route path="/" element={<Landing/>} />
        <Route path="/register" element={<DoctorRegistration />} />
        <Route path="/home" element={renderWithHeaderFooter(Home)} />
        <Route path="/search-patient" element={renderWithHeaderFooter(SearchPatient)} />
        <Route path="/patient-details" element={renderWithHeaderFooter(PatientDetails)} />
        <Route path="/new-patient" element={renderWithHeaderFooter(NewPatientForm)} />
        <Route path="/meet" element={renderWithHeaderFooter(VideoConferences)} />
        <Route path="/medication-details" element={<MedicationDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
