import { ScrambledText } from "../ScrambledText"
import "./header.css"

export const Header = () => {
    return (
        <div className="header">
            <span className="name">
                St            
                <ScrambledText
                    text="e"
                    randomInterval= { true }
                    duration={ 2.5 }
                    speed={ 0.5 }
                    chars={ "eE3€eE3€eE3" }
                />fan Mayr
            </span>
            
        </div>
    )
}