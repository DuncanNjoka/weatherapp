<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\JsonResponse;

class WeatherController extends Controller
{
    /**
     * OpenWeatherMap API key
     * 
     * @var string
     */
    protected $apiKey;
    
    /**
     * OpenWeatherMap API base URL
     * 
     * @var string
     */
    protected $baseUrl = 'https://api.openweathermap.org/data/2.5';
    
    /**
     * Constructor
     */
    public function __construct()
    {
        // Get API key from environment
        $this->apiKey = env('OPENWEATHERMAP_API_KEY', ''); 
    }
    
    /**
     * Get current weather for a city
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function getCurrentWeather(Request $request): JsonResponse
    {
        $city = $request->query('city');
        
        if (!$city) {
            return response()->json(['error' => 'City parameter is required'], 400);
        }
        
        try {
            $response = Http::get("{$this->baseUrl}/weather", [
                'q' => $city,
                'appid' => $this->apiKey,
                'units' => 'metric'
            ]);
            
            if ($response->failed()) {
                return response()->json(['error' => 'Failed to fetch weather data'], 500);
            }
            
            $data = $response->json();
            
            return response()->json([
                'city' => $data['name'],
                'country' => $data['sys']['country'],
                'temperature' => $data['main']['temp'],
                'feels_like' => $data['main']['feels_like'],
                'description' => $data['weather'][0]['description'],
                'icon' => $data['weather'][0]['icon'],
                'humidity' => $data['main']['humidity'],
                'wind' => $data['wind']['speed'],
                'pressure' => $data['main']['pressure']
            ]);
            
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error fetching weather data: ' . $e->getMessage()], 500);
        }
    }
    
    /**
     * Get weather forecast for a city
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function getForecast(Request $request): JsonResponse
    {
        $city = $request->query('city');
        
        if (!$city) {
            return response()->json(['error' => 'City parameter is required'], 400);
        }
        
        try {
            $response = Http::get("{$this->baseUrl}/forecast", [
                'q' => $city,
                'appid' => $this->apiKey,
                'units' => 'metric'
            ]);
            
            if ($response->failed()) {
                return response()->json(['error' => 'Failed to fetch forecast data'], 500);
            }
            
            $data = $response->json();
            $forecast = [];
            $uniqueDays = [];
            
            // Get one forecast per day (for 5 days)
            foreach ($data['list'] as $item) {
                $date = date('Y-m-d', $item['dt']);
                
                // Only take the first forecast for each day
                if (!in_array($date, $uniqueDays) && count($uniqueDays) < 5) {
                    $uniqueDays[] = $date;
                    
                    $forecast[] = [
                        'date' => date('D, M d', $item['dt']), // Format: Mon, Jan 01
                        'temperature' => $item['main']['temp'],
                        'description' => $item['weather'][0]['description'],
                        'icon' => $item['weather'][0]['icon']
                    ];
                }
            }
            
            return response()->json($forecast);
            
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error fetching forecast data: ' . $e->getMessage()], 500);
        }
    }
} 