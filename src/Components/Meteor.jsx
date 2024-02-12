import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSiamoStatiColpitiFALSE, setSiamoStatiColpitiTRUE } from "../redux/reducers/StateSliceReducers";

function Meteor({ position }) {
    const dispatch = useDispatch();
    const CollisioneAvvenuta = useSelector((state) => state.MySlice.siamoStatiColpiti);
    console.log("CollisioneAvvenuta", CollisioneAvvenuta);
    return (
        <>
            {" "}
            <div
                /* onMouseEnter={() => {
                console.log("ciao");
            }} */
                onMouseEnter={() => {
                    /* GameOver(); */
                    dispatch(setSiamoStatiColpitiTRUE());
                }}
                className="Meteor-animation position-relative vieniInSuperfice"
                style={{ position: "absolute", top: `${position}%` }}
            >
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="fire"></div>
                <div className="meteor position-absolute top-custom  start-custom"></div>
            </div>
        </>
    );
}

export default Meteor;
