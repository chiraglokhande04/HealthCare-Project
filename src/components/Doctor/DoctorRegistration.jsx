import React, { useState } from "react";
import InputField from "../InputField";
import SelectField from "../SelectField";

const DoctorRegistration = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    specialization: "",
    experience: "",
    qualifications: "",
    consultationHours: "",
    modeOfConsultation: "",
    fees: "",
    bankDetails: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Add API call or further processing here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black bg-cover bg-center">
      <div className="bg-white  border-black border-2  rounded-xl shadow-2xl p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">Doctor Registration</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Account Information Section */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className="input-field"
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="input-field"
              />
            </div>
          </section>

          {/* Basic Information Section */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="input-field"
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input-field"
              />
              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="input-field"
              />
            </div>
          </section>

          {/* Professional Information Section */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                placeholder="e.g., Cardiologist, Dentist"
                className="input-field"
              />
              <InputField
                label="Years of Experience"
                name="experience"
                type="number"
                value={formData.experience}
                onChange={handleChange}
                placeholder="e.g., 5"
                className="input-field"
              />
              <InputField
                label="Qualifications"
                name="qualifications"
                value={formData.qualifications}
                onChange={handleChange}
                placeholder="e.g., MBBS, MD"
                className="input-field"
              />
            </div>
          </section>

          {/* Availability Section */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Availability</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Consultation Hours"
                name="consultationHours"
                value={formData.consultationHours}
                onChange={handleChange}
                placeholder="e.g., 10:00 AM - 5:00 PM"
                className="input-field"
              />
              <SelectField
                label="Mode of Consultation"
                name="modeOfConsultation"
                options={["In-person", "Online", "Both"]}
                value={formData.modeOfConsultation}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </section>

          {/* Payment Information Section */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Consultation Fees (₹)"
                name="fees"
                type="number"
                value={formData.fees}
                onChange={handleChange}
                placeholder="e.g., 500"
                className="input-field"
              />
              <InputField
                label="Bank Account/UPI Details (Optional)"
                name="bankDetails"
                value={formData.bankDetails}
                onChange={handleChange}
                placeholder="e.g., UPI ID or Account Number"
                className="input-field"
              />
            </div>
          </section>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegistration;
