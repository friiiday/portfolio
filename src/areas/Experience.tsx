import { Box, ExperienceProfessional } from "../components/experience/Box"
import data from "../data/experience_professional.json"

export const Experience = () => {

    const experienceProfessional: ExperienceProfessional[] = data

    const generateBoxes = experienceProfessional.map( (experience) => {

        return (
            <Box 
                period={ experience.period } 
                company={ experience.company } 
                role={ experience.role } 
                tasks={ experience.tasks } 
                tags={ experience.tags } 
                link={ experience.link } 
            />
        )
    })

    return (
        <div className="experience">
            <div className="professional">
                { 
                    generateBoxes
                }
            </div>

            <div className="training">

            </div>
        </div>
    )
}