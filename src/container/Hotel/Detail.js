import React from 'react';
import {HotelSidebar} from 'components';

class HotelDetail extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div id="content" class="mobile-view hotel-listing">
                <div class="container">
                    <div class="row">
                        <HotelSidebar />
                    </div>
                </div>
            </div>
        )
    }
}

export default HotelDetail;