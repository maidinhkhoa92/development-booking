import React from 'react';

const Form = () => {
    return (
        <form method="GET" name="bus_search" id="bus_search_change" autoComplete="off" >
                  <div className="col-md-12 col-xs-12 dos-int-btn">
                    <input type="button" defaultValue="One Way" className="dflight-btn" />
                    <input type="button" defaultValue="One Way" className="dflight-btn-none"/>
                    <input type="button" defaultValue="Round Trip" className="iflight-btn" />
                    <input type="button" defaultValue="Round Trip" className="iflight-btn-none"/>
                  </div>
                  <div className="bus-where clearfix">
                    <div className="col-md-5 col-sm-5 col-xs-12 bus-from">
                      <label>
                        From
                      </label>
                      <input type="text" placeholder="Please Enter Origin" id="departure_loc_def" className="form-control bus-icon-input ui-autocomplete-input" name="departure_loc_def"  autoComplete="off"/>
                    </div>
                    <div className="bus-from-auto-box">
                      <ul className="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id="ui-id-1" tabIndex="0" ></ul>
                    </div>
                  
                  <div className="col-md-2 col-sm-2 arrow-blue-box">
                    <img src="images/oneway_arrow.png" className="arrow-blue hidden" alt="One Way Arrow" />
                    <img src="images/oway_icon_from_to_arrow_blue.png" className="arrow-blue" alt="Round Trip Arrow"/>
                  </div>
                  <div className="col-md-5 col-sm-5 col-xs-12 bus-to" id="arr_cities_holder">
                    <label>
                      To
                    </label>
                    <input type="text" id="arrival_loc_def" className="form-control bus-icon-input ui-autocomplete-input" name="arrival_loc_def"  placeholder="Please Enter Destination" autoComplete="off"/>  
                  </div>
                  </div>

                  <div className="round-trip">
                    <div className="col-md-4 col-sm-4 col-xs-12">
                      <label>Depart Date</label>
                      <input type="text" placeholder="mm/dd/yy" id="bus_ticket_date1" className="form-control calendar-icon-input hasDatepicker" readOnly="readOnly"/>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                      <label>Return Date</label>
                      <input type="text" placeholder="mm/dd/yy" id="bus_return_date1" className="form-control calendar-icon-input hasDatepicker" readOnly="readOnly"/>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-12">
                      <label className="slabel">
                        Adult       </label>
                      <div className="selector">
                        <select name="bus_adults_round" id="bus_adults_round" tabIndex="4" className="full-width">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-12">
                      <label className="slabel">
                        Child       </label>
                      <div className="selector" id="child">
                        <select name="bus_child_round" id="bus_child_round" tabIndex="4" className="full-width">
                          <option value="0" >
                            0           </option>
                          <option value="1">
                            1           </option>
                          <option value="2">
                            2           </option>
                          <option value="3">
                            3           </option>
                          <option value="4">
                            4           </option>
                          <option value="5">
                            5           </option>
                          <option value="6">
                            6           </option>
                          <option value="7">
                            7           </option>
                          <option value="8">
                            8           </option>
                          <option value="9">
                            9           </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="foreigner-check pull-left">
                    <span>
                      <input type="radio" name="citizen" defaultValue="foreigner" rel="ntf" /> 
                      Foreigner
                    </span>
                    <span>
                      <input type="radio" name="citizen" defaultValue="myanmar" rel="ntl" className="myanmar-citizin-radio"/>
                      Myanmar Citizen 
                    </span>
                  </div>
                  <div className="search-btn-bus pull-right">
                    <input id="search-buses" className="search-icon-input" type="button" defaultValue="Search"/>
                  </div>
                </form>
    )
}
export default Form;