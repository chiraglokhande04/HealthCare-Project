import React from "react";

const InputField = ({ label, name, type = "text", value, onChange, placeholder }) => (
  <label className="block mb-4">
    <span className="text-gray-700">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border rounded-lg p-2 mt-1"
    />
  </label>
);

export default InputField;
