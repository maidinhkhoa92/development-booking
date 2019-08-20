import React from 'react';
import { connect } from 'react-redux';
import { hotelActions } from 'store/actions';
import { TotalSearch, SearchFilter, SortFilter, ListHotel } from 'components';

const Result = ({ list, detailHotel }) => {
    return (
        <div className="col-sm-9 col-md-9 col-xs-12 lh right-content">
            <TotalSearch />
            <SearchFilter />
            <div className="hotel-hd">
                <h2>Select your Hotel in <span className="blue-color">Yangon, Myanmar</span></h2>
            </div>
            <SortFilter />
            <ListHotel list={list} onClick={detailHotel} />
        </div>
    )
}
const mapStateToProps = state => {
    return {
        list: state.Hotel.hotels
    };
};
const mapDispatchToProps = {
    detailHotel: hotelActions.detailHotel
};
export default connect(mapStateToProps, mapDispatchToProps)(Result);