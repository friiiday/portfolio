import "./experience.css"
import { Box, ExperienceProfessional } from "../components/experience/box/Box"
import dataProfessional from "../data/experience_professional.json"
import dataTraining from "../data/experience_training.json"

export const Experience = () => {

    const experienceProfessional: ExperienceProfessional[] = dataProfessional
    const experienceTraining: ExperienceProfessional[] = dataTraining

    const generateBoxesProfessional = experienceProfessional.map( (experience, i) => {

        return (
            <Box 
                period={ experience.period } 
                company={ experience.company } 
                role={ experience.role } 
                tasks={ experience.tasks } 
                tags={ experience.tags } 
                link={ experience.link } 
                key={ i }
            />
        )
    })

        const generateBoxesTraining = experienceTraining.map( (experience, i) => {

        return (
            <Box 
                period={ experience.period } 
                company={ experience.company } 
                role={ experience.role } 
                tasks={ experience.tasks } 
                key={ i }
            />
        )
    })

    return (
        <div className="experience">

            <div className="professional">
                <h3>Professional</h3>
                { 
                    generateBoxesProfessional                    
                }
            </div>

            <div className="training">

                <h3>Training</h3>              
                {
                    generateBoxesTraining
                }
            </div>
        </div>
    )
}