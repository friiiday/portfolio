import { MainMenuItem } from "./mainMenuItem"

export const MainMenu = () => {

    return (
        <div className="mainMenu">
            {/* TODO: Name as logo */}
            <span className="name">Stefan Mayr</span>

            <MainMenuItem displayText="Home" path="home" />
            <MainMenuItem displayText="Experience" path="experience" />
            <MainMenuItem displayText="Projects" path="projects" />
        </div>
    )
}