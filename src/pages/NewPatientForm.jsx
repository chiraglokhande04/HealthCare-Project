import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";

const NewPatientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    bloodGroup: "",
    contact: "",
    seriousIssue: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Patient Data:", formData);
    navigate("/search-patient", { state: { message: "Patient added successfully!" } });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Patient</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter patient's name"
          />
          <InputField
            label="Date of Birth"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
          />
          <SelectField
            label="Blood Group"
            name="bloodGroup"
            options={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]}
            value={formData.bloodGroup}
            onChange={handleChange}
          />
          <InputField
            label="Contact Number"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter contact number"
          />
          <InputField
            label="Serious Issue (If any)"
            name="seriousIssue"
            value={formData.seriousIssue}
            onChange={handleChange}
            placeholder="Enter any serious issue"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPatientForm;
