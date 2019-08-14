import React from 'react';

const SearchType = () => {
    return (
        <div className="panel style1 arrow-right">
            <h3 className="panel-title">
                <a href="#hotel-type">
                    Hotel Type
                </a>
            </h3>
            <div id="hotel-type">
                <div className="panel-content">
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="hotel-type" className="hotel-type-filter" value="Bed and Breakfast" />
                            Bed and Breakfast
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="hotel-type" className="hotel-type-filter" value="Guest House" />
                            Guest House
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="hotel-type" className="hotel-type-filter" value="Hostel" />
                            Hostel
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="hotel-type" className="hotel-type-filter" value="Hotel" />
                            Hotel
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="hotel-type" className="hotel-type-filter" value="Inn" />
                            Inn
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="hotel-type" className="hotel-type-filter" value="Motel" />
                            Motel
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="hotel-type" className="hotel-type-filter" value="On Request" />
                            On Request
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="hotel-type" className="hotel-type-filter" value="Service Apartment" />
                            Service Apartment
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchType;
