import "./timePeriod.css"
import { DateProps } from "./TimePeriod"
import { YearDisplay } from "./YearDisplay"

export const DateDisplay: React.FC<DateProps> = ({ date }) => {

    return (
        <span className="date-display">
            <span className="day">
                { date.day } 
            </span>
            <span className="month">
                { date.month }  
            </span>
            <YearDisplay year={ date.year } />
        </span>
    )

}