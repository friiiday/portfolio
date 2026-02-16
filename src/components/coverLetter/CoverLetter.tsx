import "./coverLetter.css"
import { useTranslation } from "react-i18next";

export const CoverLetter = () => {
    
    const { t } = useTranslation();

    return (
        <div className="cover-letter">
            <p>{ t("coverLetter.text_1") }</p>
            <p>{ t("coverLetter.text_2") }</p>
            <p>{ t("coverLetter.text_3") }</p>
            <p>{ t("coverLetter.text_4") }</p>
            <p>{ t("coverLetter.text_5") }</p>
            <p>{ t("coverLetter.text_6") }</p>
        </div>
    )
}