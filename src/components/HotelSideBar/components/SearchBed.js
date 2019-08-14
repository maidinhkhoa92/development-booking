import React from 'react';

const SearchBed = () => {
    return (
        <div className="panel style1 arrow-right">
            <h4 className="panel-title">
                <a href="#bed-type">
                    Bed Type
                </a>
            </h4>
            <div id="bed-type">
                <div className="panel-content">
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="bed-type" className="bed-type-filter" value="Single Bed" />
                            Single Bed                                        
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="bed-type" className="bed-type-filter" value="Double Bed" />
                            Double Bed                                        
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="bed-type" className="bed-type-filter" value="Twin Bed" />
                            Twin Bed                                        
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" id="bed-type" className="bed-type-filter" value="Bulk Bed" />
                            Bulk Bed                                        
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBed;