import "./box.css"
import { TagBox } from "../tags/TagBox";
import { Tasks } from "../../task/Tasks";
import { TimePeriod, timePeriod } from "../timePeriod/TimePeriod";
import { RedirectButton } from "../redirectButton/RedirectButton";
import { Collapsible } from "../../collapsible/Collapsible";

export type ExperienceProfessional = {
    period: timePeriod;
    company: string;
    role: string;
    tasks?: string[];
    url?: string;
    tags?: string[];
}

export const Box: React.FC<ExperienceProfessional> = ({ period, company, role, tasks, url, tags }) => {

    return (
        <div className="box">
            
            <div className="info">

                <div className="info-header">

                    <span className="company">{ company }</span>
                    <span className="role">{ role }</span>
                    <RedirectButton url={ url } />

                </div>

                <TimePeriod 
                    from={ period.from }
                    to={ period.to }
                />

                {    
                    tags ? <TagBox tags={ tags } /> : <></>
                }

                <Collapsible>
                    {
                        tasks ? <Tasks tasks={ tasks } /> : <></>
                    }
                </Collapsible>


            </div>
        </div>
    )
}
