import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const MedicationDetails = () => {
  const { state: medication } = useLocation();

  if (!medication) {
    return <p className="text-center text-red-500 mt-10">No medication details available.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-600 p-4 text-white text-center text-2xl font-semibold">
        Medication Details
      </div>

      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{medication.name}</h2>
        <p>
          <span className="font-medium">Disease:</span> {medication.disease}
        </p>
        <p>
          <span className="font-medium">Treatment Date:</span> {medication.date}
        </p>
        <p>
          <span className="font-medium">Treatment Details:</span> {medication.treatmentDetails}
        </p>
        <p>
          <span className="font-medium">Result:</span> {medication.result}
        </p>
        <Link to="/patient-details">
          <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
            Back to Patient Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MedicationDetails;
