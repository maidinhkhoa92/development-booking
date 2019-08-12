import request from 'utils/request';

const Destination = params => {
  return request({
    url: '/api/v1/destinationsearch',
    method: 'get',
    params: params
  });
};

const Nationality = () => {
  return request({
    url: '/api/v1/nationalitysearch/',
    method: 'get'
  });
};

const Search = params => {
  return request({
    url: '/api/v1/hotelsearch',
    method: 'get',
    data: params
  });
};

const Detail = params => {
  return request({
    url: '/api/v1/hoteldetail',
    method: 'get',
    data: params
  });
};

const Room = params => {
  return request({
    url: '/api/v1/hotelrooms',
    method: 'get',
    data: params
  })
}

const AvailabilityPricing = params => {
  return request({
    url: '/api/v1/hotelavailabilitypricing',
    method: 'get',
    data: params
  })
}

export { Destination, Nationality, Search, Detail, Room, AvailabilityPricing };
