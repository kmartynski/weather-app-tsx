import * as React from 'react';
import styled from '@emotion/styled';
import {SearchSection} from "./SearchSection";
import {ResultSection} from "./ResultSection";
import {SearchContext} from "./SearchContext";

const Container = styled.div`
margin: 0 auto;
padding: 200px 300px;
box-sizing: border-box;
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
row-gap: 20%;
`;


export const Page: React.FC = (): React.ReactElement => {
    const [city, changeCity] = React.useState("");
    const setCity = (city: string) => {
        changeCity(city);
    }
    const [isSubmitted, changeIsSubmitted] = React.useState(false);
    const setIsSubmitted = () => changeIsSubmitted(true) 

    return (
    <Container>
        <SearchContext.Provider value={{city, isSubmitted, setCity, setIsSubmitted}}>
            <SearchSection />
            <ResultSection />
        </SearchContext.Provider>
    </Container>
    );
}