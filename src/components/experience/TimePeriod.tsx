import React from "react";

export type timePeriod = {
    from: string;
    till: string;
}

export const TimePeriod: React.FC<timePeriod> = ({ from, till }) => {

    return (
        <div className="time-period">
            { from } <br />—<br /> { till }
        </div>
    )
}