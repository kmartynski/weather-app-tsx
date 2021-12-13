import * as React from 'react';
import {SearchResult} from "./SearchResult";
import {SearchContext, SearchState} from "./SearchContext";


export const ResultSection: React.FC = (): React.ReactElement => {
    const {isSubmitted}: SearchState = React.useContext(SearchContext);
    if (!isSubmitted) {
        return null
    }
    return (
        <SearchResult />
    )
}


