import "./welcome.css"
import { CoverLetter } from "../components/coverLetter/CoverLetter"

import { ScrambledText } from "../components/ScrambledText";

export const Welcome = () => {
    

    

    return (
        <div className="welcome" id="home-area" >
            <ScrambledText 
                text={ "Full-Stack Software Engineer Clean-Code Enthusiast Designer" } 
                speed={ 0.2 } 
                duration={ 3 } 
            />
            <CoverLetter />
        </div>
    )
}