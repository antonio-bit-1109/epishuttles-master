import React, { useEffect, useRef, useState } from "react";
import Meteor from "./Meteor";

function MeteorShower() {
    const [meteorList, setMeteorList] = useState([]);
    console.log("meteorList", meteorList);
    const [countMeteors, setCountMeteors] = useState(0);
    const [secondi, setSecondi] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isRoundCompletato, setIsRoundCompletato] = useState(false);
    const [currentRound, setCurrentRound] = useState(1);
    const [intervalloSpawnMeteore, setIntervalloSpawnMeteore] = useState(5000);
    /*   const input = useRef(null); */

    let intervalIdTimer;
    let intervalMeteore;

    function generateRandomNumber() {
        return Math.floor(Math.random() * 80) + 5;
    }

    const handleSpawnMeteore = () => {
        return intervalloSpawnMeteore;
    };

    useEffect(() => {
        if (isActive) {
            intervalMeteore = setInterval(() => {
                const newPosition = generateRandomNumber();
                const newMeteor = <Meteor key={Date.now()} position={newPosition} />;
                setMeteorList((prevList) => [...prevList, newMeteor]);
                setCountMeteors((prevCount) => prevCount + 1);
            }, handleSpawnMeteore());

            intervalIdTimer = setInterval(() => {
                setSecondi((prevSecondi) => prevSecondi + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalMeteore);
            clearInterval(intervalIdTimer);
            setMeteorList([]);
            setCountMeteors(0);
            setSecondi(0);
        };
    }, [isActive]);

    useEffect(() => {
        if (countMeteors > 2) {
            fineDelRound();
        }
    }, [countMeteors, intervalloSpawnMeteore]);

    const fineDelRound = () => {
        clearInterval(intervalMeteore);
        clearInterval(intervalIdTimer);
        setMeteorList([]);
        setCountMeteors(0);
        setSecondi(0);
        setIsRoundCompletato(true);
        setTimeout(() => {
            setIsRoundCompletato(false);
        }, 3000);
        setCurrentRound((prevState) => prevState + 1);
        setIntervalloSpawnMeteore((prevState) => prevState - 1000);
    };

    return (
        <>
            <div className="d-flex align-items-center justify-content-around">
                <div className="text-light fs-3">Round in corso: {currentRound}</div>
                <div className="text-light justify-content-center d-flex flex-column align-items-center">
                    <h2 className="display-2">Time : {secondi}</h2>
                    <button
                        onClick={() => {
                            setIsActive(!isActive);
                            setCurrentRound(1);
                        }}
                    >
                        {isActive ? "Riavvia" : "Start"}
                    </button>
                </div>
            </div>

            {isRoundCompletato && (
                <div className="d-flex justify-content-center mt-4">
                    <h4 className="text-light"> Round {currentRound - 1} Completato </h4>
                </div>
            )}

            <div>
                {meteorList.map((meteor, index) => (
                    <div key={index}>{meteor}</div>
                ))}
            </div>
        </>
    );
}

export default MeteorShower;
