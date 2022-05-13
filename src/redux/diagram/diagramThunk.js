import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTransactionSummary = createAsyncThunk(
  "transSum",
  async (date, thunkApi) => {
    const { month, year } = date;
    try {
      const res = await axios.get(
        `/transactions-summary${
          month && year ? `?month=${month}&year=${year}` : ""
        }`
      );
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue("");
    }
  }
);

export const getTransactions = createAsyncThunk(
  "transactions",
  async (_, thunkApi) => {
    try {
      const res = await axios.get(`/transactions`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue("");
    }
  }
);
