import actions from './actions';
import { all, fork, put, takeLatest, select } from 'redux-saga/effects';
import { searchInfo } from 'store/selectors'
import { Destination, Nationality, Search, Detail, Room, AvailabilityPricing } from 'services/hotel';

export function* getDestinationSaga() {
  yield takeLatest(actions.GET_DESTINATION_REQUEST, function*(data) {
    try {
      const { params, success, fail } = data;
      
      const res = yield Destination(params);
      
      if (res.status === 200) {
        yield put({ type: actions.GET_DESTINATION_SUCCESS, payload: res.data });
        yield success();
      } else {
        yield fail('No data');
      }
    } catch (error) {
      console.log(error)
    }
  });
}

export function* getNationalitySaga() {
  yield takeLatest(actions.GET_NATIONALITY_REQUEST, function*(data) {
    try {
      const { success, fail } = data;

      const res = yield Nationality();
      
      if (res.status === 200) {
        yield put({ type: actions.GET_NATIONALITY_SUCCESS, payload: res.data });
        yield success();
      } else {
        yield fail();
      }
    } catch (error) {
      console.log(error)
    }
  });
}

export function* searchHotelSaga() {
  yield takeLatest(actions.SEARCH_HOTEL_REQUEST, function*(data) {
    try {
      const { params, success, fail } = data;
      
      const res = yield Search(params);
      if (res.status === 200) {
        yield put({ type: actions.SEARCH_HOTEL_SUCCESS, payload: res.data });
        yield success();
      } else {
        yield fail('No hotels');
      }
    } catch (error) {
      console.log(error)
    }
  });
}

export function* detailHotelSaga() {
  yield takeLatest(actions.GET_DETAIL_REQUEST, function*(data) {
    try {
      const { params, success, fail } = data;
      const hotelInfo = select(searchInfo); 

      const body = {
        ...params,
        SessionId: hotelInfo.SessionId,
      }
      
      const res = yield Detail(body);
      if (res.status === 200) {
        yield put({ type: actions.GET_DETAIL_SUCCESS, payload: res.data });
        yield success();
      } else {
        yield fail('No hotels');
      }
    } catch (error) {
      console.log(error)
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getDestinationSaga), fork(getNationalitySaga), fork(searchHotelSaga), fork(detailHotelSaga)]);
}
