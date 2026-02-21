import { DateDisplay } from "./DateDisplay"
import { DateProps } from "./TimePeriod"
import "./timePeriod.css"

export const ToDate: React.FC<DateProps> = ({ date }) => {

    return (
        <span className="to-date">
            <DateDisplay date={ date } />
        </span>
    )
}