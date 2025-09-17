import { useState, useRef, useEffect } from "react";
import Button from "../Button";
import "./GridView.css";

export default function GridView({ buttons }) {
  const [activeList, setActiveList] = useState([]);
  const timeoutRef = useRef(null);

  const handleClick = (btnKey) => {
    setActiveList((prev) => [...prev, btnKey]);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = setTimeout(() => {
      setInterval(() => {
        setActiveList((prev) => prev.slice(1));
      }, 800);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="grid">
      {buttons.map(([gridRow, gridColumn]) => (
        <Button
          key={`${gridRow}-${gridColumn}`}
          gridRow={gridRow}
          gridColumn={gridColumn}
          onClick={() => handleClick(`${gridRow}-${gridColumn}`)}
          active={activeList.includes(`${gridRow}-${gridColumn}`)}
        />
      ))}
    </div>
  );
}
