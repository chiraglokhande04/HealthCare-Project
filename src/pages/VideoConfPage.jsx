import React from "react";
import BottomBar from "../components/BottomBar";

// Doctor data with profile images and status
const doctors = [
  { name: "Dr. Ramesh Gupta", specialty: "Cardiologist", image: "/images/ramesh.png", status: "online" },
  { name: "Dr. Priya Sharma", specialty: "Dermatologist", image: "/images/priya.png", status: "offline" },
  { name: "Dr. Anil Mehta", specialty: "Orthopedic Surgeon", image: "/images/anil.png", status: "online" },
  { name: "Dr. Sneha Joshi", specialty: "Pediatrician", image: "/images/sneha.png", status: "offline" },
  { name: "Dr. Amit Verma", specialty: "Neurologist", image: "/images/amit.png", status: "online" },
];

const VideoConfPage = () => {
  return (
    <div className="flex flex-col items-center bg-blue-50 h-full py-8 rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-700">Video Conference</h1>
      <p className="text-gray-500 mt-4">Select a doctor to start a video conference.</p>

      {/* Doctor List */}
      <div className="w-full max-w-md mt-6 space-y-4">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-4 mx-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src="https://st3.depositphotos.com/1743476/32257/i/450/depositphotos_322579018-stock-photo-smiling-doctor-standing-on-grey.jpg"
                alt={doctor.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              {/* Online/Offline Badge */}
              <span
                className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
                  doctor.status === "online" ? "bg-green-500" : "bg-gray-400"
                }`}
              />
            </div>

            {/* Doctor Info */}
            <div className="ml-4 flex-1">
              <h2 className="text-lg font-semibold text-gray-800">{doctor.name}</h2>
              <p className="text-gray-600">{doctor.specialty}</p>
            </div>

            {/* Join Button */}
            {doctor.status === "online" && (
              <button
                className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                onClick={() => alert(`Requesting for a video call with ${doctor.name}`)}
              >
                Request
              </button>
            )}
          </div>
        ))}
      </div>

      <BottomBar />
    </div>
  );
};

export default VideoConfPage;
