import { createSlice } from "@reduxjs/toolkit";

const SliceMain = createSlice({
    name: "mainSlice",
    initialState: {
        MeteorList: [],
        IsSpaceShipVisible: false,
    },

    reducers: {
        setArrayMeteoriti: (state, action) => {
            state.MeteorList = [...state.MeteorList, action.payload];
        },

        setDeleteMeteorite: (state) => {
            state.MeteorList = [];
        },
        IsSpaceShipVisibleON: (state) => {
            state.IsSpaceShipVisible = true;
        },

        IsSpaceShipVisibleOFF: (state) => {
            state.IsSpaceShipVisible = false;
        },
    },
});

export const { setArrayMeteoriti, setDeleteMeteorite, IsSpaceShipVisibleOFF, IsSpaceShipVisibleON } = SliceMain.actions;
export default SliceMain.reducer;
