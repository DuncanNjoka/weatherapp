"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="loading loading-spinner loading-lg text-primary"></div>
      <span className="ml-2 text-lg">Loading weather data...</span>
    </div>
  );
} 