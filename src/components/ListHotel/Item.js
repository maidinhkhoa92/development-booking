import React from 'react';

const Item = ({item, onClick}) => {
    const params = {
        ResultIndex: item.ResultIndex,
        HotelCode: item.HotelCode
    }
    return (
        <article className="listing-grid hotel hotel-available">
            <div className="photo-grid">
                <div className="hotel-deal-promo-box"></div>
                <div className="hotel-recommend"></div>
                <img src={item.HotelPicture} className="img-responsive list-hotel"/>
            </div>
            <div className="hotel-info-container listing-right">
                <div className="info-grid">
                    <div className="pull-left hotel-info">
                        <h3 className="title">
                            {item.HotelName}
                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                        </h3>
                        <span className="address">
                            <img data-toggle="modal" data-target="#1617" src="images/icon-location.png" width="20px" alt="Hotel Map" />
                            {item.HotelAddress}
                        </span>
                        <ul>
                            <li>
                                <img src="https://cdn.owaytrip.com/extranet/amenities/1528562515.png" alt="Air Conditioning" />
                            </li>
                        </ul>
                        <div className="payment-noti"></div>
                    </div>
                </div>
                <div className="select-grid">
                    <span className="start-from">Starting From</span>
                    <div className="price-box">
                        <span className="common-price">{item.TotalPrice + " " + item.HotelAddress}</span>
                        <span> per night / room</span>
                        <a onClick={() => {onClick(params)}} className="btn orange-btn" title="Select Hotel">Select</a>
                    </div>
                </div>
            </div>
        </article>
    )
}
export default Item;