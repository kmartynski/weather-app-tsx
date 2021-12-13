import axios, {AxiosResponse} from "axios";
import {WeatherData} from "../hooks/useFetchWeather";


interface WeatherApiData {
    current: {
        temp_c: number;
        humidity: number;
    }
}

const apiUrl: string = "http://api.weatherapi.com/v1/current.json?key=49a021a910334f1795185358212005&"

export const fetchWeatherData = (city: string): Promise<WeatherData> => {
    const url = `${apiUrl}&q=${city}&aqi=no`;
    return axios.get(url).then((response: AxiosResponse<WeatherApiData>) => {
        return {
            temperature: response.data.current.temp_c,
            humidity: response.data.current.humidity,
        }
    })
}

