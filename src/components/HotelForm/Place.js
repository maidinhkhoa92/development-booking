import React from 'react';
import {Loading} from 'components';
import _ from 'lodash';

const Place = ({loading, list, setParams, setToggle}) => {
    return (
        <div className="select2-results" id="select_city_hotel">
            <div className="type-keyword col-xs-12">
                <span className="col-xs-11">Type in keywords to search or select from below: </span>
                <i class="fas fa-times drop-down-icon"></i>
            </div>
            <div className="tab-container full-width-style white-bg">
                { 
                    loading ? 
                    <Loading /> 
                    : 
                    <div className="tab-content">
                        <div className="tab-pane fade search-hotel" id="hotel-city-tab4" >
                            <div className="row">
                            {
                                _.map(list, (item, key) => {
                                    const params = {
                                        CountryName: item.countryname,
                                        CityName: item.cityname,
                                        CityId: item.citycode,
                                        GuestNationality: item.countrycode
                                    }
                                    return (
                                        <div key={key} className={key%2 === 0 ? "col-md-6 col-sm-12 r-border":"col-md-6 col-sm-12"}>
                                            <div 
                                                className="city-hotel" 
                                                onClick={() => {setParams(params); setToggle('place', false);}}
                                            >
                                                <span className="city"> {item.cityname}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default Place;