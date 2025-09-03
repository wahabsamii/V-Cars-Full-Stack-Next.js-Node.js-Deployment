import express from 'express';
import Booking from '../models/Booking.js';
import { addBooking, deleteBooking, getAllBookings, getBookingById, UPDATEBOOKING } from '../controllers/bookingControllers.js';
import { adminOnly, protect } from '../middlewares/auth.js';

const router = express.Router();

// POST - Create booking
router.post('/',protect, addBooking);

// GET - All bookings (admin view)
router.get('/',protect,adminOnly, getAllBookings);

router.get('/:id',protect, getBookingById);

router.delete('/delete/:id',protect,adminOnly, deleteBooking);

router.put("/status/:id",protect, UPDATEBOOKING);
export default router;
