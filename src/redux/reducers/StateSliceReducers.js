import { createSlice } from "@reduxjs/toolkit";

const SliceMain = createSlice({
    name: "mainSlice",
    initialState: {
        MeteorList: [],
        IsSpaceShipVisible: false,
        siamoStatiColpiti: false,
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

        setSiamoStatiColpitiTRUE: (state) => {
            state.siamoStatiColpiti = true;
        },

        setSiamoStatiColpitiFALSE: (state) => {
            state.siamoStatiColpiti = false;
        },
    },
});

export const {
    setArrayMeteoriti,
    setDeleteMeteorite,
    IsSpaceShipVisibleOFF,
    IsSpaceShipVisibleON,
    setSiamoStatiColpitiTRUE,
    setSiamoStatiColpitiFALSE,
} = SliceMain.actions;
export default SliceMain.reducer;
