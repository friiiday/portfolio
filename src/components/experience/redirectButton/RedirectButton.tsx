import "./redirectButton.css"

type RedirectProps = {
    url?: string;
}

export const RedirectButton: React.FC<RedirectProps> = ({ url }) => {

    const isURLProvided = url ? true : false

    const handleClicked = () => { 
        if (isURLProvided) {
            window.open(url, "_blank", "noopener,noreferrer"); 
        }
    };

    return (
        <>
            {
                isURLProvided && 
                    <span 
                        className="redirect-button"
                        onClick={ handleClicked }
                    >
                        <img id="redirect-icon" src="./redirectIcon.svg" />
                    </span>
            }
        </>
    )
}