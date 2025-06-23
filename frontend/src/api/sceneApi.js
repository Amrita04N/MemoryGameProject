export const fetchScene = async () => {
  const res = await fetch("http://localhost:8000/scene");
  return await res.json();
};
