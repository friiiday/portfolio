import "./mainMenu.css"
import { useHover } from "@uidotdev/usehooks";

type menuItem = {
    displayText: string;
}

export const MainMenuItem: React.FC<menuItem> = ({ displayText }) => {

    const [ref, hovering] = useHover();

    const length = hovering ? "64px" : "32px"

    const buttonClicked = () => {
        // navigate(path)
    }

    return (
        <div 
            className="main-menu-item"
            id={ displayText.toLowerCase() }  
            key={ displayText.toLowerCase() } 
            ref={ ref }
            onClick={ buttonClicked }
        >
            <div className="main-menu-button">
                <span className="bullet" style={{ width: length }}>
                    
                </span>
                <div className="display-text">
                    { displayText }
                </div>
            </div>
        </div>
    )
}