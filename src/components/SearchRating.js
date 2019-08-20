import React from 'react';

const SearchRating = () => {
    return (
        <div className="panel style1 arrow-right">
            <h3 className="panel-title">
                <a href="#star-rating">Star Rating</a>
            </h3>
            <div id="star-rating">
                <div className="panel-content" id="starRatingFilter">
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="star-rating" className="star-rating-filter" value="1" />
                            <img src="/images/icon-star-rating.png" alt="Hotel Star Rating" />
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="star-rating" className="star-rating-filter" value="2" />
                            <img src="/images/icon-star-rating.png" alt="Hotel Star Rating" />
                            <img src="/images/icon-star-rating.png" alt="Hotel Star Rating" />
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="star-rating" className="star-rating-filter" value="3" />
                            <img src="/images/icon-star-rating.png" alt="Hotel Star Rating" />
                            <img src="/images/icon-star-rating.png" alt="Hotel Star Rating" />
                            <img src="/images/icon-star-rating.png" alt="Hotel Star Rating" />
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="star-rating" className="star-rating-filter" value="4" />
                            <img src="/images/icon-star-rating.png" alt="Hotel Star Rating" />
                            <img src="/images/icon-star-rating.png" alt="Hotel Star Rating" />
                            <img src="/images/icon-star-rating.png" alt="Hotel Star Rating" />
                            <img src="/images/icon-star-rating.png" alt="Hotel Star Rating" />
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="star-rating" className="star-rating-filter" value="5" />
                            <img src="/images/icon-star-rating.png" alt="Hotel Star Rating" />
                            <img src="/images/icon-star-rating.png" alt="Hotel Star Rating" />
                            <img src="/images/icon-star-rating.png" alt="Hotel Star Rating" />
                            <img src="/images/icon-star-rating.png" alt="Hotel Star Rating" />
                            <img src="/images/icon-star-rating.png" alt="Hotel Star Rating" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchRating;

