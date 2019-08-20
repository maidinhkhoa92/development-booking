import React from 'react';

const Room = () => {
    return (
        <div className="full-block room-detail-info">
            <div className="table-cell room-photo">
                <div className="hotel-deal-promo-box">
                </div>
                <img src="https://cdn.owaytrip.com/extranet/hotelrooms-image/15658677591.jpg" className="img-responsive list-hotel"/>
            </div>
            <div className="table-cell room-info">
                <div className="col-md-12 spadding room-type">
                    Superior Double Room                     
                    <a className="see-photo" href="#">See Photos</a>
                </div>
                <div className="col-md-12 spadding">
                    <span className="room-option">
                        <img src="https://oway.com.mm/images/icon/2017/icon-room-square.png"/>
                        200.2 sqft sq.ft                    
                    </span>
                    <span className="room-option">
                        <img src="https://oway.com.mm/images/icon/2017/icon-bed.png"/>
                        1 Double Bed                    
                    </span>
                </div>
            </div>
            <div className="full-block spadding avg-price-table">
                <div className="table-cell text-center max">Max </div>
                <div className="table-cell text-center facility">Facilities </div>
                <div className="table-cell text-center policy">What's included  </div>
                <div className="table-cell text-center room">Room   </div>
                <div className="table-cell text-center bed">Bed </div>
                <div className="table-cell text-center avg-price">Average Price Per Room</div>
            </div>
            <div className="full-block avg-price-tbody">
                <div className="table-cell text-center max">
                    <div className="max-adult">
                        2 x <img src="https://oway.com.mm/images/icon/2017/icon-guest.png"/>
                        Adult(s)
                    </div>
                    <div className="max-child">
                        0 x <img src="https://oway.com.mm/images/icon/2017/icon-guest.png"/>
                        Child(s)
                    </div>
                </div>
                <div className="table-cell facility">
                    <div id="facility-content" className="facility-content">
                        <ul className="facility-item-height">
                            <li className="facility-item">
                                <img src="https://cdn.owaytrip.com/extranet/amenities/1528562466.png"/>
                                Air Conditioning
                            </li>
                            <li className="facility-item">
                                <img src="https://cdn.owaytrip.com/extranet/amenities/1528562423.png"/>
                                Dryer
                            </li>
                            <li className="facility-item">
                                <img src="https://cdn.owaytrip.com/extranet/amenities/1528562142.png"/>
                                Safe
                            </li>
                        </ul>
                        <div className="facility-show-less">
                            <a className="more" href="#">more</a>
                            <a className="less" href="#">less</a>
                        </div>
                    </div>
                </div>
                <div className="table-cell policy">
                    <div id="policy-content" className="policy-content">
                        <ul>
                            <li>Standard</li>
                            <li>
                                Breakfast
                            </li>
                            <li>
                                <div className="relative">
                                    <div className="cancellation-tooltip">
                                        <div className="arrow-bottom">
                                            <div className="cancellation-desc">
                                                <div>
                                                    <i className="fa fa-close cancellation-close" aria-hidden="true"></i>
                                                    <div>If cancel or modify -</div>
                                                    <ul>
                                                        <li>up to
                                                            <span className="orange-color">
                                                                4                                                            </span> day(s) before arrival, no fee will be charged.
                                                        </li>
                                                        <li>within
                                                            <span className="orange-color">
                                                                3                                                            </span> day(s) before arrival,
                                                            <span className="orange-color">
                                                                50 %
                                                            </span> of total reservation price will be charged.
                                                        </li>
                                                        <li>within
                                                            <span className="orange-color">
                                                                1                                                            </span> day(s) before arrival or no show,
                                                            <span className="orange-color">
                                                                100 %
                                                            </span> of total reservation price will be charged.
                                                        </li>
                                                    </ul>
                                                    <div>*** Bank processing fees and taxes &amp; fees are non-refundable.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cancellation-text">Cancellation Policy </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="table-cell text-center room selector">
                    <span className="room-none">Select Room</span>
                    <select className="form-control reserve-control reserve-rate" id="no-of-rooms-24378">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="table-cell text-center bed selector">
                    <div className="hidden-xs">
                        1 Double Bed                    
                    </div>
                </div>
                <div className="table-cell text-center avg-price">
                    <div className="room-price">
                        <span className="common-price" id="avg-price-per-room">USD 48.40</span>
                        <span> per night / room </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Room;