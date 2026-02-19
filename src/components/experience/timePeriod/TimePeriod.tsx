import React from "react";
import "./timePeriod.css";

export type timePeriod = {
    from: string;
    to: string;
}

export const TimePeriod: React.FC<timePeriod> = ({ from, to }) => {

    const hasTimePeriod = from || to ? true : false

    return (
        <div className="time-period">
            { from } <br />
            {
                hasTimePeriod ? "—" : ""
            }
            <br /> { to }
        </div>
    )
}