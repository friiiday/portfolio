import "./mainMenu.css"

type menuItem = {
    displayText: string;
}

export const MainMenuItem: React.FC<menuItem> = ({ displayText }) => {


    const buttonClicked = () => {
        // navigate(path)
    }

    return (
        <div 
            className="main-menu-item"
            id={ displayText.toLowerCase()}  
            key={ displayText.toLowerCase() } 
            onClick={ buttonClicked }
        >
            <div className="main-menu-button">
                <div className="bullet">
                    
                </div>
                <div className="display-text">
                    { displayText }
                </div>
            </div>
        </div>
    )
}