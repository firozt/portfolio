import { useState } from "react";
import "./index.css";

export const MainProject = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`main-proj ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded(!expanded)}
    >
      <h1>Hello</h1>
    </div>
  );
};
