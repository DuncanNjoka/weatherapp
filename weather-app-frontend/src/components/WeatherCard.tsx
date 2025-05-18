"use client";

import { WeatherData } from '../app/page';

interface WeatherCardProps {
  data: WeatherData;
}

export default function WeatherCard({ data }: WeatherCardProps) {
  return (
    <div className="card bg-white shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">{data.city}</h2>
            <p className="text-lg">{data.country}</p>
          </div>
          <div className="text-center">
            <img 
              src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} 
              alt={data.description}
              className="w-20 h-20 mx-auto"
            />
            <p className="text-lg capitalize">{data.description}</p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <div className="text-6xl font-bold">{Math.round(data.temperature)}°C</div>
          <p className="text-lg">Feels like: {Math.round(data.feels_like)}°C</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-gray-500">Humidity</span>
            <span className="text-xl font-semibold">{data.humidity}%</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-500">Wind</span>
            <span className="text-xl font-semibold">{data.wind} m/s</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-500">Pressure</span>
            <span className="text-xl font-semibold">{data.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
} 