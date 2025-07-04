import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export async function saveProgress(userId, progressData) {
  await axios.post(`${BASE_URL}/progress/${userId}`, {
    user_id: userId,
    ...progressData,
  });
}
export const getProgress = async (userId) => {
  const res = await axios.get(`${API}/progress/${userId}`);
  return res.data;
}
export async function fetchProgress(userId) {
  const res = await axios.get(`${BASE_URL}/progress/${userId}`);
  return res.data;
}
