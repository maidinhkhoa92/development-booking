import React from 'react';
import {ClearFilter, SearchBed, SearchName, SearchPrice, SearchRating, SearchServices, SearchType} from 'components';

const Sidebar = () => {
    return (
        <div className="col-sm-3 col-md-3 col-xs-12 filters-container toggle-container">
            <ClearFilter />
            <SearchName />
            <SearchPrice />
            <SearchRating />
            <SearchBed />
            <SearchServices />
            <SearchType />
        </div>
    )
}

export default Sidebar;