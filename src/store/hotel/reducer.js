import actions from './actions';

const initialState = {
  destination: [],
  nationality: [],
  hotels: [],
  searchInfo: {},
  hotel: {}
};

const Hotel = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_DESTINATION_SUCCESS:
      return { ...state, destination: action.payload };
    case actions.GET_NATIONALITY_SUCCESS:
      return { ...state, nationality: action.payload };
    case actions.SEARCH_HOTEL_SUCCESS:
      const SearchInfo = action.payload[0].SearchInfo;
      const HotelResultList = action.payload[0].HotelResultList
      return { ...state, hotels: HotelResultList, searchInfo: SearchInfo };
    case actions.GET_DETAIL_SUCCESS:
        return { ...state, hotel: action.payload };
    default:
      return state;
  }
};

export default Hotel;
