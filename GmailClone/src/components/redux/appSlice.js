import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: "app", // Match this with the key in store
  initialState: {
    open: false,
    emails: [],
    selectedEmail: null,
    searchMail: "",
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setEmail: (state, action) => {
      state.emails = action.payload;
    },
    setSelectedEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
    setSearchMail: (state, action) => {
      state.searchMail = action.payload;
    },
  },
});

export const { setOpen, setEmail, setSelectedEmail, setSearchMail } = appSlice.actions;
export default appSlice.reducer;
