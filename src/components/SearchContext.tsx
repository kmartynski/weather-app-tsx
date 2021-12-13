import * as React from 'react';


export interface SearchState {
    city: string;
    isSubmitted: boolean;
    setCity(city: string): void;
    setIsSubmitted(): void;
}

const initialState: SearchState = {
    city: "",
    isSubmitted: false,
    setCity: (city: string) => {},
    setIsSubmitted: () => {},
}


export const SearchContext = React.createContext(initialState);
