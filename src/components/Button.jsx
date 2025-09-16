import { useState, useRef, useEffect } from "react";

export default function Button({ gridColumn, gridRow }) {
  const [active, setActive] = useState(false);
  const timeoutRef = useRef(null);

  const handleClick = () => {
    if (active) {
      setActive(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }

    setActive(true);

    timeoutRef.current = setTimeout(() => {
      setActive(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const buttonStyle = {
    gridColumn,
    gridRow,
    backgroundColor: active ? "#ff0000" : "",
  };

  return <button style={{ ...buttonStyle }} onClick={handleClick} />;
}
