# Weather App

A modern weather application built with a decoupled architecture using Next.js for frontend and Laravel for backend API.

## Project Structure

- `weather-app-frontend`: Next.js frontend with TypeScript and TailwindCSS/RippleUI
- `weather-app-backend`: Laravel backend API for OpenWeatherMap integration

## Features

- Search for weather by city name
- View current weather conditions (temperature, feels like, humidity, wind speed, pressure)
- View 5-day weather forecast
- Responsive design with mobile-first approach
- Modern UI with TailwindCSS and RippleUI components

## Requirements

### Frontend
- Node.js 16+
- npm or yarn

### Backend
- PHP 8.1+
- Composer
- OpenWeatherMap API key

## Setup Instructions

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd weather-app-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Access the frontend at http://localhost:3000

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd weather-app-backend
   ```

2. Install dependencies:
   ```
   composer install
   ```

3. Create a `.env` file by copying `.env.example`:
   ```
   cp .env.example .env
   ```

4. Add your OpenWeatherMap API key to the `.env` file:
   ```
   OPENWEATHERMAP_API_KEY=148e54dcf28dff25b9618fecdf123e06your_api_key_here
   ```

5. Generate application key:
   ```
   php artisan key:generate
   ```

6. Run the development server:
   ```
   php artisan serve
   ```

7. Backend API will be available at http://localhost:8000

## API Endpoints

- `GET /api/weather?city={city}` - Get current weather for a city
- `GET /api/forecast?city={city}` - Get 5-day forecast for a city

## Technologies Used

### Frontend
- Next.js with TypeScript
- TailwindCSS for styling
- RippleUI components
- Fetch API for AJAX requests

### Backend
- Laravel 10
- Guzzle HTTP client for API requests

## License

MIT 