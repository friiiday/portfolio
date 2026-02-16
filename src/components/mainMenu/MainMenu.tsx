import "./mainMenu.css"
import { MainMenuItem } from "./mainMenuItem"
import { useTranslation } from "react-i18next";

export const MainMenu = () => {
    const { t } = useTranslation();

    return (
        <div className="main-menu">
            <MainMenuItem displayText={ t("mainMenu.home") } />
            <MainMenuItem displayText={ t("mainMenu.experience") } />
            <MainMenuItem displayText={ t("mainMenu.projects") } />

        </div>
    )
}