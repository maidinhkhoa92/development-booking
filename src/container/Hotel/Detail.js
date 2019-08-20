import React from 'react';
import { HotelPrice, HotelBox, DetailAmeni, TotalSearch, SearchFilter } from 'components';

class HotelDetailContainer extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div id="content" className="mobile-view hotel-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-xs-12">
                            <TotalSearch />
                            <SearchFilter />
                            <HotelPrice />
                            <DetailAmeni />
                            <HotelBox />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HotelDetailContainer;