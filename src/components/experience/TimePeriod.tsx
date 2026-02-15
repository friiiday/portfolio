import React from "react";

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