import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FindDoctorPage = () => {
  // State to manage button click
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Function to handle button click
  const handleGetStartedClick = () => {
    setIsLoading(true)
        
    
    
    // Optionally, you can add a delay here to simulate a loading process
    setTimeout(() => {
      // Here you can handle what happens after loading completes
      setIsLoading(false); 
      navigate("/profile")// Hide loader after some action is complete
    }, 1000); // 3 seconds delay
  };

  return (
    <div className="bg-blue-500 h-screen flex flex-col items-center justify-center rounded-md">
      <div className="w-full  h-full bg-white flex flex-col items-center justify-center rounded-xl shadow-md ">
        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <img
            src="https://www.shutterstock.com/image-vector/male-doctors-white-medical-coats-600nw-2380152965.jpg"
            alt="Doctor Illustration"
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-blue-600 mb-4">
            Find a Doctor
          </h1>

          {/* Conditional Rendering */}
          {!isLoading ? (
            <button
              onClick={handleGetStartedClick}
              className="bg-blue-600 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-500 transition duration-200"
            >
              Get Started
            </button>
          ) : (
            <div className="flex items-center justify-center mt-4">
              <div className="w-16 h-16 border-4 border-blue-300 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindDoctorPage;
