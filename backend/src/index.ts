import mongoose from "mongoose";
import { DoctorModel, PatientModel } from "./mongoose.js"; // Assuming models are in models.ts
import { ethers } from "ethers";
import { Hono } from "hono";
import { serve } from "@hono/node-server";

// MongoDB connection setup
mongoose
  .connect("mongodb://localhost:27017/healthcare")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
const signer = provider.getSigner();

const app = new Hono();
app.get("/transaction", async (c) => {
  const txHash = c.req.query("txHash");
  if (!txHash) {
    return c.json({ error: "Transaction hash is required" }, 400);
  }

  try {
    const tx = await provider.getTransaction(txHash);
    if (!tx) {
      return c.json({ error: "Transaction not found" }, 404);
    }
    return c.json(tx);
  } catch (error: any) {
    return c.json(
      { error: "Failed to fetch transaction", details: error.message },
      500
    );
  }
});
app.post("/doctor", async (ctx) => {
  const { name, gender, DOB, contact_no, hash } = await ctx.req.json();
  try {
    const doctor = new DoctorModel({
      name,
      gender,
      DOB,
      contact_no,
      hash,
    });

    await doctor.save();
    return ctx.json({ message: "Doctor created successfully", doctor }, 201);
  } catch (err: any) {
    return ctx.json(
      { error: "Error creating doctor", details: err.message },
      500
    );
  }
});

// Get Doctor by ID
app.get("/doctor/:doctorId", async (ctx) => {
  const doctorId = ctx.req.param("doctorId");
  try {
    const doctor = await DoctorModel.findById(doctorId);
    if (!doctor) {
      return ctx.json({ error: "Doctor not found" }, 404);
    }
    return ctx.json(doctor);
  } catch (err: any) {
    return ctx.json(
      { error: "Error fetching doctor", details: err.message },
      500
    );
  }
});

// Update Doctor
app.put("/doctor/:doctorId", async (ctx) => {
  const doctorId = ctx.req.param("doctorId");
  const updateData = await ctx.req.json();
  try {
    const updatedDoctor = await DoctorModel.findByIdAndUpdate(
      doctorId,
      updateData,
      { new: true }
    );
    if (!updatedDoctor) {
      return ctx.json({ error: "Doctor not found" }, 404);
    }
    return ctx.json({ message: "Doctor updated successfully", updatedDoctor });
  } catch (err: any) {
    return ctx.json(
      { error: "Error updating doctor", details: err.message },
      500
    );
  }
});

// Delete Doctor
app.delete("/doctor/:doctorId", async (ctx) => {
  const doctorId = ctx.req.param("doctorId");
  try {
    const deletedDoctor = await DoctorModel.findByIdAndDelete(doctorId);
    if (!deletedDoctor) {
      return ctx.json({ error: "Doctor not found" }, 404);
    }
    return ctx.json({ message: "Doctor deleted successfully" });
  } catch (err: any) {
    return ctx.json(
      { error: "Error deleting doctor", details: err.message },
      500
    );
  }
});

app.post("/patient", async (ctx) => {
  const { hash, name, location, isRuralArea, subsidyPercentage } =
    await ctx.req.json();
  try {
    const patient = new PatientModel({
      hash,
      name,
      location,
      isRuralArea,
      subsidyPercentage,
    });

    await patient.save();
    return ctx.json({ message: "Patient created successfully", patient }, 201);
  } catch (err: any) {
    return ctx.json(
      { error: "Error creating patient", details: err.message },
      500
    );
  }
});

serve({
  fetch: app.fetch,
  port: 3000,
});
