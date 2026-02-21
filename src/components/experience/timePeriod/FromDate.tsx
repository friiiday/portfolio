import { DateDisplay } from "./DateDisplay"
import { DateProps } from "./TimePeriod"
import "./timePeriod.css"

export const FromDate: React.FC<DateProps> = ({ date }) => {

    return (
        <span className="from-date">
            <DateDisplay date={ date } />
        </span>
    )
}