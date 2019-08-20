import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import { hotelActions } from 'store/actions';
import { history, convertStyleA } from 'utils';
import {Loading, Room, Place} from 'components';
import _ from 'lodash';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: new Date(),
      params: {
        CheckinDate: new Date(),
        CheckoutDate: new Date(),
        NoOfRooms: 1,
        AdultCount: 1,
        ChildCount: 0,
        ChildAge: '0',
        OrderBy: 'PriceAsc'
      },
      toggle: {
        place: false,
        room: false
      },
      loading: {
        page: false,
        place: false
      },
      error: ''
    }
  }

  setParams = (params) => {
    this.setState({
      params: {
        ...this.state.params,
        ...params
      }
    })
  }

  setToggle = (key, e) => {
    this.setState({
      toggle: {
        ...this.state.toggle,
        [key]: e
      }
    })
  }

  searchDestination = e => {
    const value = e.target.value;
    if(value === ''){
      this.setToggle('place', false);
    } else {
      this.setState({
        toggle : {
          ...this.state.toggle,
          place: true
        },
        loading: {
          ...this.state.loading,
          place: true
        },
        params: {
          ...this.state.params,
          CityName: value
        }
      }, () => {
        this.props.getDestination({q: value}, this.success, this.fail);
      });
    }
  }

  searchHotel = () => {
    const params = {
      ...this.state.params,
      CheckinDate: convertStyleA(this.state.params.CheckinDate),
      CheckoutDate: convertStyleA(this.state.params.CheckoutDate),
      ChildAge: _.join(this.state.params.ChildAge, ',')
    }
    this.setState({
      loading: {
        ...this.state.loading,
        page: true
      }
    }, () => {
      this.props.searchHotel(params, this.successSearch, this.fail);
    })
  }

  success = () => {
    this.setState({
      loading: {
        place: false,
        page: false
      }
    })
  }

  successSearch = () => {
    this.setState({
      loading: {
        place: false,
        page: false
      }
    }, () => {
      history.push({path: '/hotels'})
    })
  }

  fail = error => {
    this.setState({
      loading: {
        place: false,
        page: false
      },
      error: error
    })
  }

  handleValue = () => {
    const { params } = this.state
    if (params.CityName === undefined) {
      return '';
    }
    return params.CityName;
  }

  render() {
    const { params, toggle, loading } = this.state;
    if(loading.page) {
      return <Loading />
    }
    return (
      <div id="hotel_search" >
        { this.state.error !== '' && <div className="alert alert-danger">{this.state.error}</div> }
        <div className="local-hotel" id="hotel_domestic_id">
          {
            toggle.place && <Place setToggle={this.setToggle} setParams={this.setParams} loading={loading.place} list={this.props.places}/>
          }
          <div className="col-md-12 col-sm-12 col-xs-12">
            <label>Where do you want to go?</label>
            <input 
              id="hotel_city" 
              className="form-control hotel-icon-input" 
              placeholder="City, Hotel, Place to go" 
              value={this.handleValue()} 
              type="text" 
              onChange={e => {this.searchDestination(e)}}
            />
          </div>
        </div>
        <div className="date-picker">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <label>Check-in</label>
            <DatePicker
              selected={params.CheckinDate}
              onChange={e => { this.setParams({CheckinDate: e}) }}
            />
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <label >Check-out</label>
            <DatePicker
              selected={params.CheckoutDate}
              onChange={e => { this.setParams({CheckoutDate: e}) }}
            />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12" id="rooms-adults-childs">
            <label>Guest</label>
            <input 
              id="travel-count1" 
              className="input-text full-width hotel-traveler" 
              value={params.NoOfRooms+" Room(s), "+params.AdultCount+" Adult(s), "+params.ChildCount+" Child(s)"} 
              readOnly={true} 
              type="text" 
              onClick={e => {this.setToggle('room', true)}}
            />
            {
              toggle.room && <Room setToggle={this.setToggle} setParams={this.setParams} params={params} />
            }
          </div>
        </div>
        <div className="pull-left foreigner-check">
          <span>
            <input name="citizien" defaultValue="foreigner" className="radio-citizin" type="radio" /> 
            <span>Foreigner</span>
          </span>
          <span>
            <input name="citizien" defaultValue="local" className="myanmar-citizin-radio radio-citizin" type="radio" /> <span>Myanmar Citizen</span>
          </span>
  
        </div>
        <div className="search-btn-hotel">
          <input id="search-hotel" className="form-control search-icon-input disabled" tabIndex="5" defaultValue="Search" onClick={() => this.searchHotel()} type="submit"/>
        </div>
      </div>
    )
  }
}

Form.propTypes = {
  getDestination: PropTypes.func
};

const mapStateToProps = state => {
  return {
    places: state.Hotel.destination
  };
};

const mapDispatchToProps = {
  getDestination: hotelActions.getDestination,
  searchHotel: hotelActions.searchHotel
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);