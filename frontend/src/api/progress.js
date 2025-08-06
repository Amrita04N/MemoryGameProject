// src/api/progress.js
import axios from "axios";

// Automatically switch between local and production
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://127.0.0.1:8000"
    : "https://your-production-backend-url.com"; // Replace with your live backend URL if deploying

export const fetchProgress = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/progress/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching progress:", error);
    return null;
  }
};

export const saveProgress = async (userId, data) => {
  try {
    await axios.post(`${BASE_URL}/progress/${userId}`, data);
  } catch (error) {
    console.error("Error saving progress:", error);
  }
};

export const resetProgress = async (userId) => {
  try {
    await axios.delete(`${BASE_URL}/progress/${userId}`);
  } catch (error) {
    console.error("Error resetting progress:", error);
  }
};

