import { MainMenuItem } from "./mainMenuItem"
import "./mainMenu.css"

export const MainMenu = () => {

    return (
        <div className="main-menu">
            <MainMenuItem displayText="Home" />
            <MainMenuItem displayText="Experience" />
            <MainMenuItem displayText="Projects" />
        </div>
    )
}