import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const SearchPatient = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulated search result - replace with API call in real implementation
    const mockData = [
      {
        username: 'john_doe',
        name: 'John Doe',
        age: 32,
        bloodGroup: 'O+',
        dob: '1991-05-12',
        contact: '123-456-7890',
        seriousIssues: 'Hypertension',
        previousMedications: 'Lisinopril, Metoprolol',
      },
      {
        username: 'jane_doe',
        name: 'Jane Doe',
        age: 29,
        bloodGroup: 'A+',
        dob: '1994-03-08',
        contact: '987-654-3210',
        seriousIssues: 'None',
        previousMedications: 'None',
      },
    ];

    const result = mockData.find((patient) => patient.username === username);

    if (result) {
      navigate('/patient-details', { state: result });
    } else {
      alert('Patient not found');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
   
      {/* Header */}
      <div className="p-4 flex justify-between items-center">
        <Link to="/new-patient">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
            New Patient
          </button>
        </Link>
      </div>

      {/* Search Form */}
      <div className="flex flex-col items-center mt-10">
        <form onSubmit={handleSearch} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Search Patient</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Enter Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g., john_doe"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchPatient;
