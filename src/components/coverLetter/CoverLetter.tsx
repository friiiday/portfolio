import { useTranslation } from "react-i18next";

export const CoverLetter = () => {
    const { t } = useTranslation();

    return (
        <div className="cover-letter">
            { t("coverLetter.text") }
        </div>
    )
}