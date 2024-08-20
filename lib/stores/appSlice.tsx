import { createSlice } from '@reduxjs/toolkit';

type APPSTATE = {
  activeMenu: number;
};

const initialState: APPSTATE = {
  activeMenu: 1,
};
export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
  },
});
export const {
  setActiveMenu
} = appSlice.actions;
export default appSlice.reducer;
