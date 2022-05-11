import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    isAuth: false,
    token: null,
  },
  reducers: {
    loggedIn(state) {
      state.isAuth = true;
    },
    loggedOff(state) {
      state.isAuth = false;
      state.token = null;
    },
    setToken(state, { payload }) {
      state.token = payload;
    },
  },
});

export const { loggedIn, loggedOff, setToken } = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
