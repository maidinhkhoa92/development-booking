import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hotelActions } from 'store/actions';
import { BusForm, CarForm, FlightForm, HotelForm, TourForm, Loading } from 'components'

class Hotels extends React.Component {
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

  render() {
    if(this.state.loading) {
      return <Loading />
    }
    return (
      <div className="main-search">
      </div>
    );
  }
}

Hotels.propTypes = {
  getNationality: PropTypes.func
};


const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
  getNationality: hotelActions.getNationality
};

export default connect(mapStateToProps, mapDispatchToProps)(Hotels);
