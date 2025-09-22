import { Schema, model } from 'mongoose';

const driverHistorySchema = new Schema({
  driverId: { type: Schema.Types.ObjectId, ref: 'Driver', required: true },
  routeId: { type: Schema.Types.ObjectId, ref: 'Route', required: true },
  dateAssigned: { type: Date, default: Date.now }
}, { timestamps: true });

export default model('DriverHistory', driverHistorySchema);
