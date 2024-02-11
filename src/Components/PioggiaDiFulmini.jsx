import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const PioggiaDiFulmini = () => {
    const MeteorList = useSelector((state) => state.MySlice.MeteorList);
    console.log("MeteorList", MeteorList);

    useEffect(() => {
        if (MeteorList.length === 5) {
            console.log("CIAOCIAO");
        }
    }, [MeteorList]);
    return <></>;
};

export default PioggiaDiFulmini;
