import React from "react";

export default function SceneViewer({ title, narrative, image }) {
  console.log("SceneViewer image:", image); // ✅ move here

  return (
    <div className="mb-6 text-center">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <img
  src={image || "https://via.placeholder.com/400x200?text=Scene+Image"}
  alt="Scene"
  className="rounded shadow mb-4"
  style={{ width: "400px", height: "200px", objectFit: "cover" }}
/>

      <p className="text-gray-700">{narrative}</p>
    </div>
  );
}
