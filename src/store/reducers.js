import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Bus from './bus/reducer';
import Car from './car/reducer';
import Flight from './flight/reducer';
import Hotel from './hotel/reducer';
import Tour from './tour/reducer';

const reducers = combineReducers({
  Bus: Bus,
  Car: Car,
  Flight: Flight,
  Hotel: Hotel,
  Tour: Tour
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['Hotel', 'Car', 'Bus', 'Tour', 'Flight']
};
const persistedReducer = persistReducer(persistConfig, reducers);
export default persistedReducer;
