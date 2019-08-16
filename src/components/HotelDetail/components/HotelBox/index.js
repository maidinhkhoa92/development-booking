import React from 'react';
import AnchorScroll from './AnchorScroll';
import Rooms from './Rooms';
import Description from './Description';
import Amenities from './Amenities';
import Nearest from './Nearest';
import HelpInfo from './HelpInfo';

const HotelBox = () => {
    return (
        <div className="main-hotel-box">
            <AnchorScroll />
            <div className="sub-hotel-block">
                <Rooms />
                <Description />
                <Amenities />
                <HelpInfo />
                <Nearest />
            </div>
        </div>
    )
};

export default HotelBox;