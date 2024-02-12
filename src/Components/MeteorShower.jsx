import React, { useEffect, useRef, useState } from "react";
import Meteor from "./Meteor";
import { useSelector, useDispatch } from "react-redux";
import { setArrayMeteoriti, setDeleteMeteorite } from "../redux/reducers/StateSliceReducers";
import { IsSpaceShipVisibleOFF, IsSpaceShipVisibleON } from "../redux/reducers/StateSliceReducers";
function MeteorShower() {
    /*   const [meteorList, setMeteorList] = useState([]);
    console.log("meteorList", meteorList); */

    const dispatch = useDispatch();
    const MeteorList = useSelector((state) => state.MySlice.MeteorList);
    const naveVisibile = useSelector((state) => state.MySlice.IsSpaceShipVisible);
    console.log("MeteorList", MeteorList);

    const [countMeteors, setCountMeteors] = useState(0);
    const [secondi, setSecondi] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isRoundCompletato, setIsRoundCompletato] = useState(false);
    const [currentRound, setCurrentRound] = useState(1);
    const [intervalloSpawnMeteore, setIntervalloSpawnMeteore] = useState(3000);

    let intervalIdTimer;
    let intervalMeteore;

    function generateRandomNumber() {
        return Math.floor(Math.random() * 60) + 5;
    }

    useEffect(() => {
        if (isActive) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            intervalMeteore = setInterval(() => {
                const newPosition = generateRandomNumber();
                const newMeteor = <Meteor key={Date.now()} position={newPosition} />;
                dispatch(setArrayMeteoriti(newMeteor));
                setCountMeteors((prevCount) => prevCount + 1);
            }, intervalloSpawnMeteore);

            // eslint-disable-next-line react-hooks/exhaustive-deps
            intervalIdTimer = setInterval(() => {
                setSecondi((prevSecondi) => prevSecondi + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalMeteore);
            clearInterval(intervalIdTimer);
            dispatch(setDeleteMeteorite());
            setCountMeteors(0);
            setSecondi(0);
        };
    }, [isActive]);

    useEffect(() => {
        if (countMeteors > 10) {
            fineDelRound();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countMeteors]);

    const fineDelRound = () => {
        clearInterval(intervalMeteore);
        clearInterval(intervalIdTimer);
        dispatch(setDeleteMeteorite());
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
                            dispatch(IsSpaceShipVisibleON());
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

            <div> {MeteorList && MeteorList.map((meteor, index) => <div key={index}>{meteor}</div>)}</div>
        </>
    );
}

export default MeteorShower;
