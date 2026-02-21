import { DateProps } from "../components/experience/timePeriod/TimePeriod"

export const splitDate = (dateStr: string): DateProps => {
    
    if (dateStr.toLowerCase() !== "today") {

        const year = getYear(dateStr)
        const month = getMonth(dateStr)
        const day = getDay(dateStr)
               
        return { date: { year, month, day } }
    }
    else
    return { date: { year: "", month: "", day: "" }  }
}

const getYear = (dateStr: string) =>  dateStr.slice(-2);
const getMonth = (dateStr: string) =>  dateStr.slice(3, -5).trim();
const getDay = (dateStr: string) =>  dateStr.slice(0, 3).trim();