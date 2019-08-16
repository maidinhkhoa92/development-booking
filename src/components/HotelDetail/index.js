import React from 'react';
import { TotalSearch, SearchFilter } from 'components/HotelResult/components';
import { HotelPrice, HotelBox, DetailAmeni } from './components';

const HotelDetail = () => {
    return (
        <div className="col-sm-12 col-md-12 col-xs-12">
            <TotalSearch />
            <SearchFilter />
            <HotelPrice />
            <DetailAmeni />
            <HotelBox />
        </div>
    )
};

export default HotelDetail;