import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hotelActions } from 'store/actions';
import HotelForm from 'container/Hotel/Form';
import { BusForm, CarForm, FlightForm, TourForm, Loading } from 'components';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 0,
      loading: false,
      error: '',
    }
  }

  componentDidMount() {
    const { getNationality } = this.props;
    this.setState({
      loading: true
    }, () => {
      getNationality(this.success, this.error)
    })
  }

  success = () => {
    this.setState({
      loading: false
    })
  }

  error = error => {
    this.setState({
      loading: false,
      error: error
    })
  }

  setTabs = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  setStyle = (string, key, value) => {
    if (this.state[key] === value) {
      return string + " active";
    }
    return string;
  }

  returnForm = () => {
    switch (this.state.tabs) {
      case 0:
        return <HotelForm/>
      case 1:
        return <FlightForm />
      case 2:
        return <BusForm />
      case 3:
        return <TourForm />
      default:
        return <CarForm />
    }
  }

  render() {
    if(this.state.loading) {
      return <Loading />
    }
    return (
      <div className="main-search">
        <div className="container d-flex flex-row">
          { this.state.error !== '' && <div className="alert alert-danger">{this.state.error}</div> }
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className={this.setStyle("nav-link", "tabs", 0)} onClick={() => { this.setTabs('tabs', 0) }}>Hotels</a>
            </li>
            <li className="nav-item">
              <a className={this.setStyle("nav-link", "tabs", 1)} onClick={() => { this.setTabs('tabs', 1) }}>Flights</a>
            </li>
            <li className="nav-item">
              <a className={this.setStyle("nav-link", "tabs", 2)} onClick={() => { this.setTabs('tabs', 2) }}>Bus</a>
            </li>
            <li className="nav-item">
              <a className={this.setStyle("nav-link", "tabs", 3)} onClick={() => { this.setTabs('tabs', 3) }}>Tours</a>
            </li>
            <li className="nav-item">
              <a className={this.setStyle("nav-link", "tabs", 4)} onClick={() => { this.setTabs('tabs', 4) }}>Car</a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-panel">
              {this.returnForm()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  getNationality: PropTypes.func
};


const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
  getNationality: hotelActions.getNationality
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
