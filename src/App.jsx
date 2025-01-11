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
import Dashboard from "./pages/Dashboard.jsx"
import Community from "./pages/Community.jsx"
import { QueryClientProvider } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const App = () => {
const {data,isError,isLoading} = useQuery({
  queryKey:'user',
  queryFn:async ()=>{
    const res = await axios.get('https://ask-epa-opera-rainbow.trycloudflare.com/user');
    return res.data
  }
});
console.log(data)
  const renderWithHeaderFooter = (Component) => (
    <>
      <Header user = {data} />
      <Component />
    </>
  );
  console.log(data)

  return (
    <Router>
      <Routes>
        {/* Add your routes here */}
        <Route path="/" element={<Landing/>} />
        <Route path="/register" element={<DoctorRegistration />} />
        {/* <Route path="/login" element={<DoctorLogin />} /> */}
        <Route path="/home" element={renderWithHeaderFooter(Home)} />
        <Route path="/search-patient" element={renderWithHeaderFooter(SearchPatient)} />
        <Route path="/patient-details" element={renderWithHeaderFooter(PatientDetails)} />
        <Route path="/new-patient" element={renderWithHeaderFooter(NewPatientForm)} />
        <Route path="/meet" element={renderWithHeaderFooter(VideoConferences)} />
        <Route path="/medication-details" element={<MedicationDetails />} />
        <Route path="/dashboard" element={renderWithHeaderFooter(Dashboard)} />
        <Route path="/community-support" element={renderWithHeaderFooter(Community)} />
      </Routes>
    </Router>
  );
};

export default App;
