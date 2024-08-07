import mongoose from 'mongoose';

const deviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  overview: [{ type: String, required: true }],
  specifications: [{ type: String, required: true }],
  features: [{ type: String, required: true }],
  useCases: [{ type: String, required: true }],
});

export const Device = mongoose.model('Device', deviceSchema);