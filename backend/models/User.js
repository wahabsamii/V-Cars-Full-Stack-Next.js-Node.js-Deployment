import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    profile: {type: String, default: 'https://img.freepik.com/premium-vector/vector-flat-illustration-gray-colors-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-844.jpg'},
    About: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['customer', 'admin', 'staff'], default: 'customer'}
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;