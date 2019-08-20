import React from 'react';
import DatePicker from "react-datepicker";

class FlightForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        CheckinDate: new Date(),
        CheckoutDate: new Date(),
        NoOfRooms: 1,
        AdultCount: 1,
        ChildCount: 0,
        ChildAge: '0',
        OrderBy: 'PriceAsc'
      },
    }
  }
  render() {
    const { params } = this.state;
    return (
      <form method="GET" name="int_flight_search" id="int_flight_search_change">
        <div className="col-md-12 dos-int-btn clearfix">
          <input type="button" defaultValue="One Way" className="dflight-btn" />
          <input type="button" defaultValue="Round Trip" className="iflight-btn" />
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6 nolpadding flight-form">
          <label>From</label>
          <input className="form-control depart-from ui-autocomplete-input" id="from-city" placeholder="Please Enter Origin" type="text" />
        </div>
        <div className="col-md-1 col-sm-1 trip-round-icon">
          <img src="/images/oway_icon_from_to_arrow_blue.png" className=" round-icon"/>
          <img src="/images/oneway_arrow.png" className="no-display oneway-icon"/>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6 nolpadding flight-to">
          <label>To</label>
          <input className="form-control arrive-from ui-autocomplete-input" id="to-city" placeholder="Please Enter Destination" type="text"/>
        </div>
        <div className="oneway-date">
          <div className="col-md-6 col-xs-12 col-sm-6">
            <label>Depart Date</label>
            <DatePicker
              selected={params.CheckinDate}
              onChange={e => { this.setParams({CheckinDate: e}) }}
            />
          </div>
          <div className="col-md-6 col-xs-12 col-sm-6  round-date">
            <label>Return Date</label>
            <DatePicker
              selected={params.CheckinDate}
              onChange={e => { this.setParams({CheckinDate: e}) }}
            />
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 nolpadding traveler-box">
            <label>Travelers</label>
            <input id="travel-count" className="input-text full-width  traveler" name="traveler_count" type="text" defaultValue="1 Adult(s), 0 Child(s), 0 Infant(s)"/>
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
            <input type="radio" defaultValue="foreigner" className="radio-citizin" />
            Foreigner
          </span>
          <span>
            <input type="radio" defaultValue="myanmar" className="myanmar-citizin-radio radio-citizin" />
            Myanmar Citizen
          </span>
        </div>
        <div className="search-btn-flight pull-right">
          <input id="flight_select_submit" className="search-icon-input" type="button" defaultValue="Search" />
        </div>
      </form>
    )
  }
}
export default FlightForm;