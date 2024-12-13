import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sorting: [],
    filtering: '',
    pagination: {
      pageIndex: 0,
      pageSize: 1000,
    },
  };

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setSorting(state, action) {
            state.sorting = action.payload;
        },
        setFiltering(state, action) {
            state.filtering = action.payload;
        },
        setPageIndex(state, action) {
            state.pageIndex = action.payload;
        },
    },
});

export const { setSorting, setFiltering, setPageIndex } = tableSlice.actions;

export default tableSlice.reducer;
