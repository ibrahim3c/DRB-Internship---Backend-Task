import { Schema, model } from 'mongoose';

const routeSchema = new Schema({
  startLocation: { type: String, required: true },
  endLocation: { type: String, required: true },
  distance: { type: Number, required: true },
  estimatedTime: { type: String, required: true },
  status: { type: String, enum: ['assigned', 'unassigned'], default: 'unassigned' },
  driverId: { type: Schema.Types.ObjectId, ref: 'Driver', default: null }
}, { timestamps: true });

export default model('Route', routeSchema);
