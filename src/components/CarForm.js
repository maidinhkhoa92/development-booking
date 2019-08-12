import React from 'react';

const Form = () => {
    return (
        <form>
                  <div className="col-md-12 col-sm-12 col-xs-12 nolpadding" id="location-setting">
                    <label >To</label>
                    <input type="text" id="destination-city" name="destination-city" className="form-control location-icon-input ui-autocomplete-input" placeholder="Please Enter City Name" autoComplete="off"/>
                    <div className="tour-auto-box">
                      <ul className="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id="ui-id-5" tabIndex="0" ></ul>
                    </div>
                    <label id="dest_warning" className="error" ></label>
                    <input id="dest_city_id" name="dest_city_id" type="hidden"/>
                  </div>
                  <div className="col-md-6 col-xs-12 col-sm-12 depart">
                    <label >Depart</label>
                    <input id="dest_depart" className="form-control calendar-icon-input hasDatepicker" type="text" readOnly=""/>
                  </div>
                  <div className="col-md-6 col-xs-12 col-sm-12 return">
                    <label>Return</label>
                    <input id="dest_return" className="form-control calendar-icon-input hasDatepicker" type="text" readOnly=""/>
                  </div>
                  <div className="col-md-4 col-xs-12 adult">
                    <label className="text-unset">Adult (12+ yrs)</label>
                    <div className="selector">
                      <select id="dest_adult_no">
                        <option value="1">1</option>
                        <option value="2" >2</option>
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
                  <div className="col-md-4 col-xs-12 child">
                    <label className="text-unset">Child (2-11 yrs)</label>
                    <div className="selector" id="child">
                      <select id="dest_child_no">
                          <option value="0">0</option>
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
                  <div className="col-md-4 col-xs-12 infant">
                    <label className="text-unset">Infant (under 2 yrs)</label>
                    <div className="selector" id="infant">
                      <select id="dest_infant_no">
                        <option value="0">0</option>
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



                </form> 
    )
}
export default Form;