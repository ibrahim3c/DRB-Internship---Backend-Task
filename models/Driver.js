import { Schema, model } from 'mongoose';

const driverSchema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  licenseType: { type: String, required: true },
  availability: { type: Boolean, default: true }
}, { timestamps: true });

export default model('Driver', driverSchema);
