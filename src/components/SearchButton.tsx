import * as React from 'react';
import styled from '@emotion/styled'
import {SearchContext, SearchState} from "./SearchContext";


const Button = styled.button`
width: 100%;
color: dark;
padding: 14px 20px;
margin: 8px 0;
border: none;
border-radius: 4px;
cursor: pointer;
&:disabled {
    cursor: not-allowed;
    color: dark-gray;
}
`


export const SearchButton: React.FC = (): React.ReactElement => {
    const {city, setIsSubmitted}: SearchState = React.useContext(SearchContext);
    const isDisabled: boolean = React.useMemo((): boolean => {
        return city === "";
    }, [city])
    return (<Button onClick={setIsSubmitted} disabled={isDisabled}>Search</Button>)
}


