import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sort: 'default',
    search: "",
    filter: 'all'
};

const filterSlice = createSlice(
    {
        name: 'filter',
        initialState,
        reducers: {
            changeSort: (state, action) => {
                console.log('change sort called')
                state.sort = action.payload;
                console.log('change sort done')
            },
            changeSearch: (state, action) => {
                state.search = action.payload;
            },
            changeFilter: (state, action) => {
                state.filter = action.payload;
            }
        }
    }
);

export default filterSlice.reducer;
export const {changeSort, changeFilter, changeSearch} = filterSlice.actions;