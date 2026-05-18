import { useTranslation } from "react-i18next";

export const Projects = () => {

    const { t } = useTranslation();

    return (
        <div className="projects" id={ `${ t("mainMenu.projects") }-area` }>
            Projects
        </div>
    )
}