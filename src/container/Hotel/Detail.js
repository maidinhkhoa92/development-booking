import React from 'react';
import HotelDetail from 'components/HotelDetail'; 

class HotelDetailContainer extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div id="content" className="mobile-view hotel-detail">
                <div className="container">
                    <div className="row">
                        <HotelDetail />
                    </div>
                </div>
            </div>
        )
    }
}

export default HotelDetailContainer;