import React, { useState, ReactNode } from "react";
import "./Collapsible.css";
import CollapsibleButton from "./CollapsibleButton";

type CollapsibleProps = {
  children: ReactNode;
  defaultCollapsed?: boolean;
  fixed?: boolean;
};

export const Collapsible: React.FC<CollapsibleProps> = ({
    children,
    defaultCollapsed = true,
    fixed
    }) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <div className="collapsible">
        {

            !fixed &&
            <CollapsibleButton 
                collapsed={ collapsed }
                onClick={ () => setCollapsed((c) => !c) }
            />
        }

            <div 
                className={`collapsible-content 
                    ${fixed ? "is-open" 
                        : collapsed ? "is-collapsed" 
                            : "is-open"}`
                }
            >
                {children}
            </div>
    </div>
  );
};
