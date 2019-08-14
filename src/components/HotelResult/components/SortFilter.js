import React from 'react';

const SortFilter = () => {
    return (
        <div className="tab-container sort-desktop">
            <ul className="tabs tab-bg" id="sortable">
                <div className="sortby">Sort By:</div>
                <a className="sortby" title="sortby Recommended" >
                    <div className="top_info by-rank">
                        <div className="arrow-down">
                            Recommended
                            <i className="fa fa-arrow-up" aria-hidden="true"></i>
                        </div>
                        <div className="arrow-up">
                            Recommended
                            <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        </div>
                    </div>
                </a>
                <a className="sortby" title="sortby Price" >
                    <div className="top_info by-price">
                        <div className="arrow-down" >
                            Price
                            <i className="fa fa-arrow-up" aria-hidden="true"></i>
                        </div>
                        <div className="arrow-up" >
                            Price
                            <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        </div>
                    </div>
                </a>
                <a className="sortby" title="sortby Deals">
                    <div className="top_info by-deals">
                        <div className="arrow-down">
                            Deals
                            <i className="fa fa-arrow-up" aria-hidden="true"></i>
                        </div>
                        <div className="arrow-up">
                            Deals
                            <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        </div>
                    </div>

                </a>
                <a className="sortby" title="sortby Star Rating">
                    <div className="top_info by-rating">
                        <div className="arrow-down">
                            Stars
                            <i className="fa fa-arrow-up" aria-hidden="true"></i>
                        </div>
                        <div className="arrow-up">
                            Stars
                            <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        </div>
                    </div>
                </a>
            </ul>
        </div>
    )
}

export default SortFilter;