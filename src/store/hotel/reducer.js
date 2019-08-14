import actions from './actions';

const initialState = {
  destination: [],
  nationality: [],
  hotels: [],
  hotel: {}
};

const Hotel = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_DESTINATION_SUCCESS:
      return { ...state, destination: action.payload };
    case actions.GET_NATIONALITY_SUCCESS:
      return { ...state, nationality: action.payload };
    case actions.SEARCH_HOTEL_SUCCESS:
      return { ...state, hotels: action.payload };
    default:
      return state;
  }
};

export default Hotel;
