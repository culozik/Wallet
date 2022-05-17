import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = " https://wallet.goit.ua/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    isAuth: false,
    token: null,
    isLogout: false,
    isTransactionModal: false,
    isShown: true,
  },
  reducers: {
    loggedIn(state) {
      token.set(state.token);
      state.isAuth = true;
    },
    loggedOff(state) {
      state.isAuth = false;
      state.token = null;
      token.unset();
    },
    setToken(state, { payload }) {
      token.set(payload);
      state.token = payload;
    },
    logoutModal(state, { payload }) {
      state.isLogout = payload;
    },
    transactionModal(state, { payload }) {
      state.isTransactionModal = payload;
    },
    editModal(state, { payload }) {
      state.isEditModal = payload;
    },
    isButtonShown(state, { payload }) {
      state.isShown = payload;
    },
  },
});

export const {
  loggedIn,
  loggedOff,
  setToken,
  logoutModal,
  transactionModal,
  editModal,
  isButtonShown,
} = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
