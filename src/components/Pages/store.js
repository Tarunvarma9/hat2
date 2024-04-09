import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  rememberMe: false,
  loginCount: 0,
  rememberCount: 0,
  logins: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true;
      state.loginCount++;
    },
    rememberUser: (state) => {
      state.rememberMe = true;
    },
    // incrementLoginCount: (state) => {
    //   state.loginCount++;
    // },
    incrementRememberCount: (state) => {
      state.rememberCount++;
    },
    addLogin: (state, action) => {
      state.logins.push({
        email: action.payload.email,
        timestamp: new Date().toISOString(),
      });
    },
  },
});

export const { loginUser, rememberUser, incrementLoginCount, toggleRememberCount,incrementRememberCount, addLogin } = authSlice.actions;

export const authReducer = authSlice.reducer;

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
