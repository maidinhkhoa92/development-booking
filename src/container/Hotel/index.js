import React from 'react';
import Sidebar from './SideBar';
import Result from './Result';

class HotelList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div id="content" className="mobile-view hotel-listing">
                <div className="container">
                    <div className="row">
                        <Sidebar />
                        <Result />
                    </div>
                </div>
            </div>
        )
    }
}

export default HotelList;