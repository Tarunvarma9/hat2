// reducers.js

import { combineReducers } from 'redux';
import {
  LOGIN_USER,
  REMEMBER_USER,
  INCREMENT_LOGIN_COUNT,
  TOGGLE_REMEMBER_COUNT,
  ADD_LOGIN,
} from './actions';

const initialState = {
  isLoggedIn: false,
  rememberMe: false,
  loginCount: 0,
  incrementLoginCount:0,
  rememberCount: 0,
  logins: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
        loginCount: state.loginCount + 1,
      };
    case REMEMBER_USER:
      return {
        ...state,
        rememberMe: true,
      };
    case INCREMENT_LOGIN_COUNT:
      return {
        ...state,
        loginCount: state.loginCount + 1,
      };
    case TOGGLE_REMEMBER_COUNT:
      return {
        ...state,
        rememberCount: state.rememberMe ? state.rememberCount - 1 : state.rememberCount + 1,
        rememberMe: !state.rememberMe,
      };
    case ADD_LOGIN:
      return {
        ...state,
        logins: [
          ...state.logins,
          {
            email: action.payload.email,
            timestamp: action.payload.timestamp,
          },
        ],
      };
    default:
      return state;
  }
};
console.log(
  initialState.isLoggedIn,
  initialState.rememberMe,
  initialState.loginCount,
  initialState.rememberCount,
  initialState.logins
  )

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
