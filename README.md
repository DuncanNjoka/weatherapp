# Weather App

A modern weather application built with a decoupled architecture using Next.js for frontend and Laravel for backend API.

![Weather App Screenshot](screenshots/app-screenshot.png)

## 🌟 Features

- Real-time weather data using OpenWeatherMap API
- Search for weather by city name
- View current weather conditions:
  - Temperature
  - Feels like
  - Humidity
  - Wind speed
  - Pressure
- 5-day weather forecast
- Responsive design with mobile-first approach
- Modern UI with TailwindCSS and RippleUI components

## 🏗 Project Structure

```
weather-app/
├── weather-app-frontend/     # Next.js frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Next.js pages
│   │   └── styles/         # CSS styles
│   └── public/             # Static assets
│
└── weather-app-backend/     # Laravel backend
    ├── app/
    │   ├── Http/
    │   │   └── Controllers/ # API controllers
    │   └── Services/        # Business logic
    └── routes/
        └── api.php         # API routes
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- PHP 8.1+
- Composer
- MySQL
- OpenWeatherMap API key

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd weather-app-backend
   ```

2. Install dependencies:
   ```bash
   composer install
   ```

3. Create `.env` file:
   ```bash
   cp .env.example .env
   ```

4. Add your OpenWeatherMap API key to `.env`:
   ```
   OPENWEATHERMAP_API_KEY=your_api_key_here
   ```

5. Generate application key:
   ```bash
   php artisan key:generate
   ```

6. Start the development server:
   ```bash
   php artisan serve
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd weather-app-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access the application at http://localhost:3000

## 🔧 Development

### Backend API Endpoints

- `GET /api/weather?city={city}` - Get current weather
- `GET /api/forecast?city={city}` - Get 5-day forecast

### Frontend Development

- Built with Next.js and TypeScript
- Uses TailwindCSS for styling
- Implements RippleUI components
- Follows atomic design principles

## 🧪 Testing

### Backend Tests
```bash
cd weather-app-backend
php artisan test
```

### Frontend Tests
```bash
cd weather-app-frontend
npm test
```

## 📦 Deployment

### Backend Deployment
1. Set up a production environment
2. Configure your web server (Apache/Nginx)
3. Set up SSL certificates
4. Configure environment variables

### Frontend Deployment
1. Build the application:
   ```bash
   npm run build
   ```
2. Deploy the `out` directory to your hosting service

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for weather data
- [Next.js](https://nextjs.org/) for the frontend framework
- [Laravel](https://laravel.com/) for the backend framework
- [TailwindCSS](https://tailwindcss.com/) for styling
- [RippleUI](https://rippleui.com/) for UI components 