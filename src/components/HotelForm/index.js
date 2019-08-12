import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import { hotelActions } from 'store/actions';
import Place from './Place';
import Room from './Room';

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
      },
      toggle: {
        place: false,
        room: false
      },
      loading: {
        place: false
      },
      error: {
        place: ''
      }
    }
  }

  setParams = (key, e) => {
    this.setState({
      params: {
        ...this.state.params,
        [key]: e
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
          place: true
        }
      }, () => {
        this.props.getDestination({q: value}, this.success, this.fail);
      });
    }
  }

  success = () => {
    this.setState({
      loading: {
        place: false
      }
    })
  }

  fail = error => {
    this.setState({
      loading: {
        place: false
      },
      error: {
        place: error
      }
    })
  }

  render() {
    const { params, toggle, loading } = this.state;
    return (
      <form id="hotel_search" >
        <div className="local-hotel" id="hotel_domestic_id">
          {
            toggle.place && <Place loading={loading.place} list={this.props.places}/>
          }
          <div className="col-md-12 col-sm-12 col-xs-12">
            <label>Where do you want to go?</label>
            <input id="hotel_city" className="form-control hotel-icon-input" placeholder="City, Hotel, Place to go" type="text" onChange={e => {this.searchDestination(e)}}/>
          </div>
        </div>
        <div className="date-picker">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <label>Check-in</label>
            <DatePicker
              selected={params.CheckinDate}
              onChange={e => { this.setParams('CheckinDate', e) }}
            />
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <label >Check-out</label>
            <DatePicker
              selected={params.CheckoutDate}
              onChange={e => { this.setParams('CheckoutDate', e) }}
            />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12" id="rooms-adults-childs">
            <label>Guest</label>
            <input id="travel-count1" className="input-text full-width hotel-traveler" value={params.NoOfRooms+" Room(s), "+params.AdultCount+" Adult(s), "+params.ChildCount+" Child(s)"} readOnly={true} type="text"></input>
            {
              toggle.room && <Room />
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
          <input id="search-hotel" className="form-control search-icon-input disabled" tabIndex="5" defaultValue="Search" type="submit" />
        </div>
      </form>
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
  getDestination: hotelActions.getDestination
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);