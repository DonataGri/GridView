import Button from "../Button";
import "./Grid.css";

export default function Grid() {
  return (
    <div className="grid">
      <Button gridRow={1} gridColumn={1} />
      <Button gridRow={1} gridColumn={2} />
      <Button gridRow={1} gridColumn={3} />
      <Button gridRow={2} gridColumn={3} />
      <Button gridRow={3} gridColumn={1} />
      <Button gridRow={3} gridColumn={2} />
      <Button gridRow={3} gridColumn={3} />
    </div>
  );
}
