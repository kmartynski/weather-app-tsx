import * as React from 'react';
import {SearchContext, SearchState} from "./SearchContext";
import {useFetchWeather, UseFetchWeather} from "../hooks/useFetchWeather";


export const SearchResult: React.FC = (): React.ReactElement => {
    const {city}: SearchState = React.useContext(SearchContext);
    const {weather, isLoading}: UseFetchWeather = useFetchWeather(city);
    if (isLoading) {
        return <>Is loading!</>
    }
    return (
        <>{
                weather.temperature
            }
            {
                weather.humidity 
        }
        </>
    )
}
