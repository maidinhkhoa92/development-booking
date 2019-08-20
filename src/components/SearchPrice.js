import React from 'react';

const SearchPrice = () => {
    return (
        <div className="toggle-container filters-container display">
            <div className="panel style1 arrow-right">
                <h4 className="panel-title">
                    <a href="#price-filter">Price</a>
                </h4>
                <div id="price-filter">
                    <div className="panel-content" id="priceFilter">
                        <div id="price-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                            <span className="ui-slider-handle ui-state-default ui-corner-all"/>
                        </div>
                        <br />
                        <span className="min-price-label pull-left">USD 5</span>
                        <span className="max-price-label pull-right">USD 432</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPrice;
