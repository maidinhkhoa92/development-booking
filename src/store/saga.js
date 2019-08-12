import { all } from 'redux-saga/effects';
import busSagas from 'store/bus/saga';
import carSagas from 'store/car/saga';
import flightSagas from 'store/flight/saga';
import hotelSagas from 'store/hotel/saga';
import tourSagas from 'store/tour/saga';

export default function* rootSaga() {
  yield all([busSagas(), carSagas(), flightSagas(), hotelSagas(), tourSagas()]);
}
