import React from "react";
import BottomBar from "../components/BottomBar";

const ProfilePage = () => {
  return (
    <div className="overflow-y-hidden flex flex-col items-center bg-blue-50 min-h-screen pb-20 rounded-lg"> {/* Adjusted to full screen height */}
      {/* Profile Section */}
      <div className="flex flex-col items-center mt-8">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHoZUMBKa_J0n6m_IXeHK6jDeTAEzzsJpBZpwm6SL8KsEXHxj_WWb_1rD4HpanYmOHLhs&usqp=CAU"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4 border-4 border-blue-300" // Increased size and border for emphasis
        />
        <h1 className="text-3xl font-semibold text-gray-700">John Doe</h1>
        <p className="text-lg text-gray-500">john.doe@example.com</p>
      </div>

      {/* Patient Details Section */}
      <div className="mt-8 w-10/12 max-w-lg bg-white p-6 shadow-lg rounded-xl"> {/* Added max-width for larger screens */}
        <h2 className="text-2xl font-medium text-gray-700">Patient Details</h2>
        <div className="mt-4 space-y-2 text-gray-600">
          <p>Age: 30</p>
          <p>Gender: Male</p>
          <p>Phone: +123 456 789</p>
          <p>Address: 123, Main Street</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomBar />
    </div>
  );
};

export default ProfilePage;
