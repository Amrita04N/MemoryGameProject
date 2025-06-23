import axios from "axios";

const API = "http://127.0.0.1:8000";

export const fetchScene = async (id) => {
  const res = await axios.get(`${API}/scene/${id}`);
  return res.data;
};

export const postChoice = async (choice) => {
  const res = await axios.post(`${API}/choice`, choice);
  return res.data;
};

