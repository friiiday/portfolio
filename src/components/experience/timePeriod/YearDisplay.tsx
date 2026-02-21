import "./timePeriod.css"

interface props {
    year: string;
}

export const YearDisplay: React.FC<props> = ({ year }) => {
    return (
        <span className="year">'{ year }</span>
    )
}