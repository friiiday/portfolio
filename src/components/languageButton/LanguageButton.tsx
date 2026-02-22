import "./languageButton.css"
import { useTranslation } from "react-i18next";


export const LanguageButton = () => {

    const {i18n } = useTranslation();
    
    const toggleLanguage = () => {
        if (i18n.language == "de") {
            i18n.changeLanguage("en")
        } else {
            i18n.changeLanguage("de")
        }
    }

    return (
        <div className="language-button" onClick={ () => toggleLanguage() }>
            <div className="label">
            <img src="/languageIcon.svg" />
            </div>
        </div>
    )
}