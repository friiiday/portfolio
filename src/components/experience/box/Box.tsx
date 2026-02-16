import "./box.css"
import { TagBox } from "../tags/TagBox";
import { Tasks } from "../Tasks";
import { TimePeriod, timePeriod } from "../TimePeriod";

export type ExperienceProfessional = {
    period: timePeriod;
    company: string;
    role: string;
    tasks?: string[];
    link?: string;
    tags?: string[];
}

export const Box: React.FC<ExperienceProfessional> = ({ period, company, role, tasks, link, tags }) => {

    const handleClicked = () => { 
        if (link) {
            window.open(link, "_blank", "noopener,noreferrer"); 
        }
    };

    return (
        <div className="box" onClick={ handleClicked }>

            <TimePeriod 
                from={ period.from }
                to={ period.to }
            />

            <span className="company">{ company }</span>
            <span className="role">{ role }</span>
            
            {
                tasks ? <Tasks tasks={ tasks } /> : <></>
            }

            {    
                tags ? <TagBox tags={ tags } /> : <></>
            }
        </div>
    )
}
