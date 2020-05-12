import {createSlice} from '@reduxjs/toolkit';
import {mockApi} from 'API';

export const slice = createSlice({
  name: 'app',
  initialState: {
    theme: 'light',
    user: null,
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setTheme, setUser} = slice.actions;

export const getUser = async (dispatch) => {
  dispatch(await mockApi.fetchUser());
};

export const selectTheme = (state) => state.app.theme;
export const selectUser = (state) => state.app.user;

export default slice.reducer;
