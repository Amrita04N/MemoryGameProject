import React, { useState } from "react";

export default function SceneViewer({ title, description, image, imageUrl, imageAlt }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="mb-4">
      <h2 className="text-lg text-amber-700 font-semibold mb-2 border-b-2 border-gray-600 pb-1">{title}</h2>
      <p className="text-sm text-gray-300 mb-2">{description}</p>

      <div className="w-full rounded overflow-hidden border border-gray-500 flex items-center justify-center bg-gray-900" style={{ maxHeight: "300px" }}>
        {!imgError && imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full max-h-[300px] object-contain"
            onError={() => {
              console.warn("Image failed to load:", imageUrl);
              setImgError(true);
            }}
          />
        ) : (
          <div className="text-6xl animate-bounce">{image}</div>
        )}
      </div>
    </div>
  );
}
