import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { Destination, Nationality, Search, Detail, Room, AvailabilityPricing } from 'services/hotel';

export function* getDestinationSaga() {
  yield takeEvery(actions.GET_DESTINATION_REQUEST, function*(data) {
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
  yield takeEvery(actions.GET_NATIONALITY_REQUEST, function*(data) {
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

export default function* rootSaga() {
  yield all([fork(getDestinationSaga), fork(getNationalitySaga)]);
}
