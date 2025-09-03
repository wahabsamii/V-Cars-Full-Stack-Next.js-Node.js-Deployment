import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  email: { type: String, required: true },
  phone: { type: String, required: true },
  website: { type: String },
  date: { type: String, required: true },
  time: { type: String, required: true },
  subject: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'cancelled'], default: 'pending'}
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking
