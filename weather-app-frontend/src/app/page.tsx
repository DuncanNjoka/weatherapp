"use client";

import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import Forecast from '../components/Forecast';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feels_like: number;
  description: string;
  icon: string;
  humidity: number;
  wind: number;
  pressure: number;
}

export interface ForecastData {
  date: string;
  temperature: number;
  description: string;
  icon: string;
}

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchWeather = async (city: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Use a hardcoded API URL instead of process.env
      const apiUrl = 'http://localhost:8000/api';
      
      // Call to our Laravel backend
      const weatherResponse = await fetch(`${apiUrl}/weather?city=${encodeURIComponent(city)}`);
      const forecastResponse = await fetch(`${apiUrl}/forecast?city=${encodeURIComponent(city)}`);
      
      if (!weatherResponse.ok || !forecastResponse.ok) {
        throw new Error('Failed to fetch weather data');
      }
      
      const weatherData = await weatherResponse.json();
      const forecastData = await forecastResponse.json();
      
      setWeatherData(weatherData);
      setForecastData(forecastData);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <SearchBar onSearch={searchWeather} />
        
        {isLoading && <Loading />}
        
        {error && <ErrorMessage message={error} />}
        
        {weatherData && !isLoading && (
          <div className="mt-8">
            <WeatherCard data={weatherData} />
          </div>
        )}
        
        {forecastData.length > 0 && !isLoading && (
          <div className="mt-8">
            <Forecast data={forecastData} />
          </div>
        )}
      </div>
    </div>
  );
} 