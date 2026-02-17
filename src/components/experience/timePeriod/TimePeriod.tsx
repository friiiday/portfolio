import React from "react";
import "./timePeriod.css";

export type timePeriod = {
    from: string;
    to: string;
}

export const TimePeriod: React.FC<timePeriod> = ({ from, to }) => {

    return (
        <div className="time-period">
            { from } <br />—<br /> { to }
        </div>
    )
}