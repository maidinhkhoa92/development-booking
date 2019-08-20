import React from 'react';

const Item = () => {
    return (
        <div className="detail-reserve-item">
            <div className="d-flex">
                <span className="reserve-list">1 x Superior Double Room (s)</span>
                <span className="reserve-room-price">USD 48.40</span>
            </div>
        </div>
    )
}

const ListChoose = () => {
    return (
        <React.Fragment>
            <div className="spadding reserve-title text-center">Reservation</div>
            <div id="reservation-rooms" className="detail-reserve-block">
                <Item />
                <Item />
                <Item />
            </div>
            <div id="reservation-summary" className="room-night-bed">
                1 Room(s) x 1 Night(s),  for<br />
                <span className="reserve-price">USD 48.40</span>
            </div>
            <div className="detail-reserve-block-no">
                <span className="no-booking">Click to reserve. No fees will be charged!</span>
            </div>
            <div className="reserve-btn text-center reserve-btn-desktop">
                <a className="reservation-confirm btn btn-default orange-btn smargin"> Confirm </a>
                <p className="error err_msg"></p>
            </div>
        </React.Fragment>
    )
}

export default ListChoose;