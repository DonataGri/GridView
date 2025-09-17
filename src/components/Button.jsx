export default function Button({ gridColumn, gridRow, onClick, active }) {
  const buttonStyle = {
    gridColumn,
    gridRow,
    backgroundColor: active ? "#ff0000" : "",
  };

  return <button style={{ ...buttonStyle }} onClick={onClick} />;
}
