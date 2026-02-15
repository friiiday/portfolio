
type TagProps = {
    label: string
}

export const Tag: React.FC<TagProps> = ({ label }) => {

    return (
        <div className="tag">
            { label }
        </div>
    )

}