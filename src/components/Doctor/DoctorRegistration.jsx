import React, { useState } from "react";
import InputField from "../InputField";

import { useMutation } from "@tanstack/react-query";
import { createDoctor } from "../../services/doctor";
import { useNavigate } from "react-router-dom";
const DoctorRegistration = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    password: "",
    name: "",
    email: "",
    phoneNumber: "",
    specialization: "",
    consultationFee: "",
    yearsOfExperience: "",
    isActive: false
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const mutation = useMutation({
    mutationFn:createDoctor,
    onSuccess:()=>{navigate('/')},
    onError:(error)=>{console.log(error)}
  })
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black bg-cover bg-center">
      <div className="bg-white border-black border-2 rounded-xl shadow-2xl p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">Doctor Registration</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
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
                name="yearsOfExperience"
                type="number"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                placeholder="e.g., 5"
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
                name="consultationFee"
                type="number"
                value={formData.consultationFee}
                onChange={handleChange}
                placeholder="e.g., 500"
                className="input-field"
              />
            </div>
          </section>

          {/* Account Information Section */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
