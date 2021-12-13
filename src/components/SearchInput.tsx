import * as React from 'react';
import styled from '@emotion/styled'
import {SearchContext, SearchState} from "./SearchContext";


const Input = styled.input`
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`


export const SearchInput: React.FC = (): React.ReactElement => {
    const {setCity}: SearchState = React.useContext(SearchContext)
    return (<Input onChange={(event) => setCity(event.target.value)} placeholder="Check weather for a city:" />)
}


