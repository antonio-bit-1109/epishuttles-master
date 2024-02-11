import React from "react";
/* import meteor from "../meteor.png";
import fire from "../fire.gif"; */

function Meteor({ position }) {
    return (
        <div
            className="Meteor-animation position-relative d-inline-block"
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
