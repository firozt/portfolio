import { useRef, useState } from "react";
import "./index.css";

export const MainProject = () => {
  const ref = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded((prev) => !prev);

    // wait for layout update
    requestAnimationFrame(() => {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    });
  };

  return (
    <div
      ref={ref}
      className={`main-proj ${expanded ? "expanded" : ""}`}
      onClick={handleClick}
    >
      <h1>Hello</h1>
    </div>
  );
};
