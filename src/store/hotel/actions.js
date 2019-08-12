const actions = {
  GET_DESTINATION_REQUEST: 'GET_DESTINATION_REQUEST',
  GET_DESTINATION_SUCCESS: 'GET_DESTINATION_SUCCESS',
  
  getDestination: (params, success, fail) => ({
    type: actions.GET_DESTINATION_REQUEST,
    params,
    success,
    fail
  }),

  GET_NATIONALITY_REQUEST: 'GET_NATIONALITY_REQUEST',
  GET_NATIONALITY_SUCCESS: 'GET_NATIONALITY_SUCCESS',
  
  getNationality: (success, fail) => ({
    type: actions.GET_NATIONALITY_REQUEST,
    success,
    fail
  })
};
export default actions;
