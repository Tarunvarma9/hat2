export const LOGIN_USER = 'LOGIN_USER';
export const REMEMBER_USER = 'REMEMBER_USER';
export const INCREMENT_LOGIN_COUNT = 'INCREMENT_LOGIN_COUNT';
export const TOGGLE_REMEMBER_COUNT = 'TOGGLE_REMEMBER_COUNT';
export const ADD_LOGIN = 'ADD_LOGIN';

export const loginUser = () => ({
  type: LOGIN_USER,
});

export const rememberUser = () => ({
  type: REMEMBER_USER,
});

export const incrementLoginCount = () => ({
  type: INCREMENT_LOGIN_COUNT,
});

export const toggleRememberCount = () => ({
  type: TOGGLE_REMEMBER_COUNT,
});

export const addLogin = (email) => ({
    type: ADD_LOGIN,
    payload: {
      email,
      timestamp: new Date().toISOString(), // Current timestamp
    },
  });
  