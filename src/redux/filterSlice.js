import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
      return action.payload;
    },
  },
});

export const { filterContacts } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
