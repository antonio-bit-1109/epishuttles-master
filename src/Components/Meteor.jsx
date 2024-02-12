import React, { useState } from "react";

function Meteor({ position }) {
    return (
        <>
            {" "}
            <div
                /* onMouseEnter={() => {
                console.log("ciao");
            }} */
                onMouseEnter={() => {
                    /* GameOver(); */
                    console.log("KABOOM!");
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
