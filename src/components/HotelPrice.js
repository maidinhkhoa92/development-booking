import React from 'react';

const HotelPrice = () => {
    return (
        <div class="col-sm-12 detail-name-price no-padding">
            <div className="row">
                <div className="col-sm-9 left-div">
                    <div className="pull-left name-address">
                        <div className="pull-left name-address-block">
                            <h1 className="hotel-name">
                                Shwe Htee River View
                                <div className="star-block">
                                    <span className="glyphicon glyphicon-star detail-star">
                                    </span>
                                    <span className="glyphicon glyphicon-star detail-star">
                                    </span>
                                </div>
                            </h1>
                            <span className="detail-address">
                                <img src="https://oway.com.mm/images/icon/2017/icon-location.png" alt="Hotel Map" width="20px" />
                                No.636/638, Strand Road, Lanmadaw Township, Yangon, Myanmar. The hotel is strategically located at downtown Yangon,Myanmar.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 right-div detail-price">
                    <span className="start-from">Starting From</span>
                    <span className="discount-price"></span>
                    <span className="main-price">USD 48.40</span>
                    <span> per night / room </span>
                </div>
            </div>
        </div>
    )
}

export default HotelPrice;