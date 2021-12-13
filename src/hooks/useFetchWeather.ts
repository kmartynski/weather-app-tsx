import * as React from 'react';
import {fetchWeatherData} from "../api/api";

export interface WeatherData {
    temperature: number;
    humidity: number;
} 

export interface UseFetchWeather {
    isLoading: boolean;
    weather: WeatherData;
}


export const useFetchWeather = (city: string): UseFetchWeather => {
    
    const [weather, setWeather] = React.useState({temperature: 0, humidity: 0});
    const [isLoading, setIsLoading] = React.useState(true);
    
    React.useEffect(() => {
        fetchWeatherData(city).then(setWeather).catch(console.error).finally(() => setIsLoading(false));
    }, [city])

    return {
        isLoading,
        weather,
    }
}