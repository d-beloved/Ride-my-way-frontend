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
    }
  }
};

export default initialState;
