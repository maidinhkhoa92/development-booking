import React from 'react';

const SearchServices = () => {
    return (
        <div className="panel style1 arrow-right">
            <h3 className="panel-title">
                <a href="#amenities">
                    Amenities/Facilities
                </a>
            </h3>
            <div id="amenities">
                <div className="panel-content">
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="amenities" className="amenity-filter" value="51" />
                            <img src="https://cdn.owaytrip.com/extranet/amenities/1528565280.png" alt="Hotel Amenities" />
                            24-Hour Front Desk                                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="amenities" className="amenity-filter" value="101" />
                            <img src="https://cdn.owaytrip.com/extranet/amenities/1528562515.png" alt="Hotel Amenities" />
                            Air Conditioning
                                    </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="amenities" className="amenity-filter" value="45" />
                            <img src="https://cdn.owaytrip.com/extranet/amenities/1528565579.png" alt="Hotel Amenities" />
                            Airport Shuttle (free)                                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="amenities" className="amenity-filter" value="60" />
                            <img src="https://cdn.owaytrip.com/extranet/amenities/1528563591.png" alt="Hotel Amenities" />
                            Baggage Storage
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="amenities" className="amenity-filter" value="87" />
                            <img src="https://cdn.owaytrip.com/extranet/amenities/1528563053.png" alt="Hotel Amenities" />
                            Business Center
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="amenities" className="amenity-filter" value="54" />
                            <img src="https://cdn.owaytrip.com/extranet/amenities/1528563900.png" alt="Hotel Amenities" />
                            Concierge Service
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="amenities" className="amenity-filter" value="31" />
                            <img src="https://cdn.owaytrip.com/extranet/amenities/1528564023.png" alt="Hotel Amenities" />
                            Indoor Pool
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="amenities" className="amenity-filter" value="34" />
                            <img src="https://cdn.owaytrip.com/extranet/amenities/1528566027.png" alt="Hotel Amenities" />
                            Outdoor Pool
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="amenities" className="amenity-filter" value="19" />
                            <img src="https://cdn.owaytrip.com/extranet/amenities/1528567948.png" alt="Hotel Amenities" />
                            Restaurant
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="amenities" className="amenity-filter" value="137" />
                            <img src="https://cdn.owaytrip.com/extranet/amenities/1531132393.png" alt="Hotel Amenities" />
                            Wifi                                        
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchServices;