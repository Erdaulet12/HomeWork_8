import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("api/fetchData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
});

const apiSlice = createSlice({
  name: "api",
  initialState: { data: null, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
