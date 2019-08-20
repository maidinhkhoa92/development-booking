import React from 'react';

const TotalSearch = () => {
    return (
        <div className="total-search-box">
            <div className="search-result">
                <img src="/images/icon_search_gray.png" alt="Search Result" />
                Total Search Result: <span id="total-hotels-count">22 Found(s)</span>
            </div>

            <div className="book-online">
                Book online or call: 
                <span className="book-phone"><a href="tel:+9512318939">(+95) 1 231 8939</a></span>
            </div>
        </div>
    )
}

export default TotalSearch;