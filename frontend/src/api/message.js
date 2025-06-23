import axios from "axios";

export async function fetchMessage() {
  const response = await axios.get("http://127.0.0.1:8000/");
  return response.data;
}
