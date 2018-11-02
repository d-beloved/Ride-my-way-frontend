import userReducer from "../../reducers/userReducers";
import * as types from "../../actions/types";

describe("User reducers", () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({
      user: {},
      loading: false,
      error: "",
      isAuthenticated: false
    });
  });
  it("should set current user", () => {
    const action = {
      type: types.SET_CURRENT_USER,
      payload: { isAuthenticated: true }
    };
    expect(userReducer({}, action)).toEqual({
      isAuthenticated: true,
    });
  });

  it("should return user failure", () => {
    const action = {
      type: types.USER_FAILURE,
      payload: "error"
    };
    expect(userReducer({}, action)).toEqual({
      error: action.payload
    });
  });

  it("should clear error", () => {
    const action = {
      type: types.CLEAR_ERROR,
      payload: { error: "" }
    };
    expect(userReducer({}, action)).toEqual({
      error: ""
    });
  });

  it("should return user loading", () => {
    const action = {
      type: types.USER_LOADING,
      payload: { loading: true }
    };
    expect(userReducer({}, action)).toEqual({
      loading: action.payload
    });
  });

  it("should return logout SUCCESS", () => {
    const action = {
      type: types.LOGOUT_SUCCESS,
      payload: { isAuthenticated: false }
    };
    expect(userReducer({}, action)).toEqual({
      isAuthenticated: false
    });
  });
});
