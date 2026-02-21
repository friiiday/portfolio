import "./tags.css"
import { Tag } from "./Tag"

interface TagBoxProps {
    tags: string[];
}

export const TagBox: React.FC<TagBoxProps> = ({ tags }) => {

    const list = tags.map(
        (tag, i) => {
            return (
                <Tag key={ i } label={ tag } />
            )
        }
    )

    return (
        <div className="tag-box">
            { 
                list
            }
        </div>
    )
}