"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole || "");
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to DevBunker</h1>

      {role === "admin" && (
        <div className="bg-blue-100 text-blue-800 p-4 rounded-xl">
           Admin Panel: You can manage tags, categories, and users here.
        </div>
      )}

      {role === "user" && (
        <div className="bg-green-100 text-green-800 p-4 rounded-xl">
           Welcome, user! You can browse and contribute to posts.
        </div>
      )}

      {!role && (
        <div className="text-gray-500">Please login to see role-specific features.</div>
      )}
    </div>
  );
}
