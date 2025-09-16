import Button from "../Button";
import "./GridView.css";

export default function GridView({ buttons }) {
  return (
    <div className="grid">
      {buttons.map(([gridRow, gridColumn]) => (
        <Button gridRow={gridRow} gridColumn={gridColumn} />
      ))}
    </div>
  );
}
