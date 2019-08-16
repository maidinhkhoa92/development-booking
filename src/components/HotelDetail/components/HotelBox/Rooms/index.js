import React from 'react';
import Room from './Room';
import ListChoose from './ListChoose';

const Rooms = () => {
    return (
        <section id="rooms" className="margin outer-block">
            <div className="left-div">
                <Room />
            </div>
            <div className="right-div detail-reserve hidden-xs">
                <ListChoose />
            </div>
        </section>    
    )
}
export default Rooms;