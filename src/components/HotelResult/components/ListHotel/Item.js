import React from 'react';

const Item = () => {
    return (
        <article className="listing-grid hotel hotel-available">
            <div className="photo-grid">
                <div className="hotel-deal-promo-box"></div>
                <div className="hotel-recommend"></div>
                <img src="https://cdn.owaytrip.com/extranet/hotels/15519477151.jpg" className="img-responsive list-hotel"/>
            </div>
            <div className="hotel-info-container listing-right">
                <div className="info-grid">
                    <div className="pull-left hotel-info">
                        <h3 className="title">
                            Hostel Latha
                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                        </h3>
                        <span className="address">
                            <img data-toggle="modal" data-target="#1617" src="images/icon-location.png" width="20px" alt="Hotel Map" />
                            Latha  (Central Yangon), Yangon
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
                        <span className="common-price">USD 5.00</span>
                        <span> per night / room</span>
                        <a href="#" className="btn orange-btn" title="Select Hotel">Select</a>
                    </div>
                </div>
            </div>
        </article>
    )
}
export default Item;