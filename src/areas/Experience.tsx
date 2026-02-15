import { Box, ExperienceProfessional } from "../components/experience/Box"

export const Experience = () => {

    const experienceProfessional: ExperienceProfessional = [
        {
            company: "",
            period: { from: "2", till: "2" },
            role: "",
            tags: [""],
            tasks: [""],
            link: ""
        }
    ]

    return (
        <div className="experience">
            <div className="professional">
                
                <Box 
                    period={{ 
                        from: experienceProfessional.period.from, 
                        till: experienceProfessional.period.till 
                    }} 
                    company={ experienceProfessional.company } 
                    role={ experienceProfessional.role } 
                    tasks={ experienceProfessional.tasks } 
                    tags={ experienceProfessional.tags } 
                    link={ experienceProfessional.link } 
                />
            </div>

            <div className="training">

            </div>
        </div>
    )
}