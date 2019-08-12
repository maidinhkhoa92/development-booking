import React from 'react';

const Form = () => {
    return (
        <form method="GET" name="int_flight_search" id="int_flight_search_change" autoComplete="off">
                  <div className="col-md-12 dos-int-btn clearfix">
                    <input type="button" defaultValue="One Way" className="dflight-btn" />
                    <input type="hidden" defaultValue="1" name="one-way" id="one-way"/>
                    <input type="button" defaultValue="One Way" className="dflight-btn-none" />
                    <input type="button" defaultValue="Round Trip" className="iflight-btn" />
                    <input type="hidden"  name="round-trip" id="round-trip"/>
                    <input type="button" defaultValue="Round Trip" className="iflight-btn-none" />
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6 nolpadding flight-form">
                    <label>From</label>
                    <input className="form-control depart-from ui-autocomplete-input" id="from-city" name="from-city" placeholder="Please Enter Origin" type="text" autoComplete="off"/>
                    <div className="flight-auto-box"><ul className="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id="ui-id-3" tabIndex="0" ></ul></div>
                  </div>
                  <div className="col-md-1 col-sm-1 trip-round-icon">
                    <img src="images/oway_icon_from_to_arrow_blue.png" width="40px" className=" round-icon" alt="Round Trip Arrow" />
                    <img src="images/oneway_arrow.png" width="40px" className="no-display oneway-icon" alt="One Way Arrow" />
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6 nolpadding flight-to">
                    <label>To</label>
                    <input className="form-control arrive-from ui-autocomplete-input" id="to-city" name="to-city" placeholder="Please Enter Destination" type="text" autoComplete="off"/>
                    <div className="flight-to-auto-box">
                      <ul className="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id="ui-id-4" tabIndex="0" ></ul>
                    </div>
                  </div>
                  <div className="oneway-date">
                    <div className="col-md-6 col-xs-12 col-sm-6">
                      <label>Depart Date</label>
                      <input name="checkin_date" id="int_checkin_date" className="form-control calendar-icon-input hasDatepicker" readOnly="readOnly" placeholder="dd/mm/yy" type="text"/>
                    </div>
                    <div className="col-md-6 col-xs-12 col-sm-6  round-date">
                      <label>Return Date</label>
                      <input readOnly="readOnly" name="checkout_date" id="int_checkout_date" className="form-control calendar-icon-input hasDatepicker" placeholder="dd/mm/yy" type="text"/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 nolpadding traveler-box">
                      <label>Travelers</label>
                      <input id="travel-count" className="input-text full-width  traveler" name="traveler_count" type="text" defaultValue="1 Adult(s), 0 Child(s), 0 Infant(s)" placeholder="" readOnly=""/>
                      <div className="flight-auto-box"></div>
                      <div id="travel-edit"  className="travel-edit-box">
                        <div className="type-keyword col-xs-12">
                          <span className="col-xs-11">Add Traveler</span>
                          <span className="glyphicon glyphicon-remove drop-down-icon col-xs-1" aria-hidden="true"></span>
                        </div>
                        <div className="inner-select-box"></div>
                        <div className="" ><span className="adult-value">1 Adult(s)</span><span className="child-value">0 Child(s)</span><span className="infant-value">0 Infant(s)</span></div>
                        <div id="guest-box">
                          <ul className="traveler-increase-decrease">
                            <li>
                              <span className="person">Adult</span>
                              <span id="person-decrease" type="button">-</span>
                              <div id="person-no">1</div>
                              <span id="person-increase" type="button" className="count-active">+</span>
                            </li>
                            <li>
                              <span className="child">Child (2-12)</span>
                              <span id="child-decrease" type="button">-</span>
                              <div id="child-no">0</div>
                              <span id="child-increase" type="button" className="count-active">+</span>
                            </li>
                            <li>
                              <span className="infant">Infant (0-2)</span>
                              <span id="infant-decrease" type="button">-</span>
                              <div id="infant-no">0</div>
                              <span id="infant-increase" type="button" className="count-active">+</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12 col-sm-6 infant">
                      <label>Class</label>
                      <div className="selector">
                        <select name="cabin_class" id="cabin_class" defaultValue="Y">
                          <option value="Y">Economy</option>
                          <option value="W">Premium Economy</option>
                          <option value="C">Business</option>
                          <option value="F">First</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="pull-left foreigner-check">
                    <span>
                      <input type="radio" name="flightcitizien" defaultValue="foreigner"  className="radio-citizin"/>
                      Foreigner
                    </span>
                    <span>
                      <input type="radio" name="flightcitizien" defaultValue="myanmar" className="myanmar-citizin-radio radio-citizin"/>
                      Myanmar Citizen
                    </span>
                  </div>
                  <div className="search-btn-flight pull-right">
                      <input id="flight_select_submit" className="search-icon-input" type="button" defaultValue="Search"/>
                  </div>
                </form>  
    )
}
export default Form;