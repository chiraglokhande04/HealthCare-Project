import React from "react";

const SelectField = ({ label, name, options, value, onChange }) => (
  <label className="block mb-4">
    <span className="text-gray-700">{label}</span>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded-lg p-2 mt-1"
    >
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);

export default SelectField;
