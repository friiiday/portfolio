import { CoverLetter } from "../components/coverLetter/CoverLetter"
import { useTranslation } from "react-i18next";

export const Welcome = () => {

    const {t } = useTranslation();

    return (
        <div className="welcome">
            <div className="name">Stefan Mayr</div>
            <div className="roles">{ t("welcome.roles") }</div>
            <div className="image">IMG</div>
            <CoverLetter />
        </div>
    )
}