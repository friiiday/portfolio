import React, { useState, ReactNode } from "react";
import "./Collapsible.css";

type CollapsibleProps = {
  children: ReactNode;
  defaultCollapsed?: boolean;
};

export const Collapsible: React.FC<CollapsibleProps> = ({
  children,
  defaultCollapsed = true,
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <div className="collapsible">
      <div
        className={`collapsible-button ${collapsed ? "is-collapsed" : "is-open"}`}
        onClick={() => setCollapsed((c) => !c)}
      >
        {/* Icon: open (arrow down) */}
        <div className="icon icon">
          <img src="/arrowIcon.svg" />
        </div>
      </div>

      <div className={`collapsible-content ${collapsed ? "is-collapsed" : "is-open"}`}>
        {children}
      </div>
    </div>
  );
};
