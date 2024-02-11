import { createSlice } from "@reduxjs/toolkit";

const SliceMain = createSlice({
    name: "mainSlice",
    initialState: {
        MeteorList: [],
    },

    reducers: {
        setArrayMeteoriti: (state, action) => {
            state.MeteorList = [...state.MeteorList, action.payload];
        },

        setDeleteMeteorite: (state) => {
            state.MeteorList = [];
        },
    },
});

export const { setArrayMeteoriti, setDeleteMeteorite } = SliceMain.actions;
export default SliceMain.reducer;
