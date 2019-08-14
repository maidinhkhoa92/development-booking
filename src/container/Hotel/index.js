import React from 'react';
import {HotelSidebar, HotelResult} from 'components';

class HotelList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div id="content" className="mobile-view hotel-listing">
                <div className="container">
                    <div className="row">
                        <HotelSidebar />
                        <HotelResult />
                    </div>
                </div>
            </div>
        )
    }
}

export default HotelList;