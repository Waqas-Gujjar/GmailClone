import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: "app", // Match this with the key in store
  initialState: {
    open: false,
    email: [],
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setOpen, setEmail } = appSlice.actions;
export default appSlice.reducer;
