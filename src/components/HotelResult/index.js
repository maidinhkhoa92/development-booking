import React from 'react';
import {TotalSearch, SearchFilter, SortFilter, ListHotel} from './components';

class HotelResult extends React.Component {
    render() {
        return (
            <div className="col-sm-9 col-md-9 col-xs-12 lh right-content">
                <TotalSearch />
                <SearchFilter />
                <div className="hotel-hd">
                    <h2>Select your Hotel in <span className="blue-color">Yangon, Myanmar</span></h2>
                </div>
                <SortFilter />
                <ListHotel />
            </div>
        )
    }
}

export default HotelResult;