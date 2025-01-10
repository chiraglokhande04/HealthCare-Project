import { Schema, model } from "mongoose";

// Define the Doctor schema
type Doctor = {
  name: string;
  gender: "Male" | "Female";
  DOB: string;
  contact_no: string;
  hash: string;
};

const doctorSchema = new Schema<Doctor>({
  name: {
    type: String,
    required: true, // ensure the name is required
  },
  gender: {
    type: String,
    enum: ["Male", "Female"], // gender can only be Male or Female
    required: true,
  },
  DOB: {
    type: String,
    required: true, // required to store the date of birth
  },
  contact_no: {
    type: String,
    required: true, // required to store the contact number
  },
  hash: {
    type: String,
    required: true, // ensure the hash is required
  },
});

// Define the Patient schema
type Patient = {
  hash: string;
  name: string;
  location: string;
  isRuralArea: boolean;
  subsidyPercentage: number;
};

const patientSchema = new Schema<Patient>({
  hash: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  isRuralArea: {
    type: Boolean,
    required: true,
  },
  subsidyPercentage: {
    type: Number,
    required: true,
  },
});

const DoctorModel = model<Doctor>("Doctor", doctorSchema);
const PatientModel = model<Patient>("Patient", patientSchema);

export { DoctorModel, PatientModel };
