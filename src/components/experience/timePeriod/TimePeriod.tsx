import React from "react";
import "./timePeriod.css";
import { splitDate } from "../../../utils/splitDate";
import { FromDate } from "./FromDate";
import { ToDate } from "./ToDate";

export type timePeriod = {
    from: string;
    to: string;
}
export type DateProps = {
    date: { 
        day: string, 
        month: string;
        year: string;
    };
}

export const TimePeriod: React.FC<timePeriod> = ({ from, to }) => {

    const hasTimePeriod = from || to ? true : false
        
    const splitDates = () => {

            const fromSplit = splitDate(from)
            const toSplit = splitDate(to)
            
            return { from: fromSplit, to: toSplit }
    }
   
    const dates = splitDates()

    return (
        <>
            {   hasTimePeriod &&
                    <div className="time-period">
                        <FromDate date={ dates.from.date } />
                        <span className="hyphen">
                            —
                        </span>
                        {
                            dates.to.date.year == "" ?
                                <span className="today">TODAY</span>
                                : <ToDate date={ dates.to.date } />
                        }
                    </div>
            }
        </>
    )
}
