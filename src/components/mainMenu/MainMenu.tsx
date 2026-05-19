import "./mainMenu.css"
import { MainMenuItem } from "./mainMenuItem"


export const MainMenu = () => {
    

    return (
        <div className="main-menu">
            <MainMenuItem displayText={ "Home" } />
            <MainMenuItem displayText={ "Experience" } />
            <MainMenuItem displayText={ "Projects" } />
        </div>
    )
}