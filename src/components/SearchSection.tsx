import * as React from 'react';
import styled from '@emotion/styled';
import {SearchButton} from "./SearchButton";
import {SearchInput} from "./SearchInput";


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 100%;
row-gap: 15px;
`


export const SearchSection: React.FC = (): React.ReactElement => {
    return (
    <Container>
        <SearchInput />
        <SearchButton />
    </Container>
    )   
}


