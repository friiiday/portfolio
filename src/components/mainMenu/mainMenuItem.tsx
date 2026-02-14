import { useNavigate } from "react-router";

type menuItem = {
    displayText: string;
    path: string;
}

export const MainMenuItem: React.FC<menuItem> = ({ displayText, path }) => {

    const navigate = useNavigate()

    const buttonClicked = () => {
        navigate(path)
    }

    return (
        <div 
            className={ `main-menu-item:` + displayText.toLowerCase() } 
            key={ displayText.toLowerCase() } 
            onClick={ buttonClicked }
        >
            <button>{ displayText }</button>
        </div>
    )
}