import React, { useEffect, useState } from "react";
import { fetchMessage } from "./api/message";

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMessage().then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">{message}</h1>
    </div>
  );
}
