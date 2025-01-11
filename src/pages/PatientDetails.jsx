import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const PatientDetails = () => {
 // const { state: patient } = useLocation();
  const navigate = useNavigate();


  if (!patient) {
    return <p className="text-center text-red-500 mt-10">No patient data available.</p>;
  }

  const handleMedicationClick = (medication) => {
    navigate('/medication-details', { state: medication });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className=" p-4 text-black text-center text-2xl font-semibold">
        Patient Details
      </div>

      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{patient.name}</h2>
        <p>
          <span className="font-medium">Age:</span> {patient.age}
        </p>
        <p>
          <span className="font-medium">Blood Group:</span> {patient.bloodGroup}
        </p>
        <p>
          <span className="font-medium">Date of Birth:</span> {patient.dob}
        </p>
        <p>
          <span className="font-medium">Contact:</span> {patient.contact}
        </p>
        <p>
          <span className="font-medium">Serious Issues:</span> {patient.seriousIssues || 'None'}
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Medications:</h3>
        {patient.previousMedications && patient.previousMedications.length > 0 ? (
          <div className="space-y-4">
            {patient.previousMedications.map((medication, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
                onClick={() => handleMedicationClick(medication)}
              >
                <h4 className="font-bold text-gray-800">{medication.name}</h4>
                <p className="text-sm text-gray-600">Disease: {medication.disease}</p>
                <p className="text-sm text-gray-600">Treatment Date: {medication.date}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No medications available.</p>
        )}

        <Link to="/search-patient">
          <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
            Back to Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PatientDetails;
