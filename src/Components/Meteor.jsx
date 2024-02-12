import React, { useState } from "react";

function Meteor({ position }) {
    const GameOver = () => {
        console.log("ciao");
    };

    return (
        <div
            /* onMouseEnter={() => {
                console.log("ciao");
            }} */
            onMouseEnter={() => {
                GameOver();
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
    );
}

export default Meteor;
