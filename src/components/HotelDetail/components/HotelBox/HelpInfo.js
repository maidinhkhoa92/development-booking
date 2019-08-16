import React from 'react';

const HelpInfo = () => {
    return (
        <section id="help-info" className="margin outer-block">
            <h3>Helpful Info</h3>
            <div className="inner-block">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <img src="https://oway.com.mm/images/icon/2017/icon-checkin-from.png" alt="Hotel Amenities" />
                        Check-in from: <span>
                            14:00
                                                    </span>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <img src="https://oway.com.mm/images/icon/2017/icon-checkin-from.png" alt="Hotel Amenities" />
                        Check-in to: <span>
                            14:00
                                                    </span>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <img src="https://oway.com.mm/images/icon/2017/icon-valet-parking.png" alt="Hotel Amenities" />
                        Parking Available: <span>Free , Reservation Not Needed</span>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <img src="https://oway.com.mm/images/icon/2017/icon-checkin-from.png" alt="Hotel Amenities" />
                        Check-out from: <span>12:00</span>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <img src="https://oway.com.mm/images/icon/2017/icon-checkin-from.png" alt="Hotel Amenities" />
                        Check-out to: <span>12:00</span>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <img src="https://oway.com.mm/images/icon/2017/icon-language.png" alt="Hotel Amenities" />
                        Language spoken by staff: <span>English, Burmese</span>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <img src="https://oway.com.mm/images/icon/2017/icon-pet.png" alt="Hotel Amenities" />
                        Pets: <span>1</span>
                    </div>
                </div>
            </div>
            <div className="more-less hidden">
                <a className="show-more" title="Helpful Info"><i className="fa fa-caret-down"></i>show more</a>
                <a className="show-less" title="Helpful Info"><i className="fa fa-caret-up"></i>show less</a>
            </div>
        </section>
    )
}

export default HelpInfo;