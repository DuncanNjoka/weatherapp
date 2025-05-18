"use client";

import { useState, FormEvent } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <div className="card bg-white shadow-xl p-6">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="input input-primary flex-grow"
          aria-label="City name"
        />
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={!city.trim()}
        >
          Search
        </button>
      </form>
    </div>
  );
} 