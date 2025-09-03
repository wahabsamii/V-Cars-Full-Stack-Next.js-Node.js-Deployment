import axios from "axios";

const instance = axios.create({
 baseURL: "https://v-cars-next-backend.vercel.app", // Replace with your backend URL
 withCredentials: true, // 🔹 Required for cookies
});

export default instance;
