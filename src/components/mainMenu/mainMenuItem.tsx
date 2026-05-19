import "./mainMenu.css"
import { useHover } from "@uidotdev/usehooks";
import { useScrollTo } from "../../gsap/useScrollTo";


type menuItem = {
    displayText: string;
}

export const MainMenuItem: React.FC<menuItem> = ({ displayText }) => {

    const [ref, hovering] = useHover();
    const length = hovering ? "64px" : "32px"
    const displayTextLowerCase = displayText.toLowerCase()

    const scrollTo = useScrollTo();

    const buttonClicked = () => {        
        scrollTo(`#${ displayTextLowerCase }-area`, 80)
    }    

    return (
        <div 
            className="main-menu-item"
            id={ displayTextLowerCase }  
            key={ displayTextLowerCase } 
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