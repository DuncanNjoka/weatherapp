"use client";

import { ForecastData } from '../app/page';

interface ForecastProps {
  data: ForecastData[];
}

export default function Forecast({ data }: ForecastProps) {
  return (
    <div className="card bg-white shadow-xl p-6">
      <h3 className="text-xl font-bold mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.map((day, index) => (
          <div key={index} className="card bg-blue-50 p-4 text-center">
            <div className="font-semibold">{day.date}</div>
            <img 
              src={`https://openweathermap.org/img/wn/${day.icon}.png`} 
              alt={day.description}
              className="w-12 h-12 mx-auto"
            />
            <div className="font-bold">{Math.round(day.temperature)}°C</div>
            <div className="text-sm text-gray-600 capitalize">{day.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 