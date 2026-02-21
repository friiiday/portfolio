import "./tags.css"

interface props {
    label: string
}

export const Tag: React.FC<props> = ({ label }) => {

    return (
        <div className="tag">
            { label }
        </div>
    )

}