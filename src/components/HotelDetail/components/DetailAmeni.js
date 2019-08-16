import React from 'react';

const DetailAmeni = () => {
    return (
        <div className="spadding detail-ameni-intro d-flex">
            <div className="col-md-2 col-sm-3 col-xs-4">
                <div className="detail-amenity-icon">
                    <img src="https://cdn.owaytrip.com/extranet/amenities/1528567948.png" alt="Hotel Amenities" />
                </div>
                <div className="detail-amenity-list oneLine">
                    Restaurant
                </div>
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4">
                <div className="detail-amenity-icon">
                    <img src="https://cdn.owaytrip.com/extranet/amenities/1528566141.png" alt="Hotel Amenities" />
                </div>
                <div className="detail-amenity-list oneLine">
                    Room Service
                </div>
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4">
                <div className="detail-amenity-icon">
                    <img src="https://cdn.owaytrip.com/extranet/amenities/1528565280.png" alt="Hotel Amenities" />
                </div>
                <div className="detail-amenity-list oneLine">
                    24-Hour Front Desk
                </div>
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4">
                <div className="detail-amenity-icon">
                    <img src="https://cdn.owaytrip.com/extranet/amenities/1528563885.png" alt="Hotel Amenities" />
                </div>
                <div className="detail-amenity-list oneLine">
                    Ticket Service
                </div>
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4">
                <div className="detail-amenity-icon">
                    <img src="https://cdn.owaytrip.com/extranet/amenities/1528563591.png" alt="Hotel Amenities" />
                </div>
                <div className="detail-amenity-list oneLine">
                    Baggage Storage
                </div>
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4 align-self-center">
                <a href="#amenities" className="amenity-more" title="Amenity More">more</a>
            </div>
        </div>
    )
};

export default DetailAmeni;