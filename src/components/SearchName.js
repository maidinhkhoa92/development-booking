import React from 'react';

const SearchName = () => {
    return (
        <div className="panel style1 arrow-right">
            <h4 className="panel-title">
                <a href="#hotel-name">Search By Hotel Name</a>
            </h4>
            <div id="hotel-name">
                <div className="panel-content">
                    <div className="form-group">
                        <form method="get" name="hotel_search1" id="hotel_search1">
                            <input name="HotelName" id="HotelName" className="input-text full-width" placeholder="Type Hotel Name Here" type="text" />
                        </form>
                    </div>
                    <div className="text-center">
                        <button id="search-hotel-by-name" className="search-icon-input">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchName;