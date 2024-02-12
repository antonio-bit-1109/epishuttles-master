import React from "react";
import KABOOM from "../KABOOM.gif";
import { useSelector } from "react-redux";

const Esplosione = () => {
    const CollisioneAvvenuta = useSelector((state) => state.MySlice.siamoStatiColpiti);
    return (
        <div style={{ zIndex: 999, height: "100vh" }}>
            {" "}
            {!CollisioneAvvenuta && <video autoPlay src={KABOOM}></video>}
        </div>
    );
};

export default Esplosione;
