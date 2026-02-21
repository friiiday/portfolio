import React from "react";
import "./timePeriod.css";

export type timePeriod = {
    from: string;
    to: string;
}

export const TimePeriod: React.FC<timePeriod> = ({ from, to }) => {

    const hasTimePeriod = from || to ? true : false

    return (
        <>
            {   
                hasTimePeriod &&
                    <div className="time-period">
                        { from }
                        &nbsp;—&nbsp;
                        {
                            to == "" ? 
                                <>TODAY</>
                                : <>{ to }</>
                        }
                    </div>
            }
        </>
    )
}
