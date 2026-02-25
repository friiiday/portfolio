
interface props {
    collapsed: boolean;
    onClick: () => void;
}

const CollapsibleButton: React.FC<props> = ({ collapsed, onClick }) => {
    
    return (
        <div
            className={`collapsible-button ${collapsed ? "is-collapsed" : "is-open"}`}
            onClick={ onClick }
            >
                {/* Icon: open (arrow down) */}
                <div className="icon icon">
                <img src="/arrowIcon.svg" />
                </div>
            </div>
    )
}


export default CollapsibleButton;