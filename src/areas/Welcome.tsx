import "./welcome.css"
import { CoverLetter } from "../components/coverLetter/CoverLetter"
import { ScrambledText } from "../components/ScrambledText";

export const Welcome = () => {
    
    return (
        <div className="welcome" id="home-area" >
            <div className="roles">
                <ScrambledText 
                    text={ "Full-Stack Software Engineer" } 
                    speed={ 0.2 } 
                    duration={ 3 } 
                />
                <br />
                <ScrambledText 
                    text={ "Software Architect" } 
                    speed={ 0.3 } 
                    duration={ 6 } 
                />
                <br />
                <ScrambledText 
                    text={ "Clean-Code Enthusiast" } 
                    speed={ 0.4 } 
                    duration={ 8 } 
                />
            </div>
            <CoverLetter />
        </div>
    )
}