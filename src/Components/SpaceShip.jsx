import React, { useEffect, useState } from "react";
import shuttle from "../shuttle.png";
import fire from "../fire.gif";

const SpaceShip = () => {
    const [mousePosition, setMouseposition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMouseposition({ x: e.clientX, y: e.clientY });
        console.log(e.clientX, e.clientY);
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        console.log("POSIZIONE SHUTTLE");
    }, [mousePosition.x, mousePosition.y]);

    return (
        <div>
            <img
                src={fire}
                alt="fire"
                style={{
                    position: "absolute",
                    left: mousePosition.x - 70,
                    top: mousePosition.y,
                    width: "100px",
                    height: "100px",
                    backgroundColor: "transparent",
                    transform: "rotate(270deg)",
                }}
            />

            <img
                style={{
                    position: "absolute",
                    left: mousePosition.x,
                    top: mousePosition.y,
                    width: "100px",
                    height: "100px",
                    backgroundColor: "transparent",
                    transform: "rotate(45deg)",
                }}
                src={shuttle}
                alt=""
            />
        </div>
    );
};

export default SpaceShip;
