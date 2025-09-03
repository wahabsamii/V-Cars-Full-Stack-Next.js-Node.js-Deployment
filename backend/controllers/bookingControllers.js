import Booking from "../models/Booking.js";

// CREATE Booking
export const addBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET All Bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET Single Booking by ID
export const getBookingById = async (req, res) => {
  const {id} = req.params;
  try {
    const booking = await Booking.find({user: id});
    if (!booking) return res.status(404).json({ error: "Booking not found" });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE Booking
export const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!booking) return res.status(404).json({ error: "Booking not found" });
    res.json({ message: "Booking updated successfully", booking });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE Booking
export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ error: "Booking not found" });
    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// ✅ Update booking status
export const UPDATEBOOKING = async (req, res) => {
  const { status } = req.body;

  if (!["pending", "approved", "cancelled"].includes(status)) {
    return res.status(400).json({ message: "Invalid status" });
  }

  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!booking) return res.status(404).json({ message: "Booking not found" });

    res.json({ message: "Status updated successfully", booking });
  } catch (err) {
    res.status(500).json({ message: "Error updating status" });
  }
};

