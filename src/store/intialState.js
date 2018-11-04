const initialState = {
  users: {
    user: {},
    loading: false,
    error: "",
    isAuthenticated: false
  },
  rides: {
    allRides: {
      isLoading: false,
      error: false,
      data: []
    },
    createRides: {
      data: {},
      isLoading: false,
      error: ""
    },
    oneRide: {
      ride: {},
      isLoading: false,
      error: ""
    }
  },
  request: {
    requested: false,
    requesting: false,
    error: ''
  }
};

export default initialState;
