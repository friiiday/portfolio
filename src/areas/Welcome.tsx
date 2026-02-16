import "./welcome.css"
import { CoverLetter } from "../components/coverLetter/CoverLetter"
import { useTranslation } from "react-i18next";
import { ScrambledText } from "../components/ScrambledText";

export const Welcome = () => {
    

    const { t } = useTranslation();

    return (
        <div className="welcome">
            <ScrambledText 
                text={ t("welcome.roles") } 
                speed={ 0.2 } 
                duration={ 3 } 
            />
            <CoverLetter />
        </div>
    )
}