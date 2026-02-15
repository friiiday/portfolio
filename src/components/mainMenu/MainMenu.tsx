import "./mainMenu.css"
import { MainMenuItem } from "./mainMenuItem"
import { useTranslation } from "react-i18next";

export const MainMenu = () => {
    const {i18n, t } = useTranslation();

    return (
        <div className="main-menu">
            <span className="name">Stefan Mayr</span>
            <MainMenuItem displayText={ t("mainMenu.home") } />
            <MainMenuItem displayText={ t("mainMenu.experience") } />
            <MainMenuItem displayText={ t("mainMenu.projects") } />

            {/* TODO: Extract to own component & wrap in float button ⬇️ */}
            <button onClick={() => i18n.changeLanguage("de")}>DE</button>
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        </div>
    )
}